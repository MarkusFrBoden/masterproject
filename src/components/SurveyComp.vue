<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import "survey-core/i18n/german";
import  { EUSurveyJSON, type Survey } from "../components/EUSurvey_json";
import { watch, inject } from 'vue'; 
import { ContrastDark } from "survey-core/themes";
import { ContrastLight } from "survey-core/themes";


const surveyJson: Survey = EUSurveyJSON;

const alertResults = (sender: any) => {
  const results = JSON.stringify(sender.data);
  alert(results);
}

const survey = new Model(surveyJson);

survey.locale = "de";

const darkmode = inject('darkmode');

// Watcher for isDark
watch(
darkmode,(newValue, oldValue) => {
    if (!newValue) {
      survey.applyTheme(ContrastLight);
    } else {
      survey.applyTheme(ContrastDark);
    }
  }
);

survey.onComplete.add(alertResults);
</script>

<template>
  <SurveyComponent :model="survey" />
</template>
