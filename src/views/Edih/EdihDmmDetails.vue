<template>
    <div v-if="dmm">
        <h2>{{ dmm.akronym }} </h2>
        <br>
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
        <br>

        <div class="box">
            <div class="dma-list">
                <h6>Name</h6>
                {{ dmm.title }}
                <hr class="line">
                <h6>Akronym</h6>
                {{ dmm.akronym }}
                <hr class="line">
                <h6>Autor</h6>
                <div class="row">
                    <div class="col">
                        <u>Name</u>
                    </div>
                    <div class="col">
                        <u>Organisation</u>
                    </div>
                    <div class="col">
                        <u>Email</u>
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
                <h6>Zielgruppe</h6>
                {{ dmm.targetGroup }}
                <hr class="line">
                <h6>Anwendungsbereich</h6>
                {{ dmm.applicationArea }}
                <hr class="line">
                <h6>Allgemeiner DMM-Bedarf für den Anwendungsbereich</h6>
                {{ dmm.demand }}
                <hr class="line">
                <h6>Evaluierungsmethode</h6>
                {{ dmm.evaluation }}
                <hr class="line">
                <h6>Verfügbare Sprachen</h6>
                {{ dmm.languages }}
                <hr class="line">
                <h6>Veröffentlichungsdatum</h6>
                {{ dmm.publicationDate }}
            </div>
        </div>

        <div class="box">
            <div class="dma-list">
                <h6>Primäre Quellen und ihr Verwendungszweck</h6>
                {{ dmm.primarySources }}
                <hr class="line">
                <h6>Abgrenzung zu ähnlichen Modellen, Bedarf nach neuem Modell</h6>
                {{ dmm.differentiation }}
            </div>
        </div>

        <div class="box">
            <div class="dma-list">
                <h6>Theoretische Grundlagen (Optional - Link zu wissenschaftlicher Veröffentlichung)</h6>
                {{ dmm.foundations }}
                <hr class="line">
                <h6>Reifegrad und seine Dimensionen sowie deren Granularität und Pfade</h6>
                {{ dmm.descriptions }}
                <div v-if="dmm.descriptionsImageLink">
                    <img :src="dmm.descriptionsImageLink.toString()" alt="Uploaded Image" class="image">
                </div>
                <hr class="line">
                <h6>Beschreibung der Auswertungslogik</h6>
                {{ dmm.calculations }}
                <div v-if="dmm.calculationsImageLink">
                    <img :src="dmm.calculationsImageLink.toString()" alt="Uploaded Image" class="image">
                </div>
            </div>
        </div>


        <br>

        <div v-if="showSurvey">
            <SurveyComp :survey="dmm" />
        </div>
        <div v-if="showSurveyCreator">
            <SurveyCreatorComp @triggerRefresh="fetchData" :survey="dmm" :type="'Dmm'" />
        </div>
        <div v-if="showLogic">
            Auswertungslogik
        </div>

    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { DMM } from "../../interfaces/DMM.js"
import SurveyComp from "../../components/SurveyComp.vue";
import SurveyCreatorComp from "../../components/SurveyCreatorComp.vue";

//language prefix
const filename = 'EdihDmmDetails'


//Import Data for Single Dmm by ID
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});
const dmm = ref<DMM>();
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/DmmById/' + props.id);
        const data: DMM = await response.json();
        dmm.value = data;
    } catch (err: any) {
        console.error(err.message);
    }
};
fetchData();

//Enable Survey and Survey Creator Comp
let showSurvey = ref(false);
let showSurveyCreator = ref(false);
let showLogic = ref(false);


</script>

<style scoped>
.box {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    width: 90%;
}

.dark .box {
    background: #020b3d;
}

.box h6 {
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: bold;
}

.line {
    border-top: 1px solid #000;
    margin-top: 5px;
    margin-bottom: 8px;
}

.image {
    display: block; 
    margin: 0 auto; 
    width: 80%;
    max-width: 800px;
    height: auto; 
}
</style>