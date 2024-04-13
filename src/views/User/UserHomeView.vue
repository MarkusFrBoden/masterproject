<template>
  <div>
    <h3>{{ $t(filename + '.h3') }} {{ ExistingUser?.firstname }}</h3>
  </div>

  <br>

  <!-- Informationen über die Organisation  -->

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

      <br>
      <div v-if="allInputs === false">
        <em>{{ $t(filename + '.OrgaInformations.notAllInformation') }}</em>
      </div>

      <br>
      <button class="btn btn-outline-secondary" @click="showInput = !showInput">{{
        $t(filename + '.button.editInformation') }}</button>
      <br><br>

      <!-- Input für Informationen über die Organisation  -->
      <div v-if="showInput" class="overlay">
        <div class="input-container">
          <SurveyComp @surveyCompleted="handleSurveyCompleted" :survey="survey || {}" />
          <br>
          <div class="button-group">
            <button class="btn btn-outline-secondary custom-button" @click="showInput = false;">{{
              $t(filename + '.button.endInput') }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Dashboard Durchgeführte DMAs  -->
    <div class="col">
      <h5>{{ $t(filename + '.DmaInformations.title') }}</h5>

      <div class="rightbox">
        <h6>{{ $t(filename + '.DmaInformations.overview.title') }}</h6>
        <br><br><br><br><br><br><br>
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
import type { User } from "../../interfaces/User.js"
import SurveyComp from "../../components/SurveyComp.vue";
import { EUSurveyJSONModul1 } from '../../components/EUSurvey_Modul1_json.js'
import type { Survey } from "../../interfaces/Survey.js"
import { useI18n } from 'vue-i18n';
import type { languageMapping } from "../../interfaces/languageMapping.js"


//language prefix
const filename = 'UserHomeView'

//language key mappings
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
  "PIC":""
}

const getLanguageKey = (key: keyof languageMapping) => {
  if (languageMappings.hasOwnProperty(key)) {
    return t(languageMappings[key]);
  }
  return key;
}

//Get Start Data
const api = inject('api') as any;
let ExistingUser = ref<User>();
let UserId = localStorage.getItem('userId');

const getUser = async () => {
  try {
    const response = await api.get('/UserById/' + UserId);
    ExistingUser.value = response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
getUser()

//Input für Organisationsdaten vorbereiten (Typ Survey)
let showInput = ref(false);
let allInputs = ref(false);

const survey = ref<Survey>();
survey.value = {
  "title": "",
  "createdFor": "",
  "createdBy": "",
  "createdAt": new Date(),
  "updatedBy": "",
  "updatedAt": new Date(),
  "responses": [],
  "SurveyJson": {}
};
survey.value.SurveyJson = EUSurveyJSONModul1;


//Test ob alle Organisationsinformationen befüllt sind - sonst Anzeige im UI
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

//Bereits befüllte Informationen werden in Bearbeitungsabfrage als DefaultValue gesetzt
watch([ExistingUser, survey], ([user]) => {
  if (user && survey.value) {
    allInputs.value = checkValues(user.organization);
    survey.value.SurveyJson.pages[0].elements[0].elements[0].defaultValue = user.organization?.name;
    survey.value.SurveyJson.pages[0].elements[0].elements[1].defaultValue = user.organization?.identificationNumber;
    survey.value.SurveyJson.pages[0].elements[0].elements[2].elements[0].defaultValue = user.organization?.contactPerson.name;
    survey.value.SurveyJson.pages[0].elements[0].elements[2].elements[1].defaultValue = user.organization?.contactPerson.role;
    survey.value.SurveyJson.pages[0].elements[0].elements[2].elements[2].defaultValue = user.organization?.contactPerson.email;
    survey.value.SurveyJson.pages[0].elements[0].elements[2].elements[3].defaultValue = user.organization?.contactPerson.telephone;
    survey.value.SurveyJson.pages[0].elements[0].elements[3].defaultValue = user.organization?.website;
    survey.value.SurveyJson.pages[0].elements[0].elements[4].defaultValue = user.organization?.type;
    survey.value.SurveyJson.pages[0].elements[0].elements[5].defaultValue = user.organization?.size;
    survey.value.SurveyJson.pages[0].elements[0].elements[6].defaultValue.text1 = user.organization?.address.street;
    survey.value.SurveyJson.pages[0].elements[0].elements[6].defaultValue.text2 = user.organization?.address.postalcode;
    survey.value.SurveyJson.pages[0].elements[0].elements[6].defaultValue.text3 = user.organization?.address.city;
    survey.value.SurveyJson.pages[0].elements[0].elements[6].defaultValue.text4 = user.organization?.address.country;
    survey.value.SurveyJson.pages[0].elements[1].elements[0].elements[0].defaultValue = user.organization?.primarySektor;
    survey.value.SurveyJson.pages[0].elements[1].elements[0].elements[1].defaultValue = user.organization?.secondarySektor;
  }
});

//Mapping der Abfragefelder aus der SurveyJS-Antwort auf die Datenbankstruktur der Organisation
let mapping = (object: any) => {
  const User: User = ExistingUser.value as User;
  delete User._id;

  const mappings: any = {
    "EU-1-1-2": (value: any) => { User.organization.name = value; },
    "EU-1-1-3": (value: any) => { User.organization.identificationNumber = value; },
    "EU-1-1-4": (value: any) => { User.organization.contactPerson.name = value; },
    "EU-1-1-5": (value: any) => { User.organization.contactPerson.role = value; },
    "EU-1-1-6": (value: any) => { User.organization.contactPerson.email = value; },
    "EU-1-1-7": (value: any) => { User.organization.contactPerson.telephone = value; },
    "EU-1-1-8": (value: any) => { User.organization.website = value; },
    "EU-1-1-9": (value: any) => { User.organization.type = value; },
    "EU-1-1-10": (value: any) => { User.organization.size = value; },
    "EU-1-2-13-1": (value: any) => { User.organization.primarySektor = value; },
    "EU-1-2-13-2": (value: any) => { User.organization.secondarySektor = value; },
    "text1": (value: any) => { User.organization.address.street = value; },
    "text2": (value: any) => { User.organization.address.postalcode = value; },
    "text3": (value: any) => { User.organization.address.city = value; },
    "text4": (value: any) => { User.organization.address.country = value; }
  };

  for (const key in mappings) {
    if (object.hasOwnProperty(key)) {
      mappings[key](object[key]);
    }
    if (object["EU-1-1-11"] && object["EU-1-1-11"].hasOwnProperty(key)) {
      mappings[key](object["EU-1-1-11"][key]);
    }
  }

  return User;
};

//PatchUser bei beenden des Inputs, sollten Änderungen vorgenommen worden sein 
const patchUser = async (data: any) => {
  try {
    const response = await api.patch('/UserById/' + UserId, data);
    console.log('Daten erfolgreich an die Route gesendet:', response.data);
    getUser()
  } catch (err) {
    console.error('Error patchching data:', err);
  }
};

const handleSurveyCompleted = (results: any) => {
  const User: User = mapping(results);
  patchUser(User)
};

</script>

<style scoped>
.data {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.dark .data {
  background: #020b3d;
}

.input-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 16px;
  border: 1px solid #919191;
  border-radius: 12px;
  width: 800px;
  height: 800px;
}

.dark .input-container {
  background: #16171d;
}

.input-container input {
  margin-bottom: 8px;
  border: 1px solid #919191;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  overflow-y: auto;
}

.custom-button {
  background-color: white !important;
}

.custom-button:hover {
  color: black !important;
  background-color: rgba(255, 255, 255, 0.651) !important;
}


.leftbox {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  padding-left: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  margin-right: 15px;
  text-align: left
}


.rightbox {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  padding-left: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 15px;
  margin-right: 40px;
  text-align: left
}

.dark .leftbox,
.dark .rightbox {
  background: #020b3d;
}

.leftbox h6,
.rightbox h6 {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: bold;
}
</style>