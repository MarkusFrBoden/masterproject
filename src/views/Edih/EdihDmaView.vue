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
    <input v-model="filterText" type="text" placeholder="Filter"
        :class="{ 'colored-placeholder': darkmode, 'noncolored-placeholder': !darkmode }" />

    <!-- create dma interface  -->
    <div v-if="showInput" class="overlay">
        <div class="input-container">
            <h4>{{ $t(filename + '.createInput.title') }}</h4>
            {{ $t(filename + '.createInput.name') }} <input type="text" v-model="newDmaTitle">
            <br>
            <div class="custom-select">
                <span class="input-label">{{ $t(filename + '.createInput.organization') }}</span>
                <select v-model="newDmaOrganisation">
                    <option value=""></option>
                    <option v-for="orgName in organizationNames" :key="orgName" :value="orgName">{{ orgName }}</option>
                </select>
            </div>
            <br>
            EU-Dma automatisch laden?<input type="checkbox" v-model="addEUDma">
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
    <div class="dma-list">
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
            <div class="col" id="createdFor">
                <button class="flex-container" @click="handleSort('createdFor')">
                    <b>{{ $t(filename + '.list.column2') }}</b>
                    <div v-if="OrderIcons.createdFor">
                        <SortAlphaDown v-if="!OrderIcons.createdForDown" />
                        <SortAlphaDownAlt v-if="OrderIcons.createdForDown" />
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
import { type Ref, ref, inject, computed } from 'vue';
import type { DMA } from "../../interfaces/DMA.js"
import SortNumericDown from '../../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';
import { EUDmaJSON } from '../../components/EUDma_json.js'

//language prefix
const filename = 'EdihDmaView'

//inject darkmode 
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);

//Get first data
const api = inject('api') as any;
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

let newDmaOrganisation = ref<string>('');
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


//Create new Dma
let addEUDma = ref(false);
let showInput = ref(false);
let newDmaTitle = "";
let PostDma = ref<DMA>({
    "title": "",
    "createdFor": "",
    "createdBy": "Markus Boden",
    "createdAt": new Date(),
    "updatedBy": "Markus Boden",
    "updatedAt": new Date(),
    "responses": [],
    "SurveyJson": {}
});

const createDma = async () => {
    try {
        PostDma.value.title = newDmaTitle;
        PostDma.value.createdFor = newDmaOrganisation.value;
        if (addEUDma.value === true) {
            PostDma.value.SurveyJson = EUDmaJSON
            console.log(PostDma.value.SurveyJson)
        };
        const response = await api.post('/Dma', PostDma.value);
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


//Delete Dmas
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


//Order Logik
let order = ref<keyof DMA>('updatedAt');
let isAscending = ref<boolean>(true);

const orderedDmas = computed(() => {
    return [...dmas.value].sort((a: DMA, b: DMA) => {
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

<style scoped>
.dma-list {
    max-width: 960px;
    margin: 40px auto;
}

.dma-list ul {
    padding: 0
}

.list-move {
    transition: all 0.5s;
}

.dma-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.dark .dma-list li {
    background: #020b3d;
}

.input-container {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 16px;
    border: 1px solid #919191;
    border-radius: 12px;
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

.custom-select select {
    appearance: none;
    border-radius: 4px;
    font-size: 16px;
    color: #020b3d;
    outline: none;
    background-color: #fff;
    width: 65%;
    padding: 6px;
    border: 1px solid #919191;
    text-align: center
}
</style>