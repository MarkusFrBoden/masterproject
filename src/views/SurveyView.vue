<template>
    <div>
        <h3>{{ $t('survey.h1') }}</h3>
    </div>

    <br>

    <div>
        <button class="btn btn-outline-secondary" @click="showInput = !showInput">
            {{ $t('survey.buttonCreateSurvey') }}
        </button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length === 0" @click="showDeleteOptions = !showDeleteOptions">
            <div v-if="!showDeleteOptions">{{ $t('survey.buttonDeleteSurvey') }}</div>
            <div v-else> löschen beenden</div>
        </button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0" @click="deleteSelectedItems">
            Delete Selected
        </button>
    </div>

    <div v-if="showInput" class="overlay">
        <div class="input-container">
            <h3>Neue Umfrage erstellen</h3>
            Bezeichnung: <input type="text" v-model="newSurveyTitle">
            <br>
            Organisation: <input type="text" v-model="newSurveyOrganisation">
            <br>
            <div class="button-group">
                <button @click="showInput = false;">Abbrechen</button>
                <button @click="createSurvey">Erstellen</button>
            </div>
        </div>
    </div>

    <div class="survey-list">
        <div class="row">
            <div v-if="showDeleteOptions" class="col">
                Delete?
            </div>
            <div class="col"><b>{{ $t('survey.column1') }}</b></div>
            <div class="col"><b>{{ $t('survey.column2') }}</b></div>
            <div class="col"><b>{{ $t('survey.column3') }}</b></div>
            <div class="col"><b>{{ $t('survey.column4') }}</b></div>
            <div class="col"><b>{{ $t('survey.column5') }}</b></div>
            <div class="col"><b>{{ $t('survey.column6') }}</b></div>
        </div>

        <li v-for="survey in surveys" :key="survey._id.toString()">
            <div class="row">
                <div v-if="showDeleteOptions" class="col">
                    <input type="checkbox" v-model="selectedItems" :value="survey._id" />
                </div>
                <div class="col">
                    <RouterLink :to="{ name: 'SurveyDetails', params: { id: survey._id.toString() } }">
                        <a href="">{{ survey.title }}</a>
                    </RouterLink>
                </div>
                <div class="col">{{ survey.createdFor }}</div>
                <div class="col">{{ survey.createdBy }}</div>
                <div class="col">{{ survey.createdAt }}</div>
                <div class="col">{{ survey.updatedBy }}</div>
                <div class="col">{{ survey.updatedAt }}</div>
            </div>
        </li>
    </div>
</template>
  
<script setup lang="ts">
import { ref, inject } from 'vue';
import type { Survey } from "../interfaces/Survey.js"

//Get first data
const api = inject('api') as any;
const surveys = ref<Survey[]>([]);
const fetchData = async () => {
    try {
        const response = await api.get('/surveys');
        surveys.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchData();

//Create new Survey
let showInput = ref(false);
let newSurveyTitle = "";
let newSurveyOrganisation = "";
const createSurvey = () => {
    showInput.value = false;
};


//Delete Survey
let selectedItems = ref([]);
let showDeleteOptions = ref(false);
const deleteSelectedItems = () => {
    console.log('Deleting selected items:', selectedItems);
};

</script>
  
<style scoped>
.survey-list {
    max-width: 960px;
    margin: 40px auto;
}

.survey-list ul {
    padding: 0
}

.survey-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
}

.dark .survey-list li {
    background: #020b3d;
}

.input-container {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 12px;
}

.input-container input {
    margin-bottom: 8px;
    /* Hier kannst du den Abstand zwischen den Inputs anpassen */
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
}
</style>