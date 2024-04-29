<template>
    <div v-if="dmm">
        <h2>{{ dmm.akronym }} </h2>
        <br>

        <!-- buttons for editing dmm information, question...  -->
        <button class="btn btn-outline-secondary" @click="showInput = !showInput;">
            {{ $t(filename + '.button.editDmmInformation') }}
        </button>
        <button class="btn btn-outline-secondary" @click="published = !published; simplePatch()">
            <div v-if="published">
                {{ $t(filename + '.button.publishDmm') }}
            </div>
            <div v-else>
                {{ $t(filename + '.button.hideDmm') }}
            </div>
        </button>
        <br><br>
        <div class="button-group">
            <button class="btn btn-outline-secondary"
                @click="showSurveyCreator = !showSurveyCreator; showLogic = false; showSurvey = false; fetchData()">
                {{ $t(filename + '.button.editDmm') }}
            </button>
            <button class="btn btn-outline-secondary"
                @click="showSurvey = !showSurvey; showLogic = false; showSurveyCreator = false; fetchData()">
                {{ $t(filename + '.button.viewDmm') }}
            </button>
            <button class="btn btn-outline-secondary"
                @click="showLogic = !showLogic; showSurvey = false; showSurveyCreator = false;">
                {{ $t(filename + '.button.editDmmLogic') }}
            </button>
        </div>
        <br><br>

        <!-- information about the dmm  -->
        <div class="box">
            <div class="dma-list">
                <h6>{{ $t(filename + '.dmmInformation.name') }}</h6>
                {{ dmm.title }}
                <hr class="line">
                <div class="row">
                    <div class="col">
                        <h6>{{ $t(filename + '.dmmInformation.akronym') }}</h6>
                    </div>
                    <div class="col">
                        <h6>{{ $t(filename + '.dmmInformation.status') }}</h6>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        {{ dmm.akronym }}
                    </div>
                    <div class="col">
                        <div v-if="dmm.published">
                            {{ $t(filename + '.dmmInformation.published') }}
                        </div>
                        <div v-else>
                            {{ $t(filename + '.dmmInformation.hided') }}
                        </div>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.authors.title') }}</h6>
                <div class="row">
                    <div class="col">
                        <u>{{ $t(filename + '.dmmInformation.authors.name') }}</u>
                    </div>
                    <div class="col">
                        <u>{{ $t(filename + '.dmmInformation.authors.organization') }}</u>
                    </div>
                    <div class="col">
                        <u>{{ $t(filename + '.dmmInformation.authors.email') }}</u>
                    </div>
                </div>
                <div v-for="autors in dmm.authors">
                    <div class="row">
                        <div class="col">
                            {{ autors.name }}
                        </div>
                        <div class="col">
                            {{ autors.organization }}
                        </div>
                        <div class="col">
                            {{ autors.email }}
                        </div>
                    </div>
                </div>
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.targetGroup') }}</h6>
                {{ dmm.targetGroup }}
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.applicationArea') }}</h6>
                {{ dmm.applicationArea }}
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.damand') }}</h6>
                {{ dmm.demand }}
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.evaluationMethod') }}</h6>
                {{ dmm.evaluation }}
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.languages') }}</h6>
                {{ dmm.languages }}
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.publicationDate') }}</h6>
                {{ dmm.publicationDate }}
            </div>
        </div>
        <div class="box">
            <div class="dma-list">
                <h6>{{ $t(filename + '.dmmInformation.primarySources') }}</h6>
                {{ dmm.primarySources }}
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.differentation') }}</h6>
                {{ dmm.differentiation }}
            </div>
        </div>
        <div class="box">
            <div class="dma-list">
                <h6>{{ $t(filename + '.dmmInformation.foundation') }}</h6>
                {{ dmm.foundations }}
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.description') }}</h6>
                {{ dmm.descriptions }}
                <div v-if="dmm.descriptionsImageLink">
                    <img :src="dmm.descriptionsImageLink.toString()" alt="Uploaded Image" class="image">
                </div>
                <hr class="line">
                <h6>{{ $t(filename + '.dmmInformation.calculation') }}</h6>
                {{ dmm.calculations }}
                <div v-if="dmm.calculationsImageLink">
                    <img :src="dmm.calculationsImageLink.toString()" alt="Uploaded Image" class="image">
                </div>
            </div>
        </div>
        <br>

        <!-- update dmm information interface  -->
        <div v-if="showInput" class="overlay">
            <div class="input-container">
                <SurveyComp @surveyCompleted="handleDmmPatch" :survey="updateDmmQuestions || {}" surveyMode="edit"/>
            </div>
            <div class="button-container">
                <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">
                    {{ $t(filename + '.button.endInput') }}</button>
            </div>
        </div>

        <!-- view and update dmm question interfaces  -->
        <div v-if="showSurvey" class="overlay">
            <div class="input-container">
                <SurveyComp :survey="dmm" surveyMode="edit"/>
            </div>
            <div class="button-container">
                <button class="btn btn-outline-secondary custom-button2" @click="showSurvey = false;">
                    {{ $t(filename + '.button.endInput') }}</button>
            </div>
        </div>
        <div v-if="showSurveyCreator" class="overlay">
            <div class="input-container">
                <SurveyCreatorComp @triggerRefresh="fetchData" :survey="dmm" :type="'Dmm'" />
            </div>
            <div class="button-container">
                <button class="btn btn-outline-secondary custom-button2" @click="showSurveyCreator = false;">
                    {{ $t(filename + '.button.endInput') }}</button>
            </div>
        </div>
        <div v-if="showLogic" class="overlay">
            <div class="input-container">
                Auswertungslogik
            </div>
            <div class="button-container">
                <button class="btn btn-outline-secondary custom-button2" @click="showLogic = false;">
                    {{ $t(filename + '.button.endInput') }}</button>
            </div>
        </div>

    </div>
    <div v-else>
        Loading...
    </div>

</template>

<script setup lang="ts">
import { ref, watch, inject } from "vue";
import type { DMM } from "../../interfaces/DMM.js"
import SurveyComp from "../../components/SurveyComp.vue";
import SurveyCreatorComp from "../../components/SurveyCreatorComp.vue";
import { PatchDmmQuestions } from "@/components/staticQuestions/PatchDmmQuestions_json.js";

//language prefix
const filename = 'DmmDetails'

//enable api via global variable
const api = inject('api') as any;

//accept props from EdihDmmView with dmm id
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

//show and hide elements
let showInput = ref(false);
let showSurvey = ref(false);
let showSurveyCreator = ref(false);
let showLogic = ref(false);

//get start data
const dmm = ref<DMM>();
const fetchData = async () => {
    try {
        const response = await api.get('/DmmById/' + props.id);
        const data: DMM = await response.data;
        dmm.value = data;
    } catch (err: any) {
        console.error(err.message);
    }
};
fetchData();

//mapping from surveyJs answers to patchDmm object
let mapping = (object: any) => {
    const patchDmm: DMM = { ...(dmm.value || {}) } as DMM;
    patchDmm.SurveyJson = {};
    patchDmm.authors = [{ name: "", organization: "", email: "" }];

    const mappings: any = {
        "question1": (value: any) => { patchDmm.title = value; },
        "question2": (value: any) => { patchDmm.akronym = value; },
        "question3": (value: any) => { patchDmm.targetGroup = value; },
        "question4": (value: any) => { patchDmm.applicationArea = value; },
        "question5": (value: any) => { patchDmm.demand = value; },
        "question6": (value: any) => { patchDmm.primarySources = value; },
        "question7": (value: any) => { patchDmm.differentiation = value; },
        "question8": (value: any) => { patchDmm.evaluation = value; },
        "question9": (value: any) => { patchDmm.languages = value; },
        "question10": (value: any) => { patchDmm.publicationDate = value; },
        "question11_1": (value: any) => {
            patchDmm.authors.push({ name: value, organization: "", email: "" });
        },
        "question11_2": (value: any) => {
            const lastAuthor = patchDmm.authors[patchDmm.authors.length - 1];
            if (lastAuthor) {
                lastAuthor.organization = value;
            }
        },
        "question11_3": (value: any) => {
            const lastAuthor = patchDmm.authors[patchDmm.authors.length - 1];
            if (lastAuthor) {
                lastAuthor.email = value;
            }
        },
        "question12": (value: any) => { patchDmm.foundations = value; },
        "question13": (value: any) => { patchDmm.descriptions = value; },
        "question14": (value: any) => { patchDmm.descriptionsImageLink = value; },
        "question15": (value: any) => { patchDmm.calculations = value; },
        "question16": (value: any) => { patchDmm.calculationsImageLink = value; },
    };

    applyMappings(object, mappings);

    return patchDmm;
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

//delete picture informations exept the upload links
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

//patch dmm
const patchDmmFunction = async (data: any) => {
    try {
        if (dmm.value) {
            const response = await api.patch('/DmmById/' + dmm.value._id, data);
            console.log('dmm patch success:', response.data);
            fetchData()
        } else { console.error('dmm null or undefined'); }
    } catch (err) {
        console.error('Error patchching data:', err);
    }
};

const handleDmmPatch = (results: any) => {
    const PatchDmm: DMM = mapping(results);
    delete PatchDmm._id;
    if (PatchDmm.authors[0].name === "" && PatchDmm.authors[0].organization === "" && PatchDmm.authors[0].email === "") {
        PatchDmm.authors.shift();
    }
    patchDmmFunction(PatchDmm)
};

//use surveyJs questions for dmm informations
let updateDmmQuestions = ref();
updateDmmQuestions.value = {
    "SurveyJson": {}
};
updateDmmQuestions.value.SurveyJson = { ...PatchDmmQuestions };

//use existing dmm information for default values in questionaire
watch([dmm, updateDmmQuestions], ([dmm]) => {
    if (dmm && updateDmmQuestions.value) {
        updateDmmQuestions.value.SurveyJson.pages[0].elements[0].defaultValue = dmm.title;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[1].defaultValue = dmm.akronym;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[2].defaultValue = dmm.targetGroup;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[3].defaultValue = dmm.demand;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[4].defaultValue = dmm.applicationArea;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[5].defaultValue = dmm.primarySources;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[6].defaultValue = dmm.differentiation;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[7].defaultValue = dmm.evaluation;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[8].defaultValue = dmm.languages;
        updateDmmQuestions.value.SurveyJson.pages[0].elements[9].defaultValue = dmm.publicationDate;
        if (dmm.authors && Array.isArray(dmm.authors) && dmm.authors.length > 0) {
            if (dmm.authors.length > 0) {
                for (let i = 0; i < dmm.authors.length; i++) {
                    updateDmmQuestions.value.SurveyJson.pages[0].elements[10].defaultValue[i].question11_1 = dmm.authors[i].name;
                    updateDmmQuestions.value.SurveyJson.pages[0].elements[10].defaultValue[i].question11_2 = dmm.authors[i].organization;
                    updateDmmQuestions.value.SurveyJson.pages[0].elements[10].defaultValue[i].question11_3 = dmm.authors[i].email;
                }
            }
        }
        updateDmmQuestions.value.SurveyJson.pages[1].elements[0].defaultValue = dmm.foundations;
        updateDmmQuestions.value.SurveyJson.pages[1].elements[1].defaultValue = dmm.descriptions;
        updateDmmQuestions.value.SurveyJson.pages[1].elements[2].defaultValue = dmm.descriptionsImageLink;
        updateDmmQuestions.value.SurveyJson.pages[1].elements[3].defaultValue = dmm.calculations;
        updateDmmQuestions.value.SurveyJson.pages[1].elements[4].defaultValue = dmm.calculationsImageLink;
    }
});


//simple patch of dmm publication status
let published = ref(false);
const simplePatch = () => {
    let patchDmm = {
        "published": published.value
    }
    patchDmmFunction(patchDmm)
};

</script>

<style scoped>
/* Input container customization*/ 
.input-container {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
}
</style>