<template>
    <div>
        <h3>{{ $t('survey.h1') }}</h3>
    </div>

    <br>

    <div>
        <button class="btn btn-outline-secondary" v-if="!showDeleteOptions" @click="showInput = !showInput">
            {{ $t('survey.buttonCreateSurvey') }}
        </button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length === 0"
            @click="showDeleteOptions = !showDeleteOptions">
            <div v-if="!showDeleteOptions">{{ $t('survey.buttonDeleteSurvey') }}</div>
            <div v-else> löschen beenden</div>
        </button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0" @click="showDeleteQuestion = true">
            <div class="delete-selected">
                Delete Selected
            </div>
        </button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0"
            @click="selectedItems = []; showDeleteOptions = !showDeleteOptions">
            löschen beenden
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

    <div v-if="showDeleteQuestion" class="overlay">
        <div class="input-container">
            <h3>Sollen die folgenden Umfragen wirklich gelöscht werden?</h3>
            <li v-for="item in selectedItems" :key="item._id?.toString()">
                Bezeichnung: {{ item.title }}, Organisation: {{ item.title }}
            </li>
            <br>
            <div class="button-group">
                <button @click="showDeleteQuestion = false;">Abbrechen</button>
                <button @click="deleteSelectedItems">Löschen</button>
            </div>
        </div>
    </div>

    <div class="survey-list">
        <div class="row">
            <div v-if="showDeleteOptions" class="col">
                Delete?
            </div>
            <div class="col" id="title">
                <button class="flex-container" @click="handleSort('title')">
                    <b>{{ $t('survey.column1') }}</b>
                    <div v-if="OrderIcons.title && !OrderIcons.titleDown">
                        <SortAlphaDown />
                    </div>
                    <div v-if="OrderIcons.title && OrderIcons.titleDown">
                        <SortAlphaDownAlt />
                    </div>
                </button>
            </div>
            <div class="col" id="createdFor">
                <button class="flex-container" @click="handleSort('createdFor')">
                    <b>{{ $t('survey.column2') }}</b>
                    <div v-if="OrderIcons.createdFor && !OrderIcons.createdForDown">
                        <SortAlphaDown />
                    </div>
                    <div v-if="OrderIcons.createdFor && OrderIcons.createdForDown">
                        <SortAlphaDownAlt />
                    </div>
                </button>
            </div>
            <div class="col" id="createdBy">
                <button class="flex-container" @click="handleSort('createdBy')">
                    <b>{{ $t('survey.column3') }}</b>
                    <div v-if="OrderIcons.createdBy && !OrderIcons.createdByDown">
                        <SortAlphaDown />
                    </div>
                    <div v-if="OrderIcons.createdBy && OrderIcons.createdByDown">
                        <SortAlphaDownAlt />
                    </div>
                </button>
            </div>
            <div class="col" id="createdAt">
                <button class="flex-container" @click="handleSort('createdAt')">
                    <b>{{ $t('survey.column4') }}</b>
                    <div v-if="OrderIcons.createdAt && !OrderIcons.createdAtDown">
                        <SortNumericDown />
                    </div>
                    <div v-if="OrderIcons.createdAt && OrderIcons.createdAtDown">
                        <SortNumericDownAlt />
                    </div>
                </button>
            </div>
            <div class="col" id="updatedBy">
                <button class="flex-container" @click="handleSort('updatedBy')">
                    <b>{{ $t('survey.column5') }}</b>
                    <div v-if="OrderIcons.updatedBy && !OrderIcons.updatedByDown">
                        <SortAlphaDown />
                    </div>
                    <div v-if="OrderIcons.updatedBy && OrderIcons.updatedByDown">
                        <SortAlphaDownAlt />
                    </div>
                </button>
            </div>
            <div class="col" id="updatedAt">
                <button class="flex-container" @click="handleSort('updatedAt')">
                    <b>{{ $t('survey.column6') }}</b>
                    <div v-if="OrderIcons.updatedAt && !OrderIcons.updatedAtDown">
                        <SortNumericDown />
                    </div>
                    <div v-if="OrderIcons.updatedAt && OrderIcons.updatedAtDown">
                        <SortNumericDownAlt />
                    </div>
                </button>
            </div>
        </div>

    <transition-group name="list">
        <li v-for="survey in orderedSurveys" :key="survey._id?.toString()">
            <div class="row">
                <div v-if="showDeleteOptions" class="col">
                    <input type="checkbox" v-model="selectedItems" :value="{ _id: survey._id, title: survey.title, createdFor: survey.createdFor }" />
                </div>
                <div class="col">
                    <RouterLink :to="{ name: 'SurveyDetails', params: { id: survey._id?.toString() } }">
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
    </transition-group>
    </div>
</template>
  
<script setup lang="ts">
import { ref, inject, computed } from 'vue';
import type { Survey } from "../interfaces/Survey.js"
import SortNumericDown from '../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../components/icons/SortAlphaDownAlt.vue';

//Get first data
const api = inject('api') as any;
const surveys = ref<Survey[]>([]);
const fetchData = async () => {
    try {
        const response = await api.get('/SurveysOverview');
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
let PostSurvey = ref<Survey>({
    "title": "",
    "createdFor": "",
    "createdBy": "Markus Boden",
    "createdAt": new Date(),
    "updatedBy": "Markus Boden",
    "updatedAt": new Date(),
    "responses": [],
    "SurveyJson": {}
});

const createSurvey = async () => {
    try {
        PostSurvey.value.title = newSurveyTitle;
        PostSurvey.value.createdFor = newSurveyOrganisation;
        const response = await api.post('/Survey', PostSurvey.value);
        console.log('POST Response:', response.data);
        showInput.value = false;
        fetchData();
        order.value = "updatedAt";
        OrderIcons.value["updatedAt"] = true;
        OrderIcons.value["updatedAtDown"] = true;
        handleSort('updatedAt');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


//Delete Surveys
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
    const response = await api.post('/deleteMultipleSurveys', { surveyIds:IDs});
    console.log('Successfully deleted surveys:', response.data);
    fetchData();
    showDeleteQuestion.value = false;
    showDeleteOptions.value = false;
    selectedItems.value = [];
  } catch (error) {
    console.error('Error deleting surveys:', error);
  }
};


//Order Logik
let order = ref<keyof Survey>('updatedAt');
let isAscending = ref<boolean>(true);

const orderedSurveys = computed(() => {
    return [...surveys.value].sort((a: Survey, b: Survey) => {
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
    "updatedAtDown": false,
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

</script>
  
<style scoped>
.survey-list {
    max-width: 960px;
    margin: 40px auto;
}

.survey-list ul {
    padding: 0
}

.list-move {
    transition: all 0.5s;
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

.delete-selected {
  color: rgb(173, 31, 31);
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