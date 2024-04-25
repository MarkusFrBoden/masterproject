<template>
  <div>
    <h3>{{ $t(filename + '.h3') }} {{ ExistingUser?.name }}</h3>
  </div>
  <br>

  <!-- organization informations  -->
  <h4>{{ $t(filename + '.h4') }} {{ ExistingUser?.organization.name }}</h4>
  <br>
  <div class="row">
    <div class="col">
      <h5>{{ $t(filename + '.OrgaInformations.title') }}</h5>
      <div class="leftbox">
        <h6>{{ $t(filename + '.OrgaInformations.organization.title') }}</h6>
        <div v-for="(value, key) in ExistingUser?.organization" :key="key">
          <div v-if="value && key !== 'contactPerson' && key !== 'address'">
            <div class="row">
              <div class="col">
                <span>{{ getLanguageKey(key) }}</span>
              </div>
              <div class="col">
                <span>{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="leftbox">
        <h6>{{ $t(filename + '.OrgaInformations.address.title') }}</h6>
        <div v-for="(value, key) in ExistingUser?.organization.address" :key="key">
          <div v-if="value">
            <div class="row">
              <div class="col">
                <span>{{ getLanguageKey(key) }}</span>
              </div>
              <div class="col">
                <span>{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="leftbox">
        <h6>{{ $t(filename + '.OrgaInformations.contact.title') }}</h6>
        <div v-for="(value, key) in ExistingUser?.organization.contactPerson" :key="key">
          <div v-if="value">
            <div class="row">
              <div class="col">
                <span>{{ getLanguageKey(key) }}</span>
              </div>
              <div class="col">
                <span>{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- show message for missing organization information  -->
      <div v-if="allInformation === false">
        <em>{{ $t(filename + '.OrgaInformations.notAllInformation') }}</em>
      </div>

      <!-- button edit organization information  -->
      <br>
      <button class="btn btn-outline-secondary" @click="showInput = !showInput">{{
        $t(filename + '.button.editInformation') }}</button>
      <br><br>

      <!-- edit organization interfact -->
      <div v-if="showInput" class="overlay">
        <div class="input-container">
          <SurveyComp @surveyCompleted="handleDmaCompleted" :survey="organizationQuestions || {}" surveyMode="edit" />
          <br>
          <div class="button-group">
            <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">{{
              $t(filename + '.button.endInput') }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- organizationQuestions dashboard  -->
    <div class="col">
      <h5>{{ $t(filename + '.DmaInformations.title') }}</h5>

      <div class="rightbox">
        <h6>{{ $t(filename + '.DmaInformations.overview.title') }}</h6>

        <div v-if="ExistingUser?.organization.euDmaStatus !== '0'" class="col">
          <div v-if="ExistingUser?.organization.euDmaStatus === 'T0'">
            <img class="image" src="../../assets/dma_T0.png" alt="T0-Batch">
          </div>
          <div v-else-if="ExistingUser?.organization.euDmaStatus === 'T1'">
            <img class="image" src="../../assets/dma_T1.png" alt="T1-Batch">
          </div>
          <div v-else-if="ExistingUser?.organization.euDmaStatus === 'T2'">
            <img class="image" src="../../assets/dma_T2.png" alt="T2-Batch">
          </div>
        </div>
        <br><br>
      </div>
      <br>
      <div class="rightbox">
        <h6>{{ $t(filename + '.DmaInformations.maturity.title') }}</h6>
        <br><br><br><br>
      </div>
      <br>
      <div class="rightbox">
        <h6>{{ $t(filename + '.DmaInformations.lastDma.title') }}</h6>
        <br><br><br><br>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue';
import SurveyComp from "../../components/SurveyComp.vue";
import { useI18n } from 'vue-i18n';
import { GetOrganizationInformation } from '../../components/CreateOrgaInformation_json.js'
import type { languageMapping } from "../../interfaces/languageMapping.js"
import type { User } from "../../interfaces/User.js"


//filename for language tags
const filename = 'UserHomeView'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showInput = ref(false);
let allInformation = ref(false);

//get start data
let UserId = localStorage.getItem('userId');
let ExistingUser = ref<User>();
const getUser = async () => {
  try {
    const response = await api.get('/UserById/' + UserId);
    ExistingUser.value = response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
getUser()

//mapping from surveyJs answers to patchUser object
let mapping = (object: any) => {
  const patchUser: User = ExistingUser.value as User;
  delete patchUser._id;

  const mappings: any = {
    "EU-1-1-2": (value: any) => { patchUser.organization.name = value; },
    "EU-1-1-3": (value: any) => { patchUser.organization.identificationNumber = value; },
    "EU-1-1-4": (value: any) => { patchUser.organization.contactPerson.name = value; },
    "EU-1-1-5": (value: any) => { patchUser.organization.contactPerson.role = value; },
    "EU-1-1-6": (value: any) => { patchUser.organization.contactPerson.email = value; },
    "EU-1-1-7": (value: any) => { patchUser.organization.contactPerson.telephone = value; },
    "EU-1-1-8": (value: any) => { patchUser.organization.website = value; },
    "EU-1-1-9": (value: any) => { patchUser.organization.type = value; },
    "EU-1-1-10": (value: any) => { patchUser.organization.size = value; },
    "EU-1-2-13-1": (value: any) => { patchUser.organization.primarySektor = value; },
    "EU-1-2-13-2": (value: any) => { patchUser.organization.secondarySektor = value; },
    "text1": (value: any) => { patchUser.organization.address.street = value; },
    "text2": (value: any) => { patchUser.organization.address.postalcode = value; },
    "text3": (value: any) => { patchUser.organization.address.city = value; },
    "text4": (value: any) => { patchUser.organization.address.country = value; }
  };

  for (const key in mappings) {
    if (object.hasOwnProperty(key)) {
      mappings[key](object[key]);
    }
    if (object["EU-1-1-11"] && object["EU-1-1-11"].hasOwnProperty(key)) {
      mappings[key](object["EU-1-1-11"][key]);
    }
  }

  return patchUser;
};

//patch user with new organization data
const patchUserFunction = async (data: any) => {
  try {
    const response = await api.patch('/UserById/' + UserId, data);
    console.log('Daten erfolgreich an die Route gesendet:', response.data);
    getUser()
  } catch (err) {
    console.error('Error patchching data:', err);
  }
};

const handleDmaCompleted = (results: any) => {
  const patchUser: User = mapping(results);
  patchUserFunction(patchUser)
};

//use surveyJs questions
const organizationQuestions = ref<any>();
organizationQuestions.value = {
  "SurveyJson": {}
};
organizationQuestions.value.SurveyJson = GetOrganizationInformation;

// rekursive function to assign defaultValues to element names
function updateDefaultValueByName(element: any, name: string, newValue: any): void {
  if (element.name === name) {
    element.defaultValue = newValue;
  } else if (element.elements) {
    for (const nestedElement of element.elements) {
      updateDefaultValueByName(nestedElement, name, newValue);
    }
  }
}

//use existing organization information for default values in questionaire
watch([ExistingUser, organizationQuestions], ([user]) => {
  if (user && organizationQuestions.value) {
    allInformation.value = checkValues(user.organization);
    const topLevelElement = organizationQuestions.value.SurveyJson.pages[0]
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion3', user.organization?.identificationNumber);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion4', user.organization?.contactPerson.name);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion5', user.organization?.contactPerson.role);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion6', user.organization?.contactPerson.email);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion7', user.organization?.contactPerson.telephone);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion8', user.organization?.website);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion9', user.organization?.type);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion10', user.organization?.size);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion11', {
      "text1": user.organization?.address.street,
      "text2": user.organization?.address.postalcode,
      "text3": user.organization?.address.city,
      "text4": user.organization?.address.country,
    });
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion13', user.organization?.primarySektor);
    updateDefaultValueByName(topLevelElement, 'EUPSOQuestion14', user.organization?.secondarySektor);
  }
});

//check if all organization information are filled
const checkValues = (obj: any): boolean => {
  for (const key in obj) {
    if (key !== 'PIC') {
      if (typeof obj[key] === 'object') {
        if (!checkValues(obj[key])) {
          return false;
        }
      } else if (!obj[key] || obj[key] === "") {
        return false;
      }
    }
  }
  return true;
};

//language key mappings for for-loops of organization data in html
const { t } = useI18n();
const languageMappings: languageMapping = {
  "name": filename + '.OrgaInformations.organization.name',
  "identificationNumber": filename + '.OrgaInformations.organization.id',
  "role": filename + '.OrgaInformations.contact.role',
  "email": filename + '.OrgaInformations.contact.email',
  "telephone": filename + '.OrgaInformations.contact.tel',
  "website": filename + '.OrgaInformations.organization.website',
  "type": filename + '.OrgaInformations.organization.type',
  "size": filename + '.OrgaInformations.organization.size',
  "street": filename + '.OrgaInformations.address.street',
  "postalcode": filename + '.OrgaInformations.address.postalcode',
  "city": filename + '.OrgaInformations.address.city',
  "country": filename + '.OrgaInformations.address.street',
  "primarySektor": filename + '.OrgaInformations.organization.primarySector',
  "secondarySektor": filename + '.OrgaInformations.organization.secondarySector',
  "PIC": "",
  "euDmaStatus": filename + '.OrgaInformations.organization.euDmaStatus'
}

const getLanguageKey = (key: keyof languageMapping) => {
  if (languageMappings.hasOwnProperty(key)) {
    return t(languageMappings[key]);
  }
  return key;
}
</script>

<style scoped>
/* Input container customization*/
.input-container {
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
}

.image {
  max-width: 100px;
  max-height: 100px;
}

.leftbox {
    margin-left: 40px
}
.rightbox {
  margin-right: 40px
}

</style>