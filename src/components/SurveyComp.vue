<template>
  <SurveyComponent :model="survey" />
</template>

<script setup lang="ts">
import { Model } from 'survey-core';
import { watch, inject, onMounted, ref, type Ref } from 'vue';
import { BorderlessDark } from "survey-core/themes";
import { BorderlessLight } from "survey-core/themes";
import { useI18n } from 'vue-i18n';

//enable api via global variable
const api = inject('api') as any;
const serverlink =  inject('serverlink') as any;

//accept survey props from calling components
let props = defineProps({
  survey: {
    type: Object,
    required: true
  },
  surveyMode: {
    type: String,
    required: true
  }
})

//define emit to send back survey results to calling components
const emit = defineEmits<{
  surveyCompleted: [value: any]
}>()
const sendResults = () => {
  const results = survey.data;
  emit('surveyCompleted', results);
};

//create survey model
const survey = new Model(props.survey.SurveyJson);
survey.mode = props.surveyMode;
const { locale } = useI18n();

//define themes and language and watcher for changes
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);
const headerchange = () => {
  survey.locale = locale.value;
  if (!darkmode.value) {
    survey.applyTheme(BorderlessLight);
  } else {
    survey.applyTheme(BorderlessDark);
  }
}

//use and watch themes and language
onMounted(() => {
  headerchange()
});
watch(
  [darkmode, locale],
  () => {
    headerchange()
  }
);

//use emit to reply results
survey.onComplete.add(sendResults);

//enable picture upload
survey.onUploadFiles.add(async (_, options) => {
  console.log('Triggert');
    console.log('Files:', options.files);
    const formData = new FormData();
    options.files.forEach((file) => {
      formData.append('file', file);
    });
    try {
      const response = await api.post('/upload', formData);
      console.log('File uploaded successfully:', response.data.filePath);
      options.callback(
        options.files.map((file) => ({
          file: file,
          content: serverlink + response.data.filePath
        }))
      );
    } catch (error) {
      console.error('Error saving Picture:', error);
      options.callback([], ['An error occurred during file upload.']);
    }
  });

</script>
