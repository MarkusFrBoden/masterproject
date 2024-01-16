<!-- components/SurveyCreator.vue -->
<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import "survey-creator-core/survey-creator-core.min.css";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-creator-core/i18n/german";
import  { EUSurveyJSON, type Survey } from "../components/EUSurvey_json";
import type { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorModel } from "survey-creator-core";
import { editorLocalization } from "survey-creator-core";
import { surveyLocalization } from 'survey-core';

const creatorOptions: ICreatorOptions = {
  showLogicTab: true,
  isAutoSave: true,
  showTranslationTab: true
};

 //Limited the number of showing locales in survey.locale property editor
surveyLocalization.supportedLocales = ["de", "en"];
 
editorLocalization.currentLocale = "de";


const creator = new SurveyCreatorModel(creatorOptions);
const surveyJson: Survey = EUSurveyJSON;

creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(surveyJson);
creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
  window.localStorage.setItem("survey-json", creator.text);
  callback(saveNo, true);
  // saveSurveyJson(
  //     "https://your-web-service.com/",
  //     creator.JSON,
  //     saveNo,
  //     callback
  // );
};

// creator.onUploadFile.add((_, options) => {
//   const formData = new FormData();
//   options.files.forEach((file: File) => {
//     formData.append(file.name, file);
//   });
//   fetch("https://example.com/uploadFiles", {
//     method: "post",
//     body: formData
//   }).then(response => response.json())
//     .then(result => {
//       options.callback(
//         "success",
//         // A link to the uploaded file
//         "https://example.com/files?name=" + result[options.files[0].name]
//       );
//     })
//     .catch(error => {
//       options.callback('error');
//     });
// });

// function saveSurveyJson(url: string, json: object, saveNo: number, callback: Function) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }
</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
