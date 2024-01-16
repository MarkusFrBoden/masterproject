import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n, type LocaleMessages, type VueMessageType } from 'vue-i18n';

//import survey components
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";
import "survey-core/defaultV2.min.css";

// import the translation files
import en from './locales/en.json';
import de from './locales/de.json';

//create an i18n instance
const i18n = createI18n({
   locale: 'de',
   fallbackLocale: 'en',
   messages: {
     en,
     de,
   },
 } as const);

const app = createApp(App)

const darkmode = ref(false);
app.provide('darkmode', darkmode);

app.use(router)
   .use(surveyPlugin)
   .use(surveyCreatorPlugin)
   .use(i18n);


app.mount('#app')
