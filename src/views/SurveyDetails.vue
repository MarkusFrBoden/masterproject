<template>
    <div v-if="survey">
        <h3>{{ survey.title }} - Company: {{ survey.createdFor }}</h3>
            <br>
    
            <h5>Survey Data</h5>
            Created By: {{ survey.createdBy }} ||
            Created At: {{ survey.createdAt }} ||
            Updated By: {{ survey.updatedBy }} ||
            Updated At: {{ survey.updatedAt }} 

            <br><br>
            <div class="button-group">
                <button class="btn btn-outline-secondary" @click="showSurveyCreator = true; showSurvey = false; fetchData()">
                Edit Survey
                </button>
                <button class="btn btn-outline-secondary" @click="showSurvey = true; showSurveyCreator = false; fetchData()">
                Survey Demo
                </button>
                <button class="btn btn-outline-secondary">
                Send Survey
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
import type { Survey } from "../interfaces/Survey.js"
import SurveyComp from "../components/SurveyComp.vue";
import SurveyCreatorComp from "../components/SurveyCreatorComp.vue";

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
let showSurvey = ref(true);
let showSurveyCreator = ref(false);


</script>

<style scoped></style>