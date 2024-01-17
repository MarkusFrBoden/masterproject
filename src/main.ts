import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import { useDark } from "@vueuse/core";

//import survey components
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";
import "survey-core/defaultV2.min.css";

// import the translation files
import en from './locales/en.json';
import de from './locales/de.json';

//type MessageSchema = typeof de
const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    'en': en,
    'de': de
  }
})

const isDark = useDark();

const app = createApp(App)

app.provide('darkmode', isDark);

app.use(router)
   .use(surveyPlugin)
   .use(surveyCreatorPlugin)
   .use(i18n);


app.mount('#app')
