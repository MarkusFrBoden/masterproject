<template>
    <div>
        <h3>{{ $t('survey.h1') }}</h3>
    </div>

    <div class="btn-group">
        <button class="btn btn-outline-secondary"
            @click="ViewSurveyOverview = true; ViewSurvey = false; ViewSurveyCreator = false">{{ $t('survey.button1')
            }}</button>
        <button class="btn btn-outline-secondary"
            @click="ViewSurveyOverview = false; ViewSurvey = false; ViewSurveyCreator = true">{{ $t('survey.button2')
            }}</button>
        <button class="btn btn-outline-secondary"
            @click="ViewSurveyOverview = false; ViewSurvey = true; ViewSurveyCreator = false">{{ $t('survey.button3')
            }}</button>
    </div>


    <br><br><br>
    <div v-if="ViewSurveyOverview === true">
        <SurveyOverviewComp/>
    </div>
    <div v-else-if="ViewSurveyCreator === true">
        <SurveyCreatorComp/>
    </div>
    <div v-else-if="ViewSurvey === true">
        <SurveyComp/>
    </div>

</template>
  
<script setup lang="ts">
import SurveyOverviewComp from '@/components/SurveyOverviewComp.vue';
import SurveyCreatorComp from '@/components/SurveyCreatorComp.vue';
import SurveyComp from '@/components/SurveyComp.vue';
import { ref } from 'vue';

const ViewSurveyOverview = ref(true);
const ViewSurvey = ref(false);
const ViewSurveyCreator = ref(false);
</script>
  
<style scoped></style>
  