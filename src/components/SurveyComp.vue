<script setup lang="ts">
import { Model } from 'survey-core';
import { watch, inject, onMounted, ref, type Ref } from 'vue';
import { BorderlessDark } from "survey-core/themes";
import { BorderlessLight } from "survey-core/themes";
import { useI18n } from 'vue-i18n';
//import { settings } from "survey-core";


//Accept Props - Request survey
let props = defineProps({
  survey: {
    type: Object,
    required: true
  }
})

//Define Emits - Send back results
const emit = defineEmits<{
  surveyCompleted: [value: any]
}>()
const sendResults = () => {
  const results = survey.data;
  emit('surveyCompleted', results);
};

//Create Survey Model
const survey = new Model(props.survey.SurveyJson);
const { locale } = useI18n();

//Define themes and language and watcher for changes
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);
const headerchange = () => {
  survey.locale = locale.value;
  if (!darkmode.value) {
    survey.applyTheme(BorderlessLight);
  } else {
    survey.applyTheme(BorderlessDark);
  }
}

//Use SuveyJS Global Settings for MaxWidth
//settings.maxWidth = "1200px";

//Use and watch themes and language
onMounted(() => {
  headerchange()
});
watch(
  [darkmode, locale],
  () => {
    headerchange()
  }
);

//Use Emit - Reply results
survey.onComplete.add(sendResults);

</script>

<template>
  <SurveyComponent :model="survey" />
</template>

<style scoped>
</style>