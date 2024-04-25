<template>
    <div>
        <h3>{{ $t(filename + '.h3') }}</h3>
    </div>

    <br>

    <!-- buttons for page navigation  -->
<div>
    <button class="btn" :class="{ 'btn-outline-secondary': !showDma, 'btn-secondary': showDma }"
      @click="showDma = true">
      Verfügbare DMM
    </button>
    <button class="btn" :class="{ 'btn-outline-secondary': showDma, 'btn-secondary': !showDma }"
      @click="showDma = false">
      Allgemeine Informationen
    </button>
  </div>
  <br>

<div v-if="showDma">

    <!-- buttons for create and delete dma  -->
    <div>
        <button class="btn btn-outline-secondary" v-if="!showDeleteOptions"
            @click="showInput = !showInput; setEuDMAStaus();">
            {{ $t(filename + '.button.createDma') }}
        </button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length === 0"
            @click="showDeleteOptions = !showDeleteOptions">
            <div v-if="!showDeleteOptions">{{ $t(filename + '.button.deleteDma') }}</div>
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

    <!-- create dma interface  -->
    <div v-if="showInput" class="overlay">
        <div class="input-container">
            <h4>{{ $t(filename + '.createInput.title') }}</h4>
            {{ $t(filename + '.createInput.name') }} <input type="text" v-model="newDmaTitle">
            <br>
            <!-- create dma from DMM  -->
            <div v-if="dmms.length > 0">
                {{ $t(filename + '.createInput.loadDMM') }}
                <br>
                <div v-for="dmm in dmms" :key="dmm._id?.toString()">
                    {{ dmm.akronym }} {{ $t(filename + '.createInput.add') }} <input type="checkbox"
                        :value="{ id: dmm._id, akronym: dmm.akronym }" v-model="selectedDmms">
                </div>
            </div>

            <div v-if="selectedDmms.some(item => item.akronym === 'EUPSO')">
                <br>
                {{ $t(filename + '.createInput.euDma') }}
                <br>
                {{ $t(filename + '.createInput.nextEuDma') }} {{ nextEuDmaStatus }}
                <br><br>
                <div>
                    <label>
                        <input type="radio" name="dmaOption" :value="nextEuDmaStatus" v-model="executeEuDmaOption"> {{
                            $t(filename + '.createInput.euDmaYes1') }}
                        {{ nextEuDmaStatus }} {{ $t(filename + '.createInput.euDmaYes2') }}
                    </label>
                    <br>
                    <label>
                        <input type="radio" name="dmaOption" :value="currentEuDmaStatus" v-model="executeEuDmaOption">
                        {{ $t(filename + '.createInput.euDmaNo') }}
                    </label>
                </div>
            </div>

            <br><br>
            <div class="button-group" style="display: flex; justify-content: center;">
                <button class="btn btn-outline-secondary" @click="showInput = false;">
                    {{ $t(filename + '.createInput.cancel') }}
                </button>
                <div v-if="selectedDmms.some(item => item.akronym === 'EUPSO')">
                    <button class="btn btn-outline-secondary"
                        @click="executeEuDmaOption !== '' ? createDma() : null; selectedDmms = []">
                        {{ $t(filename + '.createInput.create') }}
                    </button>
                </div>
                <div v-else>
                    <button class="btn btn-outline-secondary" @click="createDma(); selectedDmms = []">
                        {{ $t(filename + '.createInput.create') }}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- delete dma interface  -->
    <div v-if="showDeleteQuestion" class="overlay">
        <div class="input-container">
            <h4>{{ $t(filename + '.deleteInput.title') }}</h4>
            <li v-for="item in selectedItems" :key="item._id?.toString()">
                {{ $t(filename + '.deleteInput.name') }} {{ item.title }}, {{ $t(filename +
                    '.deleteInput.organization') }}
                {{ item.createdFor }}
            </li>
            <br>
            <div class="button-group">
                <button class="btn btn-outline-secondary" @click="showDeleteQuestion = false;">{{
                    $t(filename + '.deleteInput.cancel') }}</button>
                <button class="btn btn-outline-secondary" @click="deleteSelectedItems">{{
                    $t(filename + '.deleteInput.delete') }}</button>
            </div>
        </div>
    </div>

    <!-- dma list, filtered and sorted  -->
    <div v-if="filteredDmas.length > 0">
        <div class="list">
            <!-- header with sort logic part  -->
            <div class="row">
                <div v-if="showDeleteOptions" class="col-1">
                    <button class="flex-container">
                        <b>{{ $t(filename + '.list.column0') }}</b>
                    </button>
                </div>
                <div class="col" id="euDMA">
                    <button class="flex-container" @click="handleSort('euDMA')">
                        <b>{{ $t(filename + '.list.column1') }}</b>
                        <div v-if="OrderIcons.euDMA || OrderIcons.euDMADown">
                            <SortAlphaDown v-if="OrderIcons.euDMA" />
                            <SortAlphaDownAlt v-else />
                        </div>
                    </button>
                </div>
                <div class="col" id="title">
                    <button class="flex-container" @click="handleSort('title')">
                        <b>{{ $t(filename + '.list.column2') }}</b>
                        <div v-if="OrderIcons.title || OrderIcons.titleDown">
                            <SortAlphaDown v-if="OrderIcons.title" />
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
                <li v-for="dma in filteredDmas" :key="dma._id?.toString()">
                    <div class="row">
                        <div v-if="showDeleteOptions" class="col">
                            <input type="checkbox" v-model="selectedItems"
                                :value="{ _id: dma._id, title: dma.title, createdFor: dma.createdFor }" />
                        </div>
                        <div v-if="dma.euDMA !== '0'" class="col">
                            <div v-if="dma.euDMA === 'T0'">
                                <img class="image" src="../../assets/dma_T0.png" alt="T0-Batch">
                            </div>
                            <div v-else-if="dma.euDMA === 'T1'">
                                <img class="image" src="../../assets/dma_T1.png" alt="T1-Batch">
                            </div>
                            <div v-else-if="dma.euDMA === 'T2'">
                                <img class="image" src="../../assets/dma_T2.png" alt="T2-Batch">
                            </div>
                        </div>
                        <div v-else>
                            <div class="col"></div>
                        </div>
                        <div class="col">
                            <RouterLink :to="{ name: 'UserDmaDetails', params: { id: dma._id?.toString() } }">
                                <a href="">{{ dma.title }}</a>
                            </RouterLink>
                        </div>
                        <div class="col">{{ dma.createdBy }}</div>
                        <div class="col">{{ dma.createdAt }}</div>
                        <div class="col">{{ dma.updatedBy }}</div>
                        <div class="col">{{ dma.updatedAt }}</div>
                    </div>
                </li>
            </transition-group>
        </div>
    </div>
    <div v-else-if="loading">Loading...</div>
    <div v-else>
        <br>
        {{ $t(filename + '.noDma') }}
    </div>
</div>
    <div v-else>
About DMAs
</div>

</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue';
import type { DMA } from "../../interfaces/DMA.js"
import type { DMM } from "../../interfaces/DMM.js"
import type { User } from "../../interfaces/User.js"
import SortNumericDown from '../../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';

//filename for language tags
const filename = 'UserDmaView'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showDma = ref(false);
let showInput = ref(false);
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);

//get start data
let currentUserOrganization = localStorage.getItem('organizationName') || '';
let currentUserId = localStorage.getItem('userId');
let ExistingUser = ref<User>();
const getUser = async () => {
    try {
        const response = await api.get('/UserById/' + currentUserId);
        ExistingUser.value = response.data;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};
getUser()

const dmas = ref<DMA[]>([]);
let loading = ref(false)
const fetchData = async () => {
    loading.value = true
    try {
        const response = await api.get('/DmaByOrganization/' + currentUserOrganization);
        dmas.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    loading.value = false
};
fetchData();

const dmms = ref<DMM[]>([]);
const fetchDMMs = async () => {
    try {
        const response = await api.get('/PublishedDmm');
        dmms.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchDMMs();

//check dma details to set eu dma status
let currentEuDmaStatus = ref('');
let nextEuDmaStatus = ref('');
let executeEuDmaOption = ref('');

const setEuDMAStaus = () => {
    if (ExistingUser.value) {
        currentEuDmaStatus.value = ExistingUser.value.organization.euDmaStatus;
        if (currentEuDmaStatus.value === 'T0') {
            nextEuDmaStatus.value = 'T1'
        } else if (currentEuDmaStatus.value === 'T1') {
            nextEuDmaStatus.value = 'T2'
        } else {
            nextEuDmaStatus.value = 'T0'
        }
    } else {
        console.log('No existing user')
    }
}

//create new dma
let newDmaTitle = "";
interface selectedDmms {
    id: string;
    akronym: string;
}
const selectedDmms = ref<selectedDmms[]>([]);

let PostDma = ref<DMA>({
    "title": "",
    "createdFor": "",
    "createdBy": "Markus Boden",
    "createdAt": new Date(),
    "updatedBy": "Markus Boden",
    "updatedAt": new Date(),
    "euDMA": "false",
    "responses": [],
    "SurveyJson": {}
});

const createDma = async () => {
    try {
        PostDma.value.title = newDmaTitle;
        PostDma.value.createdFor = currentUserOrganization;
        if (selectedDmms.value.some(dmm => dmm.akronym === 'EUPSO')) {
            if (executeEuDmaOption.value === nextEuDmaStatus.value) {
                PostDma.value.euDMA = nextEuDmaStatus.value;
            } else {
                PostDma.value.euDMA = "0";
            }
        }
        if (selectedDmms.value.length > 0) {
            if (selectedDmms.value.length === 1) {
                try {
                    const response = await api.get('/DmmById/' + selectedDmms.value[0].id);
                    const data: DMM = await response.data;
                    PostDma.value.SurveyJson = data.SurveyJson;
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                selectedDmms.value.sort((a, b) => {
                    if (a.akronym === "EUPSO") return -1;
                    if (b.akronym === "EUPSO") return 1;
                    return 0;
                });
                for (const dmm of selectedDmms.value) {
                    try {
                        const response = await api.get('/DmmById/' + dmm.id);
                        const data: DMM = await response.data;
                        if (PostDma.value.SurveyJson.pages) {
                            PostDma.value.SurveyJson.pages.push(...data.SurveyJson.pages);
                        } else {
                            PostDma.value.SurveyJson = data.SurveyJson;
                        }
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                }
            }
        } else {
            PostDma.value.SurveyJson = {};
        }
        const response = await api.post('/Dma', PostDma.value);
        console.log('POST Response:', response.data);
        showInput.value = false;
        await fetchData();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

//delete dmas
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
        const response = await api.post('/deleteMultipleDmas', { dmaIds: IDs });
        console.log('Successfully deleted dmas:', response.data);
        fetchData();
        showDeleteQuestion.value = false;
        showDeleteOptions.value = false;
        selectedItems.value = [];
    } catch (error) {
        console.error('Error deleting dmas:', error);
    }
};

// ---------------------------------------------------- sort & filter ---------------------------------------------------------------
//order
let isAscending = ref<boolean>(true);
const sortBy = ref('updatedAt');
type OrderIconsType = {
    [key: string]: boolean;
}

const orderedDmas = computed(() => {
    return [...dmas.value].sort((a, b) => {
        let aValue, bValue;
        switch (sortBy.value) {
            case 'title':
                aValue = a.title.toLowerCase();
                bValue = b.title.toLowerCase();
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
            case 'euDMA':
                aValue = a.euDMA;
                bValue = b.euDMA;
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
    "title": false,
    "titleDown": false,
    "createdBy": false,
    "createdByDown": false,
    "createdAt": false,
    "createdAtDown": false,
    "updatedBy": false,
    "updatedByDown": false,
    "updatedAt": true,
    "updatedAtDown": false,
    "euDMA": false,
    "euDMADown": false
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
handleSort('updatedAt');

//filter
let filterText = ref('');

let filteredDmas = computed(() => {
    if (filterText.value === '') {
        return orderedDmas.value;
    } else {
        const filterLowerCase = filterText.value.toLowerCase();
        return orderedDmas.value.filter(item =>
            (item.title?.toLowerCase()).includes(filterLowerCase) ||
            (item.createdFor?.toLowerCase()).includes(filterLowerCase) ||
            (item.createdBy?.toLowerCase()).includes(filterLowerCase) ||
            (item.updatedBy?.toLowerCase()).includes(filterLowerCase) ||
            (item.euDMA?.toLowerCase()).includes(filterLowerCase)
        );
    }
});

</script>

<style scoped>
.image {
    max-width: 70px;
    max-height: 70px;
    margin-left: 10px;
}
</style>