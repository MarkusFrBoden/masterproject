<template>
    <div>
        <h3>{{ $t(filename + '.h3') }}</h3>
    </div>

    <br>

    <!-- buttons for page navigation  -->
    <div>
        <button class="btn" :class="{ 'btn-outline-secondary': !showDma, 'btn-secondary': showDma }"
            @click="showDma = true">
            {{ $t(filename + '.Dmas') }}
        </button>
        <button class="btn" :class="{ 'btn-outline-secondary': showDma, 'btn-secondary': !showDma }"
            @click="showDma = false">
            {{ $t(filename + '.Infos') }}
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
            <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0"
                @click="showDeleteQuestion = true">
                <div class="delete-selected">
                    {{ $t(filename + '.button.deleteSelected') }}
                </div>
            </button>
            <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0"
                @click="selectedItems = []; showDeleteOptions = !showDeleteOptions">
                {{ $t(filename + '.button.exitDelete') }}
            </button>
        </div>

        <!-- dma list  -->
        <div v-if="dmms.length > 0">
            <DmaList :showDeleteOptions = "showDeleteOptions" :dmas = "dmas" :showOrganization = false @updateselectedItems="updateselectedItems"/>
        </div>
        <div v-else>
            <br>
            {{ $t(filename + '.noDma') }}
        </div>

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
                            <input type="radio" name="dmaOption" :value="nextEuDmaStatus" v-model="executeEuDmaOption">
                            {{
                                $t(filename + '.createInput.euDmaYes1') }}
                            {{ nextEuDmaStatus }} {{ $t(filename + '.createInput.euDmaYes2') }}
                        </label>
                        <br>
                        <label>
                            <input type="radio" name="dmaOption" :value="currentEuDmaStatus"
                                v-model="executeEuDmaOption">
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

    </div>

    <div v-else>
        <div class="container">
            <div class="box">
                <b>{{ $t(filename + '.Information.title1') }}</b>
                <br>
                {{ $t(filename + '.Information.digitalization') }}
                <br><br>
                <img :src="$t(filename + '.Information.digitalization-img')" alt="digitalization-1"
                    style="max-width: 700px; display: block;  margin-left: auto; margin-right: auto; ">
            </div>

            <div class="box">
                <b>{{ $t(filename + '.Information.title2') }} </b>
                <br>
                {{ $t(filename + '.Information.digitalMaturity') }}
                <br><br>
                <img :src="$t(filename + '.Information.digitalMaturity-img')" alt="digitalization-2"
                    style="max-width: 700px; display: block; margin-left: auto; margin-right: auto; ">
            </div>

            <div class="box">
                <b>Empfohlene Literatur </b>
                <br><br>
                <div class="row justify-content-between">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <a href="https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1027&context=ecis2011"
                                    target="_blank" class="custom-btn">
                                    <h6><b> {{ $t(filename + '.Information.source1') }}</b></h6>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://www.springerprofessional.de/management-models-of-digital-transformation/19952220"
                                    target="_blank" class="custom-btn">
                                    <h6><b> {{ $t(filename + '.Information.source2') }}</b></h6>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1022&context=mcis2016"
                                    target="_blank" class="custom-btn">
                                    <h6><b> {{ $t(filename + '.Information.source3') }}</b></h6>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://www.researchgate.net/publication/367206103_The_Extended_Digital_Maturity_Model"
                                    target="_blank" class="custom-btn">
                                    <h6><b> {{ $t(filename + '.Information.source4') }}</b></h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { DMA } from "../../interfaces/DMA.js"
import type { DMM } from "../../interfaces/DMM.js"
import type { User } from "../../interfaces/User.js"
import DmaList from '@/components/DmaList.vue';

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
let currentUserName = localStorage.getItem('userName');
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
let loading = ref(false);
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
    "createdBy": currentUserName!,
    "createdAt": new Date().toLocaleString(),
    "updatedBy": "",
    "updatedAt": "",
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

//accept emit from child to fill selectedItems
const updateselectedItems = (newValue: deleteItems[]) => {
    selectedItems.value = newValue;
    console.log('test2')
}

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


</script>

<style scoped>
.custom-btn {
    color: black;
    text-decoration: none;
    transition: color 0.3s;
}

.dark .custom-btn {
    color: rgb(211, 211, 211);
    text-decoration: none;
    transition: color 0.3s;
}

.custom-btn:hover {
    color: #ff6869;
}

.dark .btn-secondary {
    background-color: #01051b;
}
</style>