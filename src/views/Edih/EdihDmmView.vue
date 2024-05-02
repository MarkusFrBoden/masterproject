<template>
  <div>
    <h3>{{ $t(filename + '.h3') }}</h3>
  </div>
  <br>

  <!-- buttons for create and delete dmm  -->
  <div>
    <button class="btn btn-outline-secondary" v-if="!showDeleteOptions" @click="showInput = !showInput">
      {{ $t(filename + '.button.createDmm') }}
    </button>
    <button class="btn btn-outline-secondary" v-if="selectedItems.length === 0"
      @click="showDeleteOptions = !showDeleteOptions">
      <div v-if="!showDeleteOptions">{{ $t(filename + '.button.deleteDmm') }}</div>
      <div v-else> {{ $t(filename + '.button.exitDelete') }}</div>
    </button>
    <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0" @click="showDeleteQuestion = true">
      <div class="delete-selected">
        {{ $t(filename + '.button.deleteSelected') }}
      </div>
    </button>
    <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0"
      @click="selectedItems = []; showDeleteOptions = !showDeleteOptions">
      {{ $t(filename + '.button.exitDelete') }}
    </button>
  </div>
  <br>

  <!-- create dmm interface  -->
  <div v-if="showInput" class="overlay">
    <div class="input-container">
      <SurveyComp @surveyCompleted="handleDmmCompleted" :survey="createDmmInterface || {}" surveyMode="edit" />
      <br><br>
      <div class="button-group">
        <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">{{ $t(filename +
          '.createInput.cancel')
          }}</button>
      </div>
    </div>
  </div>

  <!-- delete dmm interface  -->
  <div v-if="showDeleteQuestion" class="overlay">
    <div class="input-container">
      <h4>{{ $t(filename + '.deleteInput.title') }}</h4>
      <li v-for="item in selectedItems" :key="item._id?.toString()">
        {{ $t(filename + '.deleteInput.name') }} {{ item.title }}, {{ $t(filename + '.deleteInput.organization') }} {{
          item.createdFor }}
      </li>
      <br>
      <div class="button-group">
        <button class="btn btn-outline-secondary" @click="showDeleteQuestion = false;">{{
          $t(filename + '.deleteInput.cancel') }}</button>
        <button class="btn btn-outline-secondary" @click="deleteSelectedItems">{{ $t(filename + '.deleteInput.delete')
          }}</button>
      </div>
    </div>
  </div>

  <!-- dmm list, filtered and sorted  -->
  <div v-if="!loading">
    <DmmList :showDeleteOptions="showDeleteOptions" :dmms="dmms" @updateselectedItems="updateselectedItems"
      type="Edih" />
  </div>
  <div v-else>
    <br>
    Loading...
  </div>

</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { DMM } from "../../interfaces/DMM.js"
import { CreateDmmQuestions } from '../../components/staticQuestions/CreateDmmQuestions_json.js'
import SurveyComp from "../../components/SurveyComp.vue";
import type { deleteItems } from '@/interfaces/deleteItems.js';
import DmmList from '@/components/DmmList.vue';

//filename for language tags
const filename = 'DmmView'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showInput = ref(false);
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);

//get start data
let currentUserName = localStorage.getItem('userName') || '';
const dmms = ref<DMM[]>([]);
let loading = ref(false);
const fetchData = async () => {
  loading.value = true
  try {
    const response = await api.get('/DmmOverview');
    dmms.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  loading.value = false
};
fetchData();

//questions for surveyJs create dmm interface
let createDmmInterface = ref({
  SurveyJson: {}
})
createDmmInterface.value.SurveyJson = { ...CreateDmmQuestions };

//enable new dmm
let postDmm = ref<DMM>({
  title: "",
  akronym: "",
  published: false,
  targetGroup: "",
  applicationArea: "",
  demand: "",
  primarySources: "",
  differentiation: "",
  evaluation: "",
  languages: "",
  publicationDate: new Date(),
  authors: [{ name: "", organization: "", email: "" }],
  foundations: "",
  descriptions: "",
  descriptionsImageLink: "",
  calculations: "",
  calculationsImageLink: "",
  createdBy: currentUserName,
  createdAt: new Date().toLocaleString(),
  updatedBy: "",
  updatedAt: "",
  SurveyJson: {},
  calculationLogic: {}
});

//mapping for surveyJs create dmm interface answers to new postDmm
let mapping = (object: any) => {
  const mappings: any = {
    "question1": (value: any) => { postDmm.value.title = value; },
    "question2": (value: any) => { postDmm.value.akronym = value; },
    "question3": (value: any) => { postDmm.value.targetGroup = value; },
    "question4": (value: any) => { postDmm.value.applicationArea = value; },
    "question5": (value: any) => { postDmm.value.demand = value; },
    "question6": (value: any) => { postDmm.value.primarySources = value; },
    "question7": (value: any) => { postDmm.value.differentiation = value; },
    "question8": (value: any) => { postDmm.value.evaluation = value; },
    "question9": (value: any) => { postDmm.value.languages = value; },
    "question10": (value: any) => { postDmm.value.publicationDate = value; },
    "question11_1": (value: any) => {
      postDmm.value.authors.push({ name: value, organization: "", email: "" });
    },
    "question11_2": (value: any) => {
      const lastAuthor = postDmm.value.authors[postDmm.value.authors.length - 1];
      if (lastAuthor) {
        lastAuthor.organization = value;
      }
    },
    "question11_3": (value: any) => {
      const lastAuthor = postDmm.value.authors[postDmm.value.authors.length - 1];
      if (lastAuthor) {
        lastAuthor.email = value;
      }
    },
    "question12": (value: any) => { postDmm.value.foundations = value; },
    "question13": (value: any) => { postDmm.value.descriptions = value; },
    "question14": (value: any) => { postDmm.value.descriptionsImageLink = value; },
    "question15": (value: any) => { postDmm.value.calculations = value; },
    "question16": (value: any) => { postDmm.value.calculationsImageLink = value; },
  };

  applyMappings(object, mappings);

  return postDmm;
};

function applyMappings(obj: any, mappings: any) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        applyMappings(obj[key], mappings);
      } else if (mappings[key]) {
        mappings[key](obj[key]);
      }
    }
  }
}

//enable picture upload and delete everything exept the link
const transformObject = async (obj: any) => {
  let transformedObj = { ...obj };
  for (const key in transformedObj) {
    if (Array.isArray(transformedObj[key]) && transformedObj[key].length === 1 && typeof transformedObj[key][0] === 'object') {
      transformedObj[key] = transformedObj[key][0].content;
    } else if (typeof transformedObj[key] === 'object') {
      transformedObj[key] = await transformObject(transformedObj[key]);
    }
  }
  return transformedObj;
};

//post new dmm
const handleDmmCompleted = async (results: any) => {
  let newResults = await transformObject(results);
  mapping(newResults);
  if (postDmm.value.authors[0].name === "" && postDmm.value.authors[0].organization === "" && postDmm.value.authors[0].email === "") {
    postDmm.value.authors.shift();
  }
  try {
    const response = await api.post('/Dmm', postDmm.value);
    console.log(response.data);
    showInput.value = false;
    await fetchData();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//delete dmms
let selectedItems = ref<deleteItems[]>([])

//accept emit from child to fill selectedItems
const updateselectedItems = (newValue: deleteItems[]) => {
  selectedItems.value = newValue;
}

const deleteSelectedItems = async () => {
  try {
    const IDs = selectedItems.value.map(item => item._id);
    const response = await api.post('/deleteMultipleDmms', { dmmIds: IDs });
    if (response.data.invalidIds) {
      showDeleteQuestion.value = false;
      showDeleteOptions.value = false;
      selectedItems.value = [];
      alert('Please do not delete this DMMs :D');
    }else {
    console.log('Successfully deleted dmms:', response.data);
    await fetchData();
    showDeleteQuestion.value = false;
    showDeleteOptions.value = false;
    selectedItems.value = [];
  }
  } catch (error) {
    console.error('Error deleting dmms:', error);
  }
};

</script>

<style scoped>
/* Input container customization*/
.input-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 800px;
}
</style>