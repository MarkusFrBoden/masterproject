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

        <div>
            <!-- check dma includes responses  -->
            <div v-if="dmaDetails.responses.length > 0">
                {{ $t(filename + '.answeringUser') }} {{ dmaDetails.responses[0].responseClient }} || {{ $t(filename +
                    '.answeredAt') }} {{ dmaDetails.responses[0].responseDate }}
                <br><br>
                <!-- EU Response  -->
                <div v-if="dmaDetails.euDMA !== 'false'">
                    <h5>{{ $t(filename + '.euAnswers') }}</h5>
                    <!-- button for downloading csv data and view dma answers -->
                    <button class="btn btn-outline-secondary" @click="downloadCSV">
                        {{ $t(filename + '.button.downloadCSV') }}
                    </button>
                    <button class="btn btn-outline-secondary"
                        @click="showResultDetails = !showResultDetails;">
                        {{ $t(filename + '.button.DmaAnswers') }}
                    </button>
                    <br><br>
                    <!-- render EU results -->
                    <div v-if="newEuResults && radarChartDataValues && doughnutChartDataValues">
                        <EuResultsComp :newEuResults="newEuResults" :radarChartDataValues="radarChartDataValues"
                            :doughnutChartDataValues="doughnutChartDataValues" />
                    </div>
                </div>
                <!-- BIM4VID Response  -->
              <div
              v-if="(dmaDetails.SurveyJson.pages[0] && checkForKey(dmaDetails.SurveyJson.pages[0], 'BIM4VIDQuestion1')) || (dmaDetails.SurveyJson.pages[8] && checkForKey(dmaDetails.SurveyJson.pages[8], 'BIM4VIDQuestion1'))">
                    <div v-if="trafficLightKPI">
                        <BIM4VIDResultsComp :trafficLightKPI="trafficLightKPI" />
                    </div>
                </div>
            </div>
            <div v-else>
                <!-- enable creator if no responses  -->
                <button class="btn btn-outline-secondary"
                    @click="showSurveyCreator = !showSurveyCreator; showSurvey = false; fetchData()">
                    {{ $t(filename + '.button.editDma') }}
                </button>
                <button class="btn btn-outline-secondary"
                    @click="showSurvey = !showSurvey; showSurveyCreator = false; fetchData()">
                    {{ $t(filename + '.button.viewDma') }}
                </button>
            </div>
        </div>
        <br>

        <!-- survey js components for edit and view dma  -->
        <div v-if="showSurvey" class="overlay">
            <div class="input-container">
                <SurveyComp @surveyCompleted="handleDmaCompleted" :survey="dmaDetails" surveyMode="edit" />
            </div>
            <div class="button-container">
                <button class="btn btn-outline-secondary custom-button2" @click="showSurvey = false">{{
                    $t(filename + '.button.closeEuAnswers') }}</button>
                <select class="btn btn-outline-secondary custom-button2" v-model="$i18n.locale">
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                </select>
            </div>
        </div>
        <div v-if="showSurveyCreator">
            <SurveyCreatorComp @triggerRefresh="fetchData" :survey="dmaDetails" :type="'DMA'" />
        </div>

        <!-- survey js component for view responses -->
        <div v-if="showResultDetails" class="overlay">
            <div class="input-container">
                <SurveyComp :survey="dmaDetails" surveyMode="Display" />
            </div>
            <div class="button-container">
                <button class="btn btn-outline-secondary custom-button2" @click="showResultDetails = false">{{
                    $t(filename + '.button.closeEuAnswers') }}</button>
            </div>
            <select class="btn btn-outline-secondary custom-button2" v-model="$i18n.locale">
                <option value="en">EN</option>
                <option value="de">DE</option>
            </select>
        </div>

    </div>
    <div v-else>
        Loading...
    </div>

</template>

<script setup lang="ts">
//vue
import { inject, ref, watch } from "vue";
//ts interfaces
import type { DMA } from "../../interfaces/DMA.js"
import type { radarChartData } from "../../interfaces/radarChartData.js"
import type { doughnutChartData } from "../../interfaces/doughnutChartData.js"
import type { EuResult } from "../../interfaces/EuResults.js"
//functions
import { EUcalculation } from "../../components/functions/EuResultsCalulation.js";
import { BIM4VIDcalculation } from "../../components/functions/BIM4VIDResultsCalulation.js";
import { fillSurveyResponses } from "../../components/functions/surveyResponses.js";
import { createCSVdownload } from "../../components/functions/createCSVdownload.js";
//vue components
import SurveyComp from "../../components/SurveyComp.vue";
import SurveyCreatorComp from "../../components/SurveyCreatorComp.vue";
import EuResultsComp from "../../components/EuResultsComp.vue";
import BIM4VIDResultsComp from "../../components/BIM4VIDResultsComp.vue";

//filename for language tags
const filename = 'DmaDetails'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showSurvey = ref(false);
let showSurveyCreator = ref(false);
let showResultDetails = ref(false);

//accept props from EdihDmaView with dma id
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

//get start data
let currentUserName = localStorage.getItem('userName') || '';
const dmaDetails = ref<DMA>();
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

// rekursive function to check for key
function checkForKey(element: any, name: string): boolean {
    if ( element.name === name) {
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

//patch with new dma answers
const handleDmaCompleted = async (results: any) => {
    let data = [];
    if (dmaDetails.value?.responses) {
        for (const response of dmaDetails.value.responses) {
            data.push(response);
        }
    }
    let newResponse = {
        "responseDate": new Date().toLocaleString(),
        "responseClient": currentUserName,
        "data": results
    };
    alert(newResponse);
    /* //block EDIH from submitting DMA's
    data.push(newResponse);
    let patchResponses = {
        responses: data
    };
    try {
        if (dmaDetails.value) {
            const response = await api.patch('/DmaById/' + dmaDetails.value._id, patchResponses);
            console.log('dmm patch success:', response.data);
            fetchData()
        } else { console.error('dmm null or undefined'); }
    } catch (err) {
        console.error('Error patchching data:', err);
    } */
};

//calculation of eu or bim4vid answers
let newEuResults = ref<EuResult>();
let doughnutChartDataValues = ref<Array<doughnutChartData>>([]);
let radarChartDataValues = ref<radarChartData>();
let trafficLightKPI = ref<Array<string>>([]);
const ResultCalculation = () => {
    EUcalculation(dmaDetails, doughnutChartDataValues, radarChartDataValues, newEuResults);
    BIM4VIDcalculation(dmaDetails, trafficLightKPI);
}

//enable csv download
const downloadCSV = () => {
    createCSVdownload(dmaDetails)
};

//fill defaults in surveyJS if there is already a response 
watch(dmaDetails, (newValue, oldValue) => {
    if (newValue && newValue.responses.length > 0) {
        const filledDetails = fillSurveyResponses(newValue);
    }
});

</script>

<style scoped>
.input-container {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 900px;
}

.button-container button,
.button-container select {
    margin: 0 30px;
}
</style>