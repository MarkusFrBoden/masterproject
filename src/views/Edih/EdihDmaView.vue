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
                    <option v-for="organization in organizations" :key="organization._id"
                        :value="organization.organization.name">{{ organization.organization.name }}</option>
                </select>
            </div>
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
            <div v-if="selectedDmms.some(item => item.akronym === 'EUDMA')">
                <br>
                {{ $t(filename + '.createInput.euDma') }}
                <br>
                {{ $t(filename + '.createInput.nextEuDma') }} {{ nextEuDmaStatus }}
                <br><br>
                <div>
                    <label>
                        <input type="radio" name="dmaOption" :value="nextEuDmaStatus" v-model="executeEuDmaOption">
                        {{
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
                <div v-if="selectedDmms.some(item => item.akronym === 'EUDMA')">
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
    <div v-if="!loading">
        <div v-if="dmas.length > 0">
            <DmaList :showDeleteOptions="showDeleteOptions" :dmas="dmas" :showOrganization=true
                @updateselectedItems="updateselectedItems" type="Edih" />
        </div>
        <div v-else>
            <br>
            {{ $t(filename + '.noDma') }}
        </div>
    </div>
    <div v-else>
        <br>
        Loading...
    </div>

</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue';
import type { DMA } from "../../interfaces/DMA.js"
import type { DMM } from "../../interfaces/DMM.js"
import type { deleteItems } from "../../interfaces/deleteItems.js"
import DmaList from '@/components/DmaList.vue';

//filename for language tags
const filename = 'DmaView'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showInput = ref(false);
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);
let showalert = ref(false);

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

let organizations = ref<any>([]);
const getOrganizations = async () => {
    try {
        const response = await api.get('/OrganizationOverview');
        organizations.value = response.data
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};
getOrganizations();

let loading = ref(false);
const dmms = ref<DMM[]>([]);
const fetchDmm = async () => {
    loading.value = true
    try {
        const response = await api.get('/PublishedDmm');
        dmms.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    loading.value = false
};
fetchDmm();

//check dma details to set eu dma status
let currentEuDmaStatus = ref('');
let nextEuDmaStatus = ref('');
let executeEuDmaOption = ref('');

//create new dma
let newDmaOrganisation = ref('');
let newDmaTitle = "";
interface selectDmms {
    id: string;
    akronym: string;
}
const selectedDmms = ref<selectDmms[]>([]);

watch(selectedDmms, (newValue, oldValue) => {
    if (newValue.some(item => item.akronym === 'EUDMA')) {
        const organizationWithEUDMA = organizations.value.find((org: any) => {
            if (org._id === newDmaOrganisation.value) {
            }
            const organizationWithEUDMA = organizations.value.find((org: any) => org._id === newDmaOrganisation.value);
            console.log(organizationWithEUDMA);
            if (organizationWithEUDMA) {
                currentEuDmaStatus.value = organizationWithEUDMA.organization.euDmaStatus;
                setEuDMAStaus();
            }
        });
    };
});

const setEuDMAStaus = () => {
    if (currentEuDmaStatus.value === 'T0') {
        nextEuDmaStatus.value = 'T1';
    } else if (currentEuDmaStatus.value === 'T1') {
        nextEuDmaStatus.value = 'T2';
    } else if (currentEuDmaStatus.value === 'T2') {
        nextEuDmaStatus.value = 'kein EU-DMA mehr';
    }
    else {
        nextEuDmaStatus.value = 'T0';
    }
    console.log(nextEuDmaStatus.value)
};

let PostDma = ref<DMA>({
    "title": "",
    "createdFor": "",
    "createdBy": currentUserName,
    "createdAt": new Date().toLocaleString(),
    "updatedBy": "",
    "updatedAt": "",
    "responses": [],
    "SurveyJson": {},
    "euDMA": "false"
});

const createDma = async () => {
    try {
        PostDma.value.title = newDmaTitle;
        PostDma.value.createdFor = newDmaOrganisation.value;
        if (selectedDmms.value.some(dmm => dmm.akronym === 'EUDMA')) {
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
                    if (a.akronym === "EUDMA") return -1;
                    if (b.akronym === "EUDMA") return 1;
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
let selectedItems = ref<deleteItems[]>([]);

//accept emit from child to fill selectedItems
const updateselectedItems = (newValue: deleteItems[]) => {
    selectedItems.value = newValue;
}

const deleteSelectedItems = async () => {
    try {
        const IDs = selectedItems.value.map(item => item._id);
        const response = await api.post('/deleteMultipleDmas', { dmaIds: IDs });
        if (response.data.invalidIds) {
            showDeleteQuestion.value = false;
            showDeleteOptions.value = false;
            selectedItems.value = [];
            alert('One or more EU-DMA!');
        } else {
            console.log('Successfully deleted dmas:', response.data);
            await fetchData();
            showDeleteQuestion.value = false;
            showDeleteOptions.value = false;
            selectedItems.value = [];
        }
    } catch (error) {
        console.error('Error deleting dmas:', error);
    }
};

</script>

<style scoped></style>