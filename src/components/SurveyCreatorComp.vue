<!-- components/SurveyCreator.vue -->
<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/survey.i18n.js";
import { SurveyCreatorModel } from "survey-creator-core";
import { editorLocalization } from "survey-creator-core";
import { surveyLocalization } from 'survey-core';
import { useI18n } from 'vue-i18n';
import { inject } from 'vue';


//Accept Props
let props = defineProps({
    survey: {
      type: Object,
      required: true
    }
  })

//Accept Emits
const emit = defineEmits(['triggerRefresh'])

const options = {
  showLogicTab: true,
  isAutoSave: true,
  showTranslationTab: true,
  showThemeTab: true
};

//Add language option
const { locale } = useI18n();
editorLocalization.currentLocale = locale.value;

 //Limited the number of showing locales in survey.locale property editor
 surveyLocalization.supportedLocales = ["en","de"];
 
const creator = new SurveyCreatorModel(options);
creator.JSON = props.survey.SurveyJson;

const api = inject('api') as any;

creator.saveSurveyFunc = async (saveNo: number, callback: Function) => {
  try {
    const response = await updateSurvey();
    if (response.status === 200) {
      callback(saveNo, true);
    } else {
      callback(saveNo, false);
    }
  } catch (error) {
    console.error('Error saving survey:', error);
    callback(saveNo, false);
  }
};

const updateSurvey = async () => {
  try {
    const updatedData = {
      "SurveyJson": creator.JSON,
      "updatedBy":"TestUser",
      "updatedAt":new Date()
    };
    const response = await api.patch(`/surveys/${props.survey._id}`, updatedData);
    emit('triggerRefresh');
    return response;
  } catch (error) {
    console.error('Error updating survey:', error);
    throw error;
  }
};


</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
