<template>
  <div>
    <h3>{{ $t('home.h1') }} {{ ExistingUser?.firstname }}</h3>
  </div>

  <div class="row">
    <div class="col">
      <h5>{{ ExistingUser?.organization.name }}</h5>
      <div v-if="ExistingUser?.organization.contactPerson.name">
        Kontakt {{ ExistingUser?.organization.name }}

        <!-- Informationen  -->

        <button class="btn btn-outline-secondary" @click="showEddit = !showEddit">Informationen bearbeiten</button>
      </div>
      <div v-else>
        <button class="btn btn-outline-secondary" @click="showInput = !showInput">Informationen hinzufügen</button>
      </div>

      {{ ExistingUser?.organization }}

    </div>
    <div class="col">
      <h5>Durchgeführte DMAs</h5>
    </div>
  </div>



  <div v-if="showInput" class="overlay">
    <div class="input-container">
      <SurveyComp @surveyCompleted="handleSurveyCompleted" :survey="survey || {}" />
      <br>
      <div class="button-group">
        <button class="btn btn-outline-secondary custom-button" @click="showInput = false;">Beenden</button>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue';
import type { User } from "../interfaces/User.js"
import SurveyComp from "../components/SurveyComp.vue";
import { EUSurveyJSONModul1 } from '../components/EUSurvey_Modul1_json.js'
import type { Survey } from "../interfaces/Survey.js"

const api = inject('api') as any;

let ExistingUser = ref<User>();
let UserId = localStorage.getItem('userId');

const getUser = async () => {
  try {
    const response = await api.get('/UserById/' + UserId);
    ExistingUser.value = response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
getUser()

let showInput = ref(false);
let showEddit = ref(false);

const survey = ref<Survey>();
survey.value = {
  "title": "",
  "createdFor": "",
  "createdBy": "",
  "createdAt": new Date(),
  "updatedBy": "",
  "updatedAt": new Date(),
  "responses": [],
  "SurveyJson": {}
};
survey.value.SurveyJson = EUSurveyJSONModul1;

watch([ExistingUser, survey], ([user, surveyJson]) => {
  if (user && surveyJson && survey.value) { 
    survey.value.SurveyJson.pages[0].elements[0].elements[0].defaultValue = user.organization?.name;
  }
});

const handleSurveyCompleted = (results: any) => {
  console.log(results)
};

</script>

<style scoped>
.data {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.dark .data {
  background: #020b3d;
}


.input-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 16px;
  border: 1px solid #919191;
  border-radius: 12px;
  width: 800px;
  height: 800px;
}

.dark .input-container {
  background: #16171d;
}

.input-container input {
  margin-bottom: 8px;
  border: 1px solid #919191;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  overflow-y: auto;
}

.custom-button {
  background-color: white !important; 
}
.custom-button:hover {
  color: black !important;
  background-color: rgba(255, 255, 255, 0.651) !important; 
}
</style>