<template>
  <SurveyCreatorComponent :model="creator" />
</template>

<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreatorModel } from "survey-creator-core";
import { Serializer } from "survey-core";
import { editorLocalization } from "survey-creator-core";
import { surveyLocalization } from 'survey-core';
import { useI18n } from 'vue-i18n';
import { watch, inject, onMounted, ref, type Ref } from 'vue';
import { BorderlessDark } from "survey-core/themes";
import { BorderlessLight } from "survey-core/themes";

//enable api via global variable
const api = inject('api') as any;

//accept survey props from calling components
let props = defineProps({
  survey: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

//define emit to update dmm or dma
const emit = defineEmits(['triggerRefresh'])

//get current user for updated by
let UserName = localStorage.getItem('userName');

//add language option
const { locale } = useI18n();
editorLocalization.currentLocale = locale.value;

//limit the number of showing locales in survey.locale property editor
surveyLocalization.supportedLocales = ["en", "de"];

//make name properties (keys) read-only
Serializer.findProperty("question","name").readOnly = true;
Serializer.findProperty("panel", "name").readOnly = true;
Serializer.findProperty("page", "name").readOnly = true;

//add suvey creator options
const options = {
  showLogicTab: true,
  isAutoSave: true,
  showTranslationTab: true
};

//create survey creator model
const creator = new SurveyCreatorModel(options);
creator.JSON = props.survey.SurveyJson;

//define themes and language and watcher for changes
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);
const headerchange = () => {
  creator.locale = locale.value;
  if (!darkmode.value) {
    creator.theme = BorderlessLight;
  } else {
    creator.theme = BorderlessDark;
  }
}
//use and watch themes and language
onMounted(() => {
  headerchange();
});
watch(
  [darkmode, locale],
  () => {
    headerchange();
  }
);

//use pre defined keys for new dmm pages, questions and panels
if(props.type === 'Dmm'){
var questionCounter = creator.survey.getAllQuestions().length+1;
var panelCounter = creator.survey.getAllPanels().length+1;
var pageCounter = creator.survey.pages.length+1;
creator.onQuestionAdded.add(function(sender, options){
        var q = options.question;
        q.name = props.survey.akronym + "Question" + questionCounter;
        questionCounter ++;
    });
creator.onPanelAdded.add(function(sender, options){
        var p = options.panel;
        p.name = props.survey.akronym + "Panel" + panelCounter;
        panelCounter ++;
    });
creator.onPageAdded.add(function(sender, options){
        var p = options.page;
        p.name = props.survey.akronym + "Page" + pageCounter;
        pageCounter ++;
    });
}

//update dma or dmm after changes
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
      "updatedBy": UserName,
      "updatedAt": new Date()
    };
    const response = await api.patch(`/${props.type}ById/${props.survey._id}`, updatedData);
    emit('triggerRefresh');
    return response;
  } catch (error) {
    console.error('Error updating survey:', error);
    throw error;
  }
};

//enable file upload
creator.onUploadFile.add(async (_, options) => {
  console.log('Files:', options.files);
  const formData = new FormData();
  options.files.forEach((file: File) => {
    formData.append('file', file);
  });
  try {
    const response = await api.post('/upload', formData);
    console.log('File uploaded successfully:', response.data.filePath);
    options.callback("success", '/masterproject/backend'+response.data.filePath);
  } catch (error) {
    console.error('Error saving Picture:', error);
  }
});

</script>


