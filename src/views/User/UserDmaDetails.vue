<template>
    <div v-if="dmaDetails">
        <h3>{{ dmaDetails.title }} - {{ $t(filename + '.organization') }} {{ dmaDetails.createdFor }}</h3>
        <br>

        <h4>{{ $t(filename + '.dmaData') }}</h4>
        {{ $t(filename + '.creator') }} {{ dmaDetails.createdBy }} ||
        {{ $t(filename + '.createdAt') }} {{ dmaDetails.createdAt }} ||
        {{ $t(filename + '.editor') }} {{ dmaDetails.updatedBy }} ||
        {{ $t(filename + '.editedAt') }} {{ dmaDetails.updatedAt }}
        <br><br>

        <!-- check if dma was answered  -->
        <div v-if="dmaDetails.responses.length > 0">
            <button class="btn btn-outline-secondary" @click="showResultDetails = !showResultDetails;">
                {{ $t(filename + '.button.DmaAnswers') }}
            </button>
            <br><br>
            <!-- check if it includes EU questions  -->
            <div v-if="dmaDetails.euDMA !== 'false'">
                <!-- show answers and results  -->
                <h5>{{ $t(filename + '.euAnswers') }}</h5>
                <br>
                <!-- render EU results -->
                <div v-if="newEuResults && radarChartDataValues && doughnutChartDataValues">
                    <EuResultsComp :newEuResults="newEuResults" :radarChartDataValues="radarChartDataValues"
                        :doughnutChartDataValues="doughnutChartDataValues" />
                </div>
            </div>
            <!-- BIM4VID Response  -->
            <div
                v-if="(dmaDetails.SurveyJson.pages[0] && checkForKey(dmaDetails.SurveyJson.pages[0], 'BIM4VIDQuestion1')) || (dmaDetails.SurveyJson.pages[8] && checkForKey(dmaDetails.SurveyJson.pages[8], 'BIM4VIDQuestion1'))">
                <!-- render BIM4VID results -->
                <div v-if="trafficLightKPI">
                    <BIM4VIDResultsComp :trafficLightKPI="trafficLightKPI" />
                </div>
            </div>

            <i>{{ $t(filename + '.UserText') }}</i>
            <!-- show previous survey js answers  -->
            <br><br>
            <div v-if="showResultDetails" class="overlay">
                <div class="input-container">
                    <SurveyComp :survey="dmaDetails" surveyMode="Display" />
                </div>
                <div class="button-container">
                    <button class="btn btn-outline-secondary custom-button2" @click="showResultDetails = false">{{
                        $t(filename + '.button.closeEuAnswers') }}</button>
                </div>
            </div>
        </div>
        <div v-else>
            <!-- survey js component for submit dma  -->
            <br><br>
            <div>
                <button class="btn btn-outline-secondary" @click="showSurvey = !showSurvey">
                    {{ $t(filename + '.button.startDMA') }}
                </button>
            </div>
            <div v-if="showSurvey" class="overlay">
                <div class="input-container">
                    <SurveyComp @surveyCompleted="handleDmaCompleted" :survey="dmaDetails" surveyMode="edit" />
                </div>
                <div class="button-container">
                    <button class="btn btn-outline-secondary custom-button2" @click="showSurvey = false">
                        {{ $t(filename + '.button.stopDma') }}
                    </button>
                    <select class="btn btn-outline-secondary custom-button2" v-model="$i18n.locale">
                        <option value="en">EN</option>
                        <option value="de">DE</option>
                    </select>
                </div>
            </div>
            <br><br>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
//vue
import { ref, watch, inject } from "vue";
//ts interfaces
import type { DMA } from "../../interfaces/DMA.js"
import type { User } from "../../interfaces/User.js"
import type { radarChartData } from "../../interfaces/radarChartData.js"
import type { doughnutChartData } from "../../interfaces/doughnutChartData.js"
import type { EuResult } from "../../interfaces/EuResults.js"
//functions
import { EUcalculation } from "../../components/functions/EuResultsCalulation.js";
import { BIM4VIDcalculation } from "../../components/functions/BIM4VIDResultsCalulation.js";
import { fillSurveyResponses } from "../../components/functions/surveyResponses.js";
//vue components
import SurveyComp from "../../components/SurveyComp.vue";
import EuResultsComp from "../../components/EuResultsComp.vue";
import BIM4VIDResultsComp from "../../components/BIM4VIDResultsComp.vue";

//filename for language tags
const filename = 'DmaDetails'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showResultDetails = ref(false);
let showSurvey = ref(false);

//accept props from UserDmaView with dma id
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

//get start data
let currentUserName = localStorage.getItem('userName') || '';
let UserId = localStorage.getItem('userId');
let dmaDetails = ref<DMA>();
const fetchData = async () => {
    try {
        const response = await api.get('/DmaById/' + props.id);
        dmaDetails.value = await response.data;
    } catch (err: any) {
        console.error(err.message);
    }
    ResultCalculation();
};
fetchData();

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

//patch to add new dma answers
const handleDmaCompleted = async (results: any) => {
    let data = [];
    if (dmaDetails.value?.responses) {
        for (const response of dmaDetails.value.responses) {
            data.push(response);
        }
    }
    let newResponse = {
        "responseDate": new Date(),
        "responseClient": currentUserName,
        "data": results
    };
    data.push(newResponse);
    let patchResponses = {
        responses: data
    };
    try {
        if (dmaDetails.value) {
            const response = await api.patch('/DmaById/' + dmaDetails.value._id, patchResponses);
            console.log('dma patch success:', response.data);
            await fetchData();
            patchOrganization();
        } else { console.error('dmm null or undefined'); }
    } catch (err) {
        console.error('Error patchching data:', err);
    }
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

// rekursive function to check for key
function checkForKey(element: any, name: string): boolean {
    if (element.name === name) {
        return true;
    } else if (element.elements) {
        for (const nestedElement of element.elements) {
            if (checkForKey(nestedElement, name)) {
                return true;
            }
        }
    }
    return false;
}

//use organization data for default values in EUPSO questionaire
watch([ExistingUser, dmaDetails], ([user]) => {
    if (user && dmaDetails.value && dmaDetails.value.SurveyJson) {
        const topLevelElement = dmaDetails.value.SurveyJson.pages[0]
        if (checkForKey(topLevelElement, 'EUPSOQuestion1')) {
            try {
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion1', new Date());
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion2', user.organization?.name);
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
            catch {
                console.log('not all default value, EU questions were specialized')
            }
        }
        //fill defaults in surveyJS if there is already a response 
        const filledDetails = fillSurveyResponses(dmaDetails.value);
    }
});


//calculation of eu or bim4vid answers
let newEuResults = ref<EuResult>();
let doughnutChartDataValues = ref<Array<doughnutChartData>>([]);
let radarChartDataValues = ref<radarChartData>();
let trafficLightKPI = ref<Array<string>>([]);
const ResultCalculation = () => {
    EUcalculation(dmaDetails, doughnutChartDataValues, radarChartDataValues, newEuResults);
    BIM4VIDcalculation(dmaDetails, trafficLightKPI);
}

const patchOrganization = () => {
    if (dmaDetails.value && dmaDetails.value.euDMA !== '0' && dmaDetails.value.euDMA !== 'false' && newEuResults.value) {
        console.log(({ "organization": { "euDmaStatus": dmaDetails.value.euDMA, "euDmaResults": newEuResults.value, "lastDma": { "id": dmaDetails.value._id, "title": dmaDetails.value.title, "createdBy": dmaDetails.value.createdBy, "createdAt": dmaDetails.value.createdAt } } }))
        api.patch('/OrganizationDmaStatusById/' + UserId, ({ "organization": { "euDmaStatus": dmaDetails.value.euDMA, "euDmaResults": newEuResults.value, "lastDma": { "id": dmaDetails.value._id, "title": dmaDetails.value.title, "createdBy": dmaDetails.value.createdBy, "createdAt": dmaDetails.value.createdAt } } }));
    }
}

</script>

<style scoped>
/* Input container customization*/
.input-container {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 900px;
}

.box {
    text-align: center
}

.button-container button,
.button-container select {
    margin: 0 30px;
}
</style>
