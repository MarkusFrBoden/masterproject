<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import "survey-core/i18n/german";
import  { EUSurveyJSON, type Survey } from "../components/EUSurvey_json";

const surveyJson: Survey = EUSurveyJSON;

const alertResults = (sender: any) => {
  const results = JSON.stringify(sender.data);
  alert(results);
}

const survey = new Model(surveyJson);

survey.locale = "de";

//survey.applyTheme(DefaultDark);

survey.onComplete.add(alertResults);
</script>

<template>
  <SurveyComponent :model="survey" />
</template>
