import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

const app = createApp(App)

app.use(router)
   .use(surveyPlugin)
   .use(surveyCreatorPlugin)

app.mount('#app')
