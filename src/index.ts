import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import { useDark } from "@vueuse/core";
import axios from 'axios';

//import survey components
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";
import "survey-core/defaultV2.min.css";

// import the translation files
import en from './locales/en.json';
import de from './locales/de.json';

//create i18n language model
const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    'en': en,
    'de': de
  }
})

//use useDark from vueuse
const isDark = useDark();

//create App
const app = createApp(App)

//use backend server link for api-requests
const api = axios.create({
  baseURL: 'https://masterproject-backend-production.up.railway.app/api/',
  //baseURL: 'http://localhost:5000/api/',
});

app.provide('api', api);
app.provide('darkmode', isDark);
app.provide('serverlink', 'https://masterproject-backend-production.up.railway.app')

app.use(router)
   .use(surveyPlugin)
   .use(surveyCreatorPlugin)
   .use(i18n);

app.mount('#app')