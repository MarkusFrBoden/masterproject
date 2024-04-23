<template>
    <div v-if="dmaDetails">
        <h3>{{ dmaDetails.title }} - {{ $t(filename + '.organization') }} {{ dmaDetails.createdFor }}</h3>
        <br>

        <h4>{{ $t(filename + '.dmaData') }}</h4>
        {{ $t(filename + '.creator') }} {{ dmaDetails.createdBy }} ||
        {{ $t(filename + '.createdAt') }} {{ dmaDetails.createdAt }} ||
        {{ $t(filename + '.editor') }} {{ dmaDetails.updatedBy }} ||
        {{ $t(filename + '.editedAt') }} {{ dmaDetails.updatedAt }}

        <!-- buttons for edit, view and send dma  -->
        <br><br>
        <div class="button-group">
            <button class="btn btn-outline-secondary"
                @click="showSurveyCreator = !showSurveyCreator; showSurvey = false; fetchData()">
                {{ $t(filename + '.button.editDma') }}
            </button>
            <button class="btn btn-outline-secondary"
                @click="showSurvey = !showSurvey; showSurveyCreator = false; fetchData()">
                {{ $t(filename + '.button.viewDma') }}
            </button>
            <button class="btn btn-outline-secondary">
                {{ $t(filename + '.button.DmaAnswers') }}
            </button>
        </div>
        <br>

        <!-- survey js components for edit and view dma  -->
        <div v-if="showSurvey">
            <SurveyComp @surveyCompleted="handleDmaCompleted" :survey="dmaDetails" />
        </div>
        <div v-if="showSurveyCreator">
            <SurveyCreatorComp @triggerRefresh="fetchData" :survey="dmaDetails" :type="'DMA'" />
        </div>

    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import type { DMA } from "../../interfaces/DMA.js"
import SurveyComp from "../../components/SurveyComp.vue";
import SurveyCreatorComp from "../../components/SurveyCreatorComp.vue";

//filename for language tags
const filename = 'EdihDmaDetails'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showSurvey = ref(false);
let showSurveyCreator = ref(false);

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
};
fetchData();

//patch with new dma answers
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
            console.log('dmm patch success:', response.data);
            fetchData()
        } else { console.error('dmm null or undefined'); }
    } catch (err) {
        console.error('Error patchching data:', err);
    }
};

</script>

<style scoped></style>