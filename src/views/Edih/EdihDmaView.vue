<template>
    <div>
        <h3>{{ $t(filename + '.h3') }}</h3>
    </div>
    <br>

    <!-- buttons for create and delete dma  -->
    <div>
        <button class="btn btn-outline-secondary" v-if="!showDeleteOptions" @click="showInput = !showInput">
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
            <div class="input-select">
                <span class="input-label">{{ $t(filename + '.createInput.organization') }}</span>
                <select v-model="newDmaOrganisation">
                    <option value=""></option>
                    <option v-for="orgName in organizationNames" :key="orgName" :value="orgName">{{ orgName }}</option>
                </select>
            </div>
            <br>
            <!-- create dma from DMM  -->
            <div v-if="dmms.length > 0">
                {{$t(filename + '.createInput.loadDMM') }}
                <br>
                <div v-for="dmm in dmms" :key="dmm._id?.toString()">
                    {{ dmm.akronym }} {{$t(filename + '.createInput.add') }} <input type="checkbox" :value="{ id: dmm._id, akronym: dmm.akronym }"
                        v-model="selectedDmms">
                </div>
            </div>
            <br><br>
            <div class="button-group">
                <button class="btn btn-outline-secondary" @click="showInput = false;">{{
                    $t(filename + '.createInput.cancel') }}</button>
                <button class="btn btn-outline-secondary" @click="createDma">{{ $t(filename + '.createInput.create')
                    }}</button>
            </div>
        </div>
    </div>

    <!-- delete dma interface  -->
    <div v-if="showDeleteQuestion" class="overlay">
        <div class="input-container">
            <h4>{{ $t(filename + '.deleteInput.title') }}</h4>
            <li v-for="item in selectedItems" :key="item._id?.toString()">
                {{ $t(filename + '.deleteInput.name') }} {{ item.title }}, {{ $t(filename + '.deleteInput.organization')
                }}
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
    <!-- header with sort logic part  -->
    <div class="list">
        <div class="row">
            <div v-if="showDeleteOptions" class="col">
                <button class="flex-container">
                    <b>{{ $t(filename + '.list.column0') }}</b>
                </button>
            </div>
            <div class="col" id="title">
                <button class="flex-container" @click="handleSort('title')">
                    <b>{{ $t(filename + '.list.column1') }}</b>
                    <div v-if="OrderIcons.title || OrderIcons.titleDown">
                        <SortAlphaDown v-if="!OrderIcons.titleDown" />
                        <SortAlphaDownAlt v-else />
                    </div>
                </button>
            </div>
            <div class="col" id="createdFor">
                <button class="flex-container" @click="handleSort('createdFor')">
                    <b>{{ $t(filename + '.list.column2') }}</b>
                    <div v-if="OrderIcons.createdFor || OrderIcons.createdForDown">
                        <SortAlphaDown v-if="!OrderIcons.createdForDown" />
                        <SortAlphaDownAlt v-else />
                    </div>
                </button>
            </div>
            <div class="col" id="createdBy">
                <button class="flex-container" @click="handleSort('createdBy')">
                    <b>{{ $t(filename + '.list.column3') }}</b>
                    <div v-if="OrderIcons.createdBy || OrderIcons.createdByDown">
                        <SortAlphaDown v-if="!OrderIcons.createdByDown" />
                        <SortAlphaDownAlt v-else />
                    </div>
                </button>
            </div>
            <div class="col" id="createdAt">
                <button class="flex-container" @click="handleSort('createdAt')">
                    <b>{{ $t(filename + '.list.column4') }}</b>
                    <div v-if="OrderIcons.createdAt || OrderIcons.createdAtDown">
                        <SortNumericDown v-if="!OrderIcons.createdAtDown" />
                        <SortNumericDownAlt v-else />
                    </div>
                </button>
            </div>
            <div class="col" id="updatedBy">
                <button class="flex-container" @click="handleSort('updatedBy')">
                    <b>{{ $t(filename + '.list.column5') }}</b>
                    <div v-if="OrderIcons.updatedBy || OrderIcons.updatedByDown">
                        <SortAlphaDown v-if="!OrderIcons.updatedByDown" />
                        <SortAlphaDownAlt v-else />
                    </div>
                </button>
            </div>
            <div class="col" id="updatedAt">
                <button class="flex-container" @click="handleSort('updatedAt')">
                    <b>{{ $t(filename + '.list.column6') }}</b>
                    <div v-if="OrderIcons.updatedAt || OrderIcons.updatedAtDown">
                        <SortNumericDown v-if="!OrderIcons.updatedAtDown" />
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
                    <div class="col">
                        <RouterLink :to="{ name: 'EdihDmaDetails', params: { id: dma._id?.toString() } }">
                            <a href="">{{ dma.title }}</a>
                        </RouterLink>
                    </div>
                    <div class="col">{{ dma.createdFor }}</div>
                    <div class="col">{{ dma.createdBy }}</div>
                    <div class="col">{{ dma.createdAt }}</div>
                    <div class="col">{{ dma.updatedBy }}</div>
                    <div class="col">{{ dma.updatedAt }}</div>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue';
import type { DMA } from "../../interfaces/DMA.js"
import type { DMM } from "../../interfaces/DMM.js"
import SortNumericDown from '../../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';

//filename for language tags
const filename = 'EdihDmaView'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showInput = ref(false);
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);

//get start data
let currentUserName = localStorage.getItem('userName') || '';
const dmas = ref<DMA[]>([]);
const fetchData = async () => {
    try {
        const response = await api.get('/DmaOverview');
        dmas.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchData();

let organizationNames = ref<any>([]);
const getOrganizations = async () => {
    try {
        const response = await api.get('/OrganizationOverview');
        organizationNames.value = response.data.map((org: any) => org.organization.name);
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};
getOrganizations();

//get start data
const dmms = ref<DMM[]>([]);
const fetchDmm = async () => {
    try {
        const response = await api.get('/PublishedDmm');
        dmms.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
fetchDmm();

//create new dma
let newDmaOrganisation = "";
let newDmaTitle = "";
interface selectedDmms {
    id: string;
    akronym: string;
}
const selectedDmms = ref<selectedDmms[]>([]);

let PostDma = ref<DMA>({
    "title": "",
    "createdFor": "",
    "createdBy": currentUserName,
    "createdAt": new Date(),
    "updatedBy": "",
    "updatedAt": new Date(),
    "responses": [],
    "SurveyJson": {},
    "euDMA":"false"
});

const createDma = async () => {
    try {
        PostDma.value.title = newDmaTitle;
        PostDma.value.createdFor = newDmaOrganisation;
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
        await fetchData();
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
            case 'createdFor':
                aValue = a.createdFor.toLowerCase();
                bValue = b.createdFor.toLowerCase();
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
    "updatedAt": false,
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
        OrderIcons.value[columnId + "Down"] = false;
        sortBy.value = columnId;
        isAscending.value = true;
    } else {
        isAscending.value = !isAscending.value;
        OrderIcons.value[columnId] = false;
    }
    OrderIcons.value[columnId + (isAscending.value ? "" : "Down")] = true;
}
handleSort('updatedAtDown');

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
            (item.updatedBy?.toLowerCase()).includes(filterLowerCase)
        );
    }
});

</script>

<style scoped></style>