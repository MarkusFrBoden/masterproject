<template>
    <div v-if="survey">
        <h3>{{ survey.title }} -  {{ $t(filename+'.organization') }} {{ survey.createdFor }}</h3>
            <br>
    
            <h4>{{ $t(filename+'.dmaData') }}</h4>
            {{ $t(filename+'.creator') }} {{ survey.createdBy }} ||
            {{ $t(filename+'.createdAt') }} {{ survey.createdAt }} ||
            {{ $t(filename+'.editor') }} {{ survey.updatedBy }} ||
            {{ $t(filename+'.editedAt') }} {{ survey.updatedAt }} 

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
                <SurveyComp :survey = "survey"/>
            </div>
            <div v-if="showSurveyCreator">
                <SurveyCreatorComp @triggerRefresh="fetchData" :survey = "survey"/>
            </div>
            
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Survey } from "../../interfaces/Survey.js"
import SurveyComp from "../../components/SurveyComp.vue";
import SurveyCreatorComp from "../../components/SurveyCreatorComp.vue";

//language prefix
const filename = 'UserDmaDetails'

//Import Data for Single Survey by ID
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});
const survey = ref<Survey>();
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/SurveyById/' + props.id);
        const data: Survey = await response.json();
        survey.value = data;
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