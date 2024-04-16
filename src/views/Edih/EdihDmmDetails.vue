<template>
    <div v-if="dmm">
        <h2>{{ dmm.title }} </h2>
            <br>
    
            <h4>{{ $t(filename+'.dmmData') }}</h4>
            {{ $t(filename+'.creator') }} {{ dmm.createdBy }} ||
            {{ $t(filename+'.createdAt') }} {{ dmm.createdAt }} ||
            {{ $t(filename+'.editor') }} {{ dmm.updatedBy }} ||
            {{ $t(filename+'.editedAt') }} {{ dmm.updatedAt }} 

            <br><br>
            <div class="button-group">
                <button class="btn btn-outline-secondary" @click="showSurveyCreator = !showSurveyCreator; showLogic= false; showSurvey = false; fetchData()">
                {{ $t(filename+'.button.editDmm') }}
                </button>
                <button class="btn btn-outline-secondary" @click="showSurvey = !showSurvey;showLogic= false; showSurveyCreator = false; fetchData()">
                {{ $t(filename+'.button.viewDmm') }}
                </button>
                <button class="btn btn-outline-secondary" @click="showLogic = !showLogic;showSurvey= false; showSurveyCreator = false;">
                {{ $t(filename+'.button.editDmmLogic') }}
                </button>
            </div>

            <br>

            <div v-if="showSurvey">
                <SurveyComp :survey= "dmm"/>
            </div>
            <div v-if="showSurveyCreator">
                <SurveyCreatorComp @triggerRefresh="fetchData" :survey = "dmm" :type = "'Dmm'"/>
            </div>
            <div v-if="showLogic">
                Auswertungslogik
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
const filename = 'EdihDmmDetails'

//Import Data for Single Dmm by ID
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});
const dmm = ref<DMA>();
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/DmmById/' + props.id);
        const data: DMA = await response.json();
        dmm.value = data;
    } catch (err: any) {
        console.error(err.message);
    }
};
fetchData();

//Enable Survey and Survey Creator Comp
let showSurvey = ref(false);
let showSurveyCreator = ref(false);
let showLogic = ref(false);


</script>

<style scoped></style>