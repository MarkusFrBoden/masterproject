<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import "survey-core/survey.i18n";
import { watch, inject, onMounted, ref, type Ref } from 'vue'; 
import { BorderlessDark } from "survey-core/themes";
import { BorderlessLight } from "survey-core/themes";
import { useI18n } from 'vue-i18n';

//Accept Props
let props = defineProps({
  survey: {
      type: Object,
      required: true
    }
  })

const alertResults = (sender: any) => {
  const results = JSON.stringify(sender.data);
  alert(results);
}

const survey = new Model(props.survey.SurveyJson);

const { locale } = useI18n();

//Start darkmode and language and watcher for changes
const darkmode: Ref<boolean> = inject('darkmode')|| ref(false);
onMounted(() => {
  survey.locale = locale.value;
  if (!darkmode.value) {
      survey.applyTheme(BorderlessLight);
    } else {
      survey.applyTheme(BorderlessDark);
    }
});
watch(
  [darkmode, locale],
  () => {
    if (!darkmode.value) {
      survey.applyTheme(BorderlessLight);
    } else {
      survey.applyTheme(BorderlessDark);
    }
    survey.locale = locale.value;
  }
);

survey.onComplete.add(alertResults);
</script>

<template>
  <SurveyComponent :model="survey" />
</template>