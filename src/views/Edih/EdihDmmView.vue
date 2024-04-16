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
  <input v-model="filterText" type="text" placeholder="Filter"
    :class="{ 'colored-placeholder': darkmode, 'noncolored-placeholder': !darkmode }" />

  <!-- create dmm interface  -->
  <div v-if="showInput" class="overlay">
    <div class="input-container">
      <SurveyComp @surveyCompleted="handleDmmCompleted" :survey="Dmm || {}" />
      <br><br>
      <div class="button-group">
        <button class="btn btn-outline-secondary" @click="showInput = false;">{{ $t(filename + '.createInput.cancel')
          }}</button>
        <!-- <button class="btn btn-outline-secondary" @click="createDmm">{{ $t(filename + '.createInput.create') }}</button> -->
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
          $t(filename +'.deleteInput.cancel') }}</button>
        <button class="btn btn-outline-secondary" @click="deleteSelectedItems">{{ $t(filename + '.deleteInput.delete')
          }}</button>
      </div>
    </div>
  </div>

  <!-- dmm list, filtered and sorted  -->
  <!-- header with sort logic part  -->
  <div class="dmm-list">
    <div class="row">
      <div v-if="showDeleteOptions" class="col">
        <button class="flex-container">
          <b>{{ $t(filename + '.list.column0') }}</b>
        </button>
      </div>
      <div class="col" id="title">
        <button class="flex-container" @click="handleSort('title')">
          <b>{{ $t(filename + '.list.column1') }}</b>
          <div v-if="OrderIcons.title">
            <SortAlphaDown v-if="!OrderIcons.titleDown" />
            <SortAlphaDownAlt v-if="OrderIcons.titleDown" />
          </div>
        </button>
      </div>
      <div class="col" id="createdBy">
        <button class="flex-container" @click="handleSort('createdBy')">
          <b>{{ $t(filename + '.list.column3') }}</b>
          <div v-if="OrderIcons.createdBy">
            <SortAlphaDown v-if="!OrderIcons.createdByDown" />
            <SortAlphaDownAlt v-if="OrderIcons.createdByDown" />
          </div>
        </button>
      </div>
      <div class="col" id="createdAt">
        <button class="flex-container" @click="handleSort('createdAt')">
          <b>{{ $t(filename + '.list.column4') }}</b>
          <div v-if="OrderIcons.createdAt">
            <SortNumericDown v-if="!OrderIcons.createdAtDown" />
            <SortNumericDownAlt v-if="OrderIcons.createdAtDown" />
          </div>
        </button>
      </div>
      <div class="col" id="updatedBy">
        <button class="flex-container" @click="handleSort('updatedBy')">
          <b>{{ $t(filename + '.list.column5') }}</b>
          <div v-if="OrderIcons.updatedBy">
            <SortAlphaDown v-if="!OrderIcons.updatedByDown" />
            <SortAlphaDownAlt v-if="OrderIcons.updatedByDown" />
          </div>
        </button>
      </div>
      <div class="col" id="updatedAt">
        <button class="flex-container" @click="handleSort('updatedAt')">
          <b>{{ $t(filename + '.list.column6') }}</b>
          <div v-if="OrderIcons.updatedAt">
            <SortNumericDown v-if="!OrderIcons.updatedAtDown" />
            <SortNumericDownAlt v-if="OrderIcons.updatedAtDown" />
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
              <a href="">{{ dmm.title }}</a>
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
import { type Ref, ref, inject, computed } from 'vue';
import type { DMM } from "../../interfaces/DMM.js"
import SortNumericDown from '../../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';
import { CreateDmmQuestions } from '../../components/CreateDmmQuestions_json.js'
import SurveyComp from "../../components/SurveyComp.vue";

//language prefix
const filename = 'EdihDmmView'

//inject darkmode 
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);

//Get first data
const api = inject('api') as any;
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


//Order Logik
let order = ref<keyof DMM>('updatedAt');
let isAscending = ref<boolean>(true);

const orderedDmms = computed(() => {
  return [...dmms.value].sort((a: DMM, b: DMM) => {
    const result = a[order.value] > b[order.value] ? 1 : -1;
    return isAscending.value ? result : -result;
  });
});

type OrderIconsType = {
  [key: string]: boolean;
}

const OrderIcons = ref<OrderIconsType>({
  "title": false,
  "titleDown": false,
  "createdFor": false,
  "createdForDown": false,
  "createdBy": false,
  "createdByDown": false,
  "createdAt": false,
  "createdAtDown": false,
  "updatedBy": false,
  "updatedByDown": false,
  "updatedAt": true,
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
    order.value = columnId;
    isAscending.value = true;
  }
  else if (OrderIcons.value[columnId] && !OrderIcons.value[columnId + "Down"]) {
    OrderIcons.value[columnId + "Down"] = true;
    order.value = columnId;
    isAscending.value = false;
  }
  else {
    OrderIcons.value[columnId] = false;
    OrderIcons.value[columnId + "Down"] = false;
    isAscending.value = false;
  }
}
handleSort('updatedAt');


//Filter logik
let filterText = ref('');

let filteredDmms = computed(() => {
  if (filterText.value === '') {
    return orderedDmms.value;
  } else {
    const filterLowerCase = filterText.value.toLowerCase();
    return orderedDmms.value.filter(item =>
      (item.title?.toLowerCase()).includes(filterLowerCase) ||
      (item.createdFor?.toLowerCase()).includes(filterLowerCase) ||
      (item.createdBy?.toLowerCase()).includes(filterLowerCase) ||
      (item.updatedBy?.toLowerCase()).includes(filterLowerCase)
    );
  }
});


//Create new Dmm
let showInput = ref(false);
let Dmm = ref<DMM>({
    title: "",
    akonym: "",
    targetGroup: "",
    applicationArea: "",
    primarySources: "",
    differentiation: "",
    evaluation: "",
    languages: "",
    publicationDate: new Date(),
    authors: [{name: "", organization: "", email: "" }],
    foundations: "",
    descriptions: "",
    createdBy: "",
    createdAt: new Date(),
    updatedBy: "",
    updatedAt: new Date(),
    SurveyJson: {},
    clculationLogic: {}
});
Dmm.value.SurveyJson = CreateDmmQuestions;

//Mapping der Abfragefelder aus der DmaJS-Antwort auf die Datenbankstruktur der Organisation
let mapping = (object: any) => {
  const PostDmm: DMM = Dmm.value as DMM;
  PostDmm.SurveyJson = {};

  const mappings: any = {
    "question1": (value: any) => { PostDmm.title = value; },
    "question2": (value: any) => { PostDmm.akonym = value; },
    "question3": (value: any) => { PostDmm.targetGroup = value; },
    "question4": (value: any) => { PostDmm.applicationArea = value; },
    "question5": (value: any) => { PostDmm.primarySources = value; },
    "question6": (value: any) => { PostDmm.differentiation = value; },
    "question7": (value: any) => { PostDmm.evaluation = value; },
    "question8": (value: any) => { PostDmm.languages = value; },
    "question9": (value: any) => { PostDmm.publicationDate = value; },
    "question10-1":(value: any) => { 
            // Hinzufügen eines neuen Autors zum Array
            PostDmm.authors.push({ name: value, organization: "", email: "" }); 
        },
        "question10-2":(value: any) => { 
            // Letzten Autor im Array aktualisieren
            const lastAuthor = PostDmm.authors[PostDmm.authors.length - 1];
            if (lastAuthor) {
                lastAuthor.organization = value; 
            }
        },
        "question10-3":(value: any) => { 
            // Letzten Autor im Array aktualisieren
            const lastAuthor = PostDmm.authors[PostDmm.authors.length - 1];
            if (lastAuthor) {
                lastAuthor.email = value; 
            }
        },
    "question11": (value: any) => { PostDmm.foundations = value; },
    "question12": (value: any) => { PostDmm.descriptions = value; }
  };

  applyMappings(object, mappings);

  return PostDmm;
};

function applyMappings(obj:any, mappings:any) {
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


const handleDmmCompleted = async (results: any) => {
  console.log(results);
  const PostDmm: DMM = mapping(results);
  if(PostDmm.authors[0].name === "" && PostDmm.authors[0].organization === "" && PostDmm.authors[0].email === ""){
    PostDmm.authors.shift();
  }
  try {
        const response = await api.post('/Dmm', PostDmm);
        showInput.value = false;
        fetchData();
        order.value = "updatedAt";
        OrderIcons.value["updatedAt"] = true;
        handleSort('updatedAt');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

//Delete Dmms
interface deleteItems {
  _id: string;
  title: string;
  createdFor: string;
}
let selectedItems = ref<deleteItems[]>([])
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);
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
</script>

<style scoped>
.dmm-list {
  max-width: 960px;
  margin: 40px auto;
}

.dmm-list ul {
  padding: 0
}

.list-move {
  transition: all 0.5s;
}

.dmm-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.dark .dmm-list li {
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
  width: 1000px;
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

.delete-selected {
  color: rgb(214, 69, 69);
}

.flex-container {
  display: flex;
  align-items: center;
  background: none;
}

.flex-container b {
  margin-right: 8px;
}
</style>