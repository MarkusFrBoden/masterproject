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

  <!-- input for filter  -->
  <input v-model="filterText" type="text" placeholder="Filter" class="custom-input" />

  <!-- create dmm interface  -->
  <div v-if="showInput" class="overlay">
    <div class="input-container">
      <SurveyComp @surveyCompleted="handleDmmCompleted" :survey="createDmmInterface || {}" surveyMode="edit"/>
      <br><br>
      <div class="button-group">
        <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">{{ $t(filename + '.createInput.cancel')
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
  <!-- header with sort logic part  -->
  <div class="list">
    <div class="row">
      <div v-if="showDeleteOptions" class="col">
        <button class="flex-container">
          <b>{{ $t(filename + '.list.column0') }}</b>
        </button>
      </div>
      <div class="col" id="akronym">
        <button class="flex-container" @click="handleSort('akronym')">
          <b>{{ $t(filename + '.list.column1') }}</b>
          <div v-if="OrderIcons.akronym || OrderIcons.akronymDown">
            <SortAlphaDown v-if="OrderIcons.akronym" />
            <SortAlphaDownAlt v-else />
          </div>
        </button>
      </div>
      <div class="col" id="createdBy">
        <button class="flex-container" @click="handleSort('createdBy')">
          <b>{{ $t(filename + '.list.column3') }}</b>
          <div v-if="OrderIcons.createdBy || OrderIcons.createdByDown">
            <SortAlphaDown v-if="OrderIcons.createdBy" />
            <SortAlphaDownAlt v-else />
          </div>
        </button>
      </div>
      <div class="col" id="createdAt">
        <button class="flex-container" @click="handleSort('createdAt')">
          <b>{{ $t(filename + '.list.column4') }}</b>
          <div v-if="OrderIcons.createdAt || OrderIcons.createdAtDown">
            <SortNumericDown v-if="OrderIcons.createdAt" />
            <SortNumericDownAlt v-else />
          </div>
        </button>
      </div>
      <div class="col" id="updatedBy">
        <button class="flex-container" @click="handleSort('updatedBy')">
          <b>{{ $t(filename + '.list.column5') }}</b>
          <div v-if="OrderIcons.updatedBy || OrderIcons.updatedByDown">
            <SortAlphaDown v-if="OrderIcons.updatedBy" />
            <SortAlphaDownAlt v-else />
          </div>
        </button>
      </div>
      <div class="col" id="updatedAt">
        <button class="flex-container" @click="handleSort('updatedAt')">
          <b>{{ $t(filename + '.list.column6') }}</b>
          <div v-if="OrderIcons.updatedAt || OrderIcons.updatedAtDown">
            <SortNumericDown v-if="OrderIcons.updatedAt" />
            <SortNumericDownAlt v-else />
          </div>
        </button>
      </div>

    </div>

    <!-- data with transition  -->
    <transition-group name="list">
      <li v-for="dmm in filteredDmms" :key="dmm._id?.toString()">
        <div class="row">
          <div v-if="showDeleteOptions" class="col">
            <input type="checkbox" v-model="selectedItems"
              :value="{ _id: dmm._id, title: dmm.title, createdFor: dmm.createdFor }" />
          </div>
          <div class="col">
            <RouterLink :to="{ name: 'EdihDmmDetails', params: { id: dmm._id?.toString() } }">
              <a href="">{{ dmm.akronym }}</a>
            </RouterLink>
          </div>
          <div class="col">{{ dmm.createdBy }}</div>
          <div class="col">{{ dmm.createdAt }}</div>
          <div class="col">{{ dmm.updatedBy }}</div>
          <div class="col">{{ dmm.updatedAt }}</div>
        </div>
      </li>
    </transition-group>
  </div>

</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue';
import type { DMM } from "../../interfaces/DMM.js"
import SortNumericDown from '../../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';
import { CreateDmmQuestions } from '../../components/CreateDmmQuestions_json.js'
import SurveyComp from "../../components/SurveyComp.vue";

//filename for language tags
const filename = 'EdihDmmView'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showInput = ref(false);
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);

//get start data
let currentUserName = localStorage.getItem('userName') || '';
const dmms = ref<DMM[]>([]);
const fetchData = async () => {
  try {
    const response = await api.get('/DmmOverview');
    dmms.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();

//questions for surveyJs create dmm interface
let createDmmInterface = ref({
  SurveyJson: {}
})
createDmmInterface.value.SurveyJson = CreateDmmQuestions;

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
  createdAt: new Date(),
  updatedBy: "",
  updatedAt: new Date(),
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
    OrderIcons.value["updatedAt"] = true;
    handleSort('updatedAt');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//delete dmms
interface deleteItems {
  _id: string;
  title: string;
  createdFor: string;
}
let selectedItems = ref<deleteItems[]>([])
const deleteSelectedItems = async () => {
  try {
    const IDs = selectedItems.value.map(item => item._id);
    console.log(IDs);
    const response = await api.post('/deleteMultipleDmms', { dmmIds: IDs });
    console.log('Successfully deleted dmms:', response.data);
    fetchData();
    showDeleteQuestion.value = false;
    showDeleteOptions.value = false;
    selectedItems.value = [];
  } catch (error) {
    console.error('Error deleting dmms:', error);
  }
};

// ---------------------------------------------------- sort & filter ---------------------------------------------------------------
//order
let isAscending = ref<boolean>(false);
const sortBy = ref('updatedAt');
type OrderIconsType = {
  [key: string]: boolean;
}
const orderedDmms = computed(() => {
  return [...dmms.value].sort((a, b) => {
    let aValue, bValue;
    switch (sortBy.value) {
      case 'akronym':
        aValue = a.akronym.toLowerCase();
        bValue = b.akronym.toLowerCase();
        break;
      case 'createdBy':
        aValue = a.createdBy.toLowerCase();
        bValue = b.createdBy.toLowerCase();
        break;
      case 'createdAt':
        aValue = a.createdAt;
        bValue = b.createdAt;
        break;
      case 'updatedBy':
        aValue = a.updatedBy.toLowerCase();
        bValue = b.updatedBy.toLowerCase();
        break;
      case 'updatedAt':
        aValue = a.updatedAt;
        bValue = b.updatedAt;
        break;
      default:
        aValue = '';
        bValue = '';
    }
    const result = aValue > bValue ? 1 : -1;
    return isAscending.value ? result : -result;
  });
});

const OrderIcons = ref<OrderIconsType>({
  "akronym": false,
  "akronymDown": false,
  "createdBy": false,
  "createdByDown": false,
  "createdAt": false,
  "createdAtDown": false,
  "updatedBy": false,
  "updatedByDown": false,
  "updatedAt": false,
  "updatedAtDown": true,
});

const handleSort = (columnId: string) => {
  Object.keys(OrderIcons.value).forEach((key) => {
    if (key !== columnId && key !== columnId + "Down") {
      OrderIcons.value[key] = false;
    }
  });
  if (!OrderIcons.value[columnId]) {
    OrderIcons.value[columnId] = true;
    OrderIcons.value[columnId + "Down"] = false;
    sortBy.value = columnId;
    isAscending.value = true;
  } else {
    isAscending.value = !isAscending.value;
    OrderIcons.value[columnId] = false;
  }
  OrderIcons.value[columnId + (isAscending.value ? "" : "Down")] = true;
}

//filter
let filterText = ref('');

let filteredDmms = computed(() => {
  if (filterText.value === '') {
    return orderedDmms.value;
  } else {
    const filterLowerCase = filterText.value.toLowerCase();
    return orderedDmms.value.filter(item =>
      (item.akronym?.toLowerCase()).includes(filterLowerCase) ||
      (item.createdFor?.toLowerCase()).includes(filterLowerCase) ||
      (item.createdBy?.toLowerCase()).includes(filterLowerCase) ||
      (item.updatedBy?.toLowerCase()).includes(filterLowerCase)
    );
  }
});

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