<template>
    <div v-if="dma">
        <h3>{{ dma.title }} -  {{ $t(filename+'.organization') }} {{ dma.createdFor }}</h3>
            <br>
    
            <h4>{{ $t(filename+'.dmaData') }}</h4>
            {{ $t(filename+'.creator') }} {{ dma.createdBy }} ||
            {{ $t(filename+'.createdAt') }} {{ dma.createdAt }} ||
            {{ $t(filename+'.editor') }} {{ dma.updatedBy }} ||
            {{ $t(filename+'.editedAt') }} {{ dma.updatedAt }} 

            <br><br>
            <div class="button-group">
                <button class="btn btn-outline-secondary" @click="showSurveyCreator = !showSurveyCreator; showSurvey = false; fetchData()">
                {{ $t(filename+'.button.editDma') }}
                </button>
                <button class="btn btn-outline-secondary" @click="showSurvey = !showSurvey; showSurveyCreator = false; fetchData()">
                {{ $t(filename+'.button.viewDma') }}
                </button>
                <button class="btn btn-outline-secondary">
                {{ $t(filename+'.button.sendDma') }}
                </button>
            </div>

            <br>

            <div v-if="showSurvey">
                <SurveyComp :survey = "dma"/>
            </div>
            <div v-if="showSurveyCreator">
                <SurveyCreatorComp @triggerRefresh="fetchData" :survey = "dma" :type = "'Dma'"/>
            </div>
            
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { DMA } from "../../interfaces/DMA.js"
import SurveyComp from "../../components/SurveyComp.vue";
import SurveyCreatorComp from "../../components/SurveyCreatorComp.vue";

//language prefix
const filename = 'UserDmaDetails'

//Import Data for Single Dma by ID
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});
const dma = ref<DMA>();
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/DmaById/' + props.id);
        const data: DMA = await response.json();
        dma.value = data;
        console.log("Refresh")
    } catch (err: any) {
        console.error(err.message);
    }
};
fetchData();

//Enable Survey and Survey Creator Comp
let showSurvey = ref(false);
let showSurveyCreator = ref(false);


</script>

<style scoped></style>