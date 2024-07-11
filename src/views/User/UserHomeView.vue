<template>
  <div>
    <h3>{{ $t(filename + '.h3') }} {{ ExistingUser?.name }}</h3>
  </div>
  <br>

  <!-- home informations  -->
  <h4>{{ $t(filename + '.h4') }} {{ ExistingUser?.organization.name }}</h4>
  <br>
  <div class="container">

    <div class="row">
      <!-- organization -->

      <div class="col">
        <div v-if="ExistingUser?.organization.PSO_SME === 'PSO'">
          <!-- PSO -->
          <h5>{{ $t(filename + '.OrgaInformations.title') }}</h5>
          <div class="leftbox" style="height: 350px;">
            <h6>{{ $t(filename + '.OrgaInformations.organization.title') }}</h6>
            <div v-for="(value, key) in ExistingUser?.organization" :key="key">
              <div
                v-if="value && key !== 'contactPerson' && key !== 'PSO_SME' && key !== 'address' && key !== 'euDmaResults' && key !== 'lastDma'">
                <div class="row">
                  <div class="col">
                    <span>{{ getLanguageKey(key) }}</span>
                  </div>
                  <div class="col">
                    <div v-if="key === 'type'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.type1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.type2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.type3') }}
                      </div>
                      <div v-else>
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.type4') }}
                      </div>
                    </div>
                    <div v-else-if="key === 'size'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.size1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.size2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.size3') }}
                      </div>
                    </div>
                    <div v-else-if="key === 'primarySektor'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector3') }}
                      </div>
                      <div v-if="value === 'Item 4'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector4') }}
                      </div>
                      <div v-else-if="value === 'Item 5'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector5') }}
                      </div>
                      <div v-else-if="value === 'Item 6'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector6') }}
                      </div>
                      <div v-if="value === 'Item 7'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector7') }}
                      </div>
                      <div v-else-if="value === 'Item 8'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector8') }}
                      </div>
                      <div v-else-if="value === 'Item 9'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector9') }}
                      </div>
                      <div v-else-if="value === 'Item 10'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector10') }}
                      </div>
                      <div v-else-if="value === 'other'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.primarySector11') }}
                      </div>
                    </div>
                    <div v-else-if="key === 'secondarySektor'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector3') }}
                      </div>
                      <div v-if="value === 'Item 4'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector4') }}
                      </div>
                      <div v-else-if="value === 'Item 5'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector5') }}
                      </div>
                      <div v-else-if="value === 'Item 6'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector6') }}
                      </div>
                      <div v-if="value === 'Item 7'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector7') }}
                      </div>
                      <div v-else-if="value === 'Item 8'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector8') }}
                      </div>
                      <div v-else-if="value === 'Item 9'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector9') }}
                      </div>
                      <div v-else-if="value === 'Item 10'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector10') }}
                      </div>
                      <div v-else-if="value === 'other'">
                        {{ $t(filename + '.OrgaInformations.organization.values.PSO.secondarySector11') }}
                      </div>
                    </div>
                    <div v-else>
                      <span>{{ value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- show message for missing organization information  -->
            <div v-if="allInformation === false">
              <br>
              <em>{{ $t(filename + '.OrgaInformations.addInformation') }}</em>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- SME -->
          <h5>{{ $t(filename + '.OrgaInformations.title') }}</h5>
          <div class="leftbox" style="height: 350px;">
            <h6>{{ $t(filename + '.OrgaInformations.organization.title') }}</h6>
            <div v-for="(value, key) in ExistingUser?.organization" :key="key">
              <div
                v-if="value && key !== 'contactPerson' && key !== 'PSO_SME' && key !== 'address' && key !== 'euDmaResults' && key !== 'lastDma'">
                <div class="row">
                  <div class="col">
                    <span>{{ getLanguageKey(key) }}</span>
                  </div>
                  <div class="col">
                    <!-- <div v-if="key === 'type'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.type1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.type2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.type3') }}
                      </div>
                      <div v-else>
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.type4') }}
                      </div>
                    </div> -->
                    <div v-if="key === 'size'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.size1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.size2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.size3') }}
                      </div>
                      <div v-else-if="value === 'Item 4'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.size4') }}
                      </div>
                    </div>
                    <div v-else-if="key === 'primarySektor'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector3') }}
                      </div>
                      <div v-if="value === 'Item 4'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector4') }}
                      </div>
                      <div v-else-if="value === 'Item 5'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector5') }}
                      </div>
                      <div v-else-if="value === 'Item 6'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector6') }}
                      </div>
                      <div v-if="value === 'Item 7'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector7') }}
                      </div>
                      <div v-else-if="value === 'Item 8'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector8') }}
                      </div>
                      <div v-else-if="value === 'Item 9'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector9') }}
                      </div>
                      <div v-else-if="value === 'Item 10'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector10') }}
                      </div>
                      <div v-else-if="value === 'other'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.primarySector11') }}
                      </div>
                    </div>
                    <div v-else-if="key === 'secondarySektor'">
                      <div v-if="value === 'Item 1'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector1') }}
                      </div>
                      <div v-else-if="value === 'Item 2'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector2') }}
                      </div>
                      <div v-else-if="value === 'Item 3'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector3') }}
                      </div>
                      <div v-if="value === 'Item 4'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector4') }}
                      </div>
                      <div v-else-if="value === 'Item 5'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector5') }}
                      </div>
                      <div v-else-if="value === 'Item 6'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector6') }}
                      </div>
                      <div v-if="value === 'Item 7'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector7') }}
                      </div>
                      <div v-else-if="value === 'Item 8'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector8') }}
                      </div>
                      <div v-else-if="value === 'Item 9'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector9') }}
                      </div>
                      <div v-else-if="value === 'Item 10'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector10') }}
                      </div>
                      <div v-else-if="value === 'other'">
                        {{ $t(filename + '.OrgaInformations.organization.values.SME.secondarySector11') }}
                      </div>
                    </div>
                    <div v-else>
                      <span>{{ value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- show message for missing organization information  -->
            <div v-if="allInformation === false">
              <br>
              <em>{{ $t(filename + '.OrgaInformations.addInformation') }}</em>
            </div>
          </div>

        </div>
      </div>

      <!-- EU-DMAs -->
      <div class="col">
        <h5>{{ $t(filename + '.DmaInformations.title') }}</h5>
        <div class="rightbox" style="height: 350px;">
          <h6>{{ $t(filename + '.DmaInformations.overview.title') }}</h6>
          <div v-if="ExistingUser">
            <div v-if="ExistingUser.organization.euDmaResults.length > 0">
              <div v-if="radarChartDataValues.datasets.length > 0">
                <div>
                  <radarChart :data="radarChartDataValues" height="300px" width="400px" />
                </div>
              </div>
            </div>
            <div v-else>
              <em>{{ $t(filename + '.OrgaInformations.startEuDma') }}</em>
              <br> <br>
              <button class="btn btn-outline-secondary" @click="$router.push({ name: 'UserDma' })">{{ $t(filename +
                '.button.startDma') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- adress -->
      <div class="col">
        <div class="leftbox" style="height: 210px;">
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
      </div>
      <!-- eu maturity -->
      <div class="col">
        <div class="rightbox" style="height: 210px;">
          <h6>{{ $t(filename + '.DmaInformations.maturity.title') }}</h6>
          <div v-if="ExistingUser">
            <div v-if="ExistingUser.organization.euDmaResults.length > 0">
              <div class="row">
                <div class="col" style="text-align: center;">
                  <div>
                    <br>
                    {{ $t(filename + '.total') }}
                    <br>
                  </div>
                  <span style="font-size: 50px; color:  #41B883;">{{ UserEuDmaValue }}</span>
                </div>
                <div class="col">
                  <div v-if="doughnutChartDataValue.datasets.length > 0">
                    <div>
                      <doughnutChart :data="doughnutChartDataValue" height="150px" width="150px" />
                    </div>
                  </div>
                </div>
                <div class="col" style="text-align: center;">
                  <br>
                  {{ $t(filename + '.dmaStatus') }}
                  <br>
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
                    <div v-else>
                      <img class="image" src="../../assets/nodma.png" alt="noEudma">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              comming soon...
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- contact person -->
      <div class="col">
        <div class="leftbox" style="height: 180px;">
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
      </div>
      <!-- last dma -->
      <div class="col">
        <div class="rightbox" style="height: 180px;">
          <h6>{{ $t(filename + '.DmaInformations.lastDma.title') }}</h6>
          <div v-if="ExistingUser">
            <div v-if="ExistingUser.organization.euDmaResults.length > 0">
              <div class="list">
                <li>
                  <div class="row">
                    <div class="col"><b>{{ $t(filename + '.DmaInformations.lastDma.name') }}</b></div>
                    <div class="col"><b>{{ $t(filename + '.DmaInformations.lastDma.createdBy') }}</b></div>
                    <div class="col"><b>{{ $t(filename + '.DmaInformations.lastDma.createdAt') }}</b></div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <RouterLink
                        :to="{ name: 'UserDmaDetails', params: { id: ExistingUser.organization.lastDma.id.toString() } }">
                        <a href="">{{ ExistingUser.organization.lastDma.title }}</a>
                      </RouterLink>
                    </div>
                    <div class="col">{{ ExistingUser.organization.lastDma.createdBy }}</div>
                    <div class="col">{{ ExistingUser.organization.lastDma.createdAt }}</div>
                  </div>
                </li>
              </div>
            </div>
            <div v-else>
              comming soon...
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

  <br><br>

</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue';
import SurveyComp from "../../components/SurveyComp.vue";
import { useI18n } from 'vue-i18n';
import { GetPSOInformation } from '../../components/staticQuestions/GetPSOInformation_json.js'
import { GetSMEInformation } from '../../components/staticQuestions/GetSMEInformation_json.js'
import type { languageMapping } from "../../interfaces/languageMapping.js"
import type { User } from "../../interfaces/User.js"
import type { radarChartData } from "../../interfaces/radarChartData.js"
import type { doughnutChartData } from "../../interfaces/doughnutChartData.js"
import doughnutChart from "../../components/charts/doughnutChart.vue";
import radarChart from "../../components/charts/radarChart.vue";

//filename for language tags
const filename = 'UserHomeView'

//enable api via global variable
const api = inject('api') as any;

//use I18n for language keys
const { t } = useI18n();

//show and hide elements
let showInput = ref(false);
let allInformation = ref(false);

//get start data
const UserId = localStorage.getItem('userId');
let ExistingUser = ref<User>();
const getUser = async () => {
  try {
    const response = await api.get('/UserById/' + UserId);
    ExistingUser.value = response.data;
    createChartData();
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
getUser()

//create form data
//format radar and doughnut> chart data
let UserEuDmaValue = ref<Number>();
let doughnutChartDataValue = ref<doughnutChartData>({
  labels: [t(filename + '.results.total'), t(filename + '.results.missing')],
  datasets: []
}
)
let radarChartDataValues = ref<radarChartData>({
  labels: [t(filename + '.results.dimension1'),
  t(filename + '.results.dimension2'),
  t(filename + '.results.dimension3'),
  t(filename + '.results.dimension4'),
  t(filename + '.results.dimension5'),
  t(filename + '.results.dimension6')],
  datasets: []
});
const createChartData = () => {
  if (ExistingUser.value && ExistingUser.value.organization.euDmaResults.length > 0) {
    let dmaResults = ExistingUser.value?.organization.euDmaResults
    for (let i = 0; i < dmaResults.length; i++) {
      radarChartDataValues.value.datasets.push(
        {
          label: ExistingUser.value?.organization.euDmaResults[i].dmaStatus + t(filename + '.results.title'),
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [dmaResults[i].dim1, dmaResults[i].dim2, dmaResults[i].dim3, dmaResults[i].dim4, dmaResults[i].dim5, dmaResults[i].dim6]
        }
      );
    }
    function sumDimsForHighestStatus(data: any) {
      let sum = 0;
      for (const item of data) {
        if (item.dmaStatus === ExistingUser.value?.organization.euDmaStatus) {
          sum = item.dim1 + item.dim2 + item.dim3 + item.dim4 + item.dim5 + item.dim6;
        }
      }
      return sum;
    }
    const currentEuDmaValue = (sumDimsForHighestStatus(ExistingUser.value.organization.euDmaResults)) / 6;
    UserEuDmaValue.value = Math.round(currentEuDmaValue);
    doughnutChartDataValue.value.datasets.push(
      {
        backgroundColor: ['#41B883', '#E46651'],
        data: [currentEuDmaValue, 100 - currentEuDmaValue]
      }
    )
  }
}

//mapping from surveyJs answers to patchUser object
let mapping = (object: any) => {
  let patchUser: User = ExistingUser.value as User;
  delete patchUser._id;

  const mappings: any = {
    "EUPSOQuestion3": (value: any) => { patchUser.organization.identificationNumber = value; },
    "EUPSOQuestion4": (value: any) => { patchUser.organization.contactPerson.name = value; },
    "EUPSOQuestion5": (value: any) => { patchUser.organization.contactPerson.role = value; },
    "EUPSOQuestion6": (value: any) => { patchUser.organization.contactPerson.email = value; },
    "EUPSOQuestion7": (value: any) => { patchUser.organization.contactPerson.telephone = value; },
    "EUPSOQuestion8": (value: any) => { patchUser.organization.website = value; },
    "EUPSOQuestion9": (value: any) => { patchUser.organization.type = value; },
    "EUPSOQuestion10": (value: any) => { patchUser.organization.size = value; },
    "EUPSOQuestion13": (value: any) => { patchUser.organization.primarySektor = value; },
    "EUPSOQuestion14": (value: any) => { patchUser.organization.secondarySektor = value; },
    "text1": (value: any) => { patchUser.organization.address.street = value; },
    "text2": (value: any) => { patchUser.organization.address.postalcode = value; },
    "text3": (value: any) => { patchUser.organization.address.city = value; },
    "text4": (value: any) => { patchUser.organization.address.country = value; }
  };

  for (const key in mappings) {
    if (object.hasOwnProperty(key)) {
      mappings[key](object[key]);
    }
    if (object["EUPSOQuestion11"] && object["EUPSOQuestion11"].hasOwnProperty(key)) {
      mappings[key](object["EUPSOQuestion11"][key]);
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
if (ExistingUser.value?.organization.PSO_SME === 'PSO') {
  organizationQuestions.value.SurveyJson = GetPSOInformation
} else {
  organizationQuestions.value.SurveyJson = GetSMEInformation
};

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
  "euDmaStatus": filename + '.OrgaInformations.organization.euDmaStatus',
  "lastDma": ""
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
  height: 85%;
}

.image {
  max-width: 100px;
  max-height: 100px;
}

/* Custom dma list */
.list {
  margin: 20px auto !important;
}

.list li {
  background: rgba(214, 206, 206, 0.692) !important;
}

.dark .list li {
  list-style-type: none;
  background: rgba(54, 48, 95, 0.692) !important;
}
</style>