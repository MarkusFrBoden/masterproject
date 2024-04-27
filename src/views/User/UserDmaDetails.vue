<template>
    <div v-if="dmaDetails">
        <h3>{{ dmaDetails.title }} - {{ $t(filename + '.organization') }} {{ dmaDetails.createdFor }}</h3>
        <br>

        <h4>{{ $t(filename + '.dmaData') }}</h4>
        {{ $t(filename + '.creator') }} {{ dmaDetails.createdBy }} ||
        {{ $t(filename + '.createdAt') }} {{ dmaDetails.createdAt }} ||
        {{ $t(filename + '.editor') }} {{ dmaDetails.updatedBy }} ||
        {{ $t(filename + '.editedAt') }} {{ dmaDetails.updatedAt }}
        <br><br>

        <!-- check if dma was answered  -->
        <div v-if="dmaDetails.responses.length > 0">
            <button class="btn btn-outline-secondary"
                @click="showResultDetails = !showResultDetails; console.log('true')">
                {{ $t(filename + '.button.DmaAnswers') }}
            </button>
            <br><br>
            <!-- check if it includes EU questions  -->
            <div v-if="dmaDetails.euDMA !== 'false'">
                <!-- show answers and results  -->
                <h5>{{ $t(filename + '.results.euAnswers') }}</h5>
                <br>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="box">
                                <b>{{ $t(filename + '.results.overview') }} </b>
                                <div v-if="radarChartDataValue">
                                    <radarChart :data="radarChartDataValue" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="leftbox">
                                <b>{{ $t(filename + '.results.dimension1') }} </b>
                                <div v-if="doughnutChartDataD1">
                                    <doughnutChart :data="doughnutChartDataD1" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="rightbox">
                                <b>{{ $t(filename + '.results.dimension2') }} </b>
                                <div v-if="doughnutChartDataD2">
                                    <doughnutChart :data="doughnutChartDataD2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="leftbox">
                                <b>{{ $t(filename + '.results.dimension3') }} </b>
                                <div v-if="doughnutChartDataD3">
                                    <doughnutChart :data="doughnutChartDataD3" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="rightbox">
                                <b>{{ $t(filename + '.results.dimension4') }} </b>
                                <div v-if="doughnutChartDataD4">
                                    <doughnutChart :data="doughnutChartDataD4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="leftbox">
                                <b>{{ $t(filename + '.results.dimension5') }} </b>
                                <div v-if="doughnutChartDataD5">
                                    <doughnutChart :data="doughnutChartDataD5" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="rightbox">
                                <b>{{ $t(filename + '.results.dimension6') }} </b>
                                <div v-if="doughnutChartDataD6">
                                    <doughnutChart :data="doughnutChartDataD6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showResultDetails" class="overlay">
                <div class="input-container">
                    <SurveyComp :survey="dmaDetails" surveyMode="Display" />
                </div>
                <div class="button-container">
                    <button class="btn btn-outline-secondary custom-button2" @click="showResultDetails = false">{{
                        $t(filename + '.button.closeEuAnswers') }}</button>
                </div>
            </div>
            <!-- check if it includes EU questions  -->
            <div v-else>
                <!-- show answers and results  -->
                <h5> {{ $t(filename + '.results.bim4vidAnswers') }}</h5>
                <div class="container">
                    <div class="row">
                        <div class="box">
                            <b>Selbsteinschätzung nach Masterplan</b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> Implementierung der BIM-Methode
                                        <trafficLight :color=trafficLightKPI[0].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> BIM-Projekteinsatz
                                        <trafficLight :color=trafficLightKPI[1].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> BIM-Anwendungsfälle
                                        <trafficLight :color=trafficLightKPI[2].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b>BIM-Ziele und -Strategie</b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> Dokumentation nach VDI 2552-1
                                        <trafficLight :color=trafficLightKPI[3].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b>Struktur, Organisation und Management</b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> Managementunterstützung
                                        <trafficLight :color=trafficLightKPI[4].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box">BIM-Bedeutung für Organisation
                                        <trafficLight :color=trafficLightKPI[5].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b>Menschen und Unternehmenskultur </b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> BIM-Schulungen und -Zertifikate
                                        <trafficLight :color=trafficLightKPI[6].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> BIM-Mindset
                                        <trafficLight :color=trafficLightKPI[7].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b>Regulierungen und Verträge </b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> OIA/AIA nach ISO 19650-1
                                        <trafficLight :color=trafficLightKPI[8].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> Besondere Vertragsbedingungen BIM
                                        <trafficLight :color=trafficLightKPI[9].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b>Stakeholder </b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> Unterstützung Auftragnehmer
                                        <trafficLight :color=trafficLightKPI[10].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> Bürgerinformation
                                        <trafficLight :color=trafficLightKPI[11].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b> Prozesse </b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> Prozesse und Übersichten
                                        <trafficLight :color=trafficLightKPI[12].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> Dokumentation von BIM-Wissen
                                        <trafficLight :color=trafficLightKPI[13].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b> IT-Infrastruktur </b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> Software
                                        <trafficLight :color=trafficLightKPI[14].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> Hardware
                                        <trafficLight :color=trafficLightKPI[15].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <b> Technologie und Daten </b>
                            <br><br>
                            <div class="row">
                                <div class="col">
                                    <div class="box"> CDE nach DIN SPEC 91391-1
                                        <trafficLight :color=trafficLightKPI[16].value />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="box"> Interoperabilität
                                        <trafficLight :color=trafficLightKPI[17].value />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <i>{{ $t(filename + '.results.text') }}</i>
            <br><br>
        </div>
        <div v-else>
            <!-- survey js component for submit dma  -->
            <br><br>
            <div>
                <button class="btn btn-outline-secondary" @click="showSurvey = !showSurvey">
                    {{ $t(filename + '.button.startDMA') }}
                </button>
            </div>
            <div v-if="showSurvey" class="overlay">
                <div class="input-container">
                    <SurveyComp @surveyCompleted="handleDmaCompleted" :survey="dmaDetails" surveyMode="edit" />
                </div>
                <div class="button-container">
                    <button class="btn btn-outline-secondary custom-button2" @click="showSurvey = false">{{
                        $t(filename
                            + '.button.stopDMA') }}</button>
                </div>
            </div>
            <br><br>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>

</template>

<script setup lang="ts">
import { ref, watch, inject } from "vue";
import type { DMA } from "../../interfaces/DMA.js"
import SurveyComp from "../../components/SurveyComp.vue";
import radarChart from "../../components/radarChart.vue";
import doughnutChart from "../../components/doughnutChart.vue";
import trafficLight from "../../components/trafficLight.vue";
import type { User } from "../../interfaces/User.js"
import type { radarChartData } from "../../interfaces/radarChartData.js"
import type { doughnutChartData } from "../../interfaces/doughnutChartData.js"
import { useI18n } from 'vue-i18n';

//filename for language tags
const filename = 'UserDmaDetails'

//enable api via global variable
const api = inject('api') as any;

//use I18n for language keys
const { t } = useI18n();

//show and hide elements
let showResultDetails = ref(false);
let showSurvey = ref(false);

//accept props from UserDmaView with dma id
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

//get start data
let currentUserName = localStorage.getItem('userName') || '';
let UserId = localStorage.getItem('userId');
let dmaDetails = ref<DMA>();
const fetchData = async () => {
    try {
        const response = await api.get('/DmaById/' + props.id);
        dmaDetails.value = await response.data;
        calculation();
    } catch (err: any) {
        console.error(err.message);
    }
};
fetchData();

let ExistingUser = ref<User>();
const getUser = async () => {
    try {
        const response = await api.get('/UserById/' + UserId);
        ExistingUser.value = response.data;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};
getUser()

//patch to add new dma answers
const handleDmaCompleted = async (results: any) => {
    let data = [];
    if (dmaDetails.value?.responses) {
        for (const response of dmaDetails.value.responses) {
            data.push(response);
        }
    }
    let newResponse = {
        "responseDate": new Date(),
        "responseClient": currentUserName,
        "data": results
    };
    data.push(newResponse);
    let patchResponses = {
        responses: data
    };
    try {
        if (dmaDetails.value) {
            const response = await api.patch('/DmaById/' + dmaDetails.value._id, patchResponses);
            console.log('dma patch success:', response.data);
            await fetchData();
            patchOrganization();
        } else { console.error('dmm null or undefined'); }
    } catch (err) {
        console.error('Error patchching data:', err);
    }
};

// rekursive function to assign defaultValues to element names
function updateDefaultValueByName(element: any, name: string, newValue: any): void {
    if (element.name === name) {
        element.defaultValue = newValue;
    } else if (element.elements) {
        for (const nestedElement of element.elements) {
            updateDefaultValueByName(nestedElement, name, newValue);
        }
    }
}

// rekursive function to check for key
function checkForKey(element: any, name: string): boolean {
    if (element.name === name) {
        return true;
    } else if (element.elements) {
        for (const nestedElement of element.elements) {
            if (checkForKey(nestedElement, name)) {
                return true;
            }
        }
    }
    return false;
}

//use organization data for default values in EUPSO questionaire
watch([ExistingUser, dmaDetails], ([user]) => {
    if (user && dmaDetails.value && dmaDetails.value.SurveyJson) {
        const topLevelElement = dmaDetails.value.SurveyJson.pages[0]
        if (checkForKey(topLevelElement, 'EUPSOQuestion1')) {
            try {
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion1', new Date());
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion2', user.organization?.name);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion3', user.organization?.identificationNumber);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion4', user.organization?.contactPerson.name);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion5', user.organization?.contactPerson.role);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion6', user.organization?.contactPerson.email);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion7', user.organization?.contactPerson.telephone);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion8', user.organization?.website);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion9', user.organization?.type);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion10', user.organization?.size);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion11', {
                    "text1": user.organization?.address.street,
                    "text2": user.organization?.address.postalcode,
                    "text3": user.organization?.address.city,
                    "text4": user.organization?.address.country,
                });
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion13', user.organization?.primarySektor);
                updateDefaultValueByName(topLevelElement, 'EUPSOQuestion14', user.organization?.secondarySektor);
            }
            catch {
                console.log('not all default value, EU questions were specialized')
            }
        }
    }
});


//calculation of eu or bim4vid answers
interface EuResult {
    dmaStatus: String;
    dim1: number;
    dim2: number;
    dim3: number;
    dim4: number;
    dim5: number;
    dim6: number;
    dimG: number;
}
let newEuResults = ref<EuResult>();
let radarChartDataValue = ref<radarChartData>();

let doughnutChartDataD1 = ref<doughnutChartData>();
let doughnutChartDataD2 = ref<doughnutChartData>();
let doughnutChartDataD3 = ref<doughnutChartData>();
let doughnutChartDataD4 = ref<doughnutChartData>();
let doughnutChartDataD5 = ref<doughnutChartData>();
let doughnutChartDataD6 = ref<doughnutChartData>();

let trafficLightKPI = Array(18).fill(null).map(() => ref(''));

const calculation = () => {
    if (dmaDetails.value && dmaDetails.value.responses && dmaDetails.value.responses.length > 0) {
        const responses: any = dmaDetails.value.responses;
        //EU-Results calculation
        if (checkForKey(dmaDetails.value.SurveyJson.pages[0], 'EUPSOQuestion1')) {
            if (responses[0].data.EUPSOQuestion1) {
                //Dimension 1 (15-16)
                let question15value = 0;
                if (responses[0].data.EUPSOQuestion15) {
                    question15value = responses[0].data.EUPSOQuestion15.length;
                }
                let D1countColumn1 = 0;
                let D1countColumn2 = 0;
                if (responses[0].data.EUPSOQuestion16) {
                    const question16 = responses[0].data.EUPSOQuestion16;
                    for (const key in question16) {
                        if (question16.hasOwnProperty(key)) {
                            const row = question16[key];
                            if (row.hasOwnProperty("Column 1") && Array.isArray(row["Column 1"]) && row["Column 1"].includes("Yes")) {
                                D1countColumn1++;
                            }
                            if (row.hasOwnProperty("Column 2") && Array.isArray(row["Column 2"]) && row["Column 2"].includes("Yes")) {
                                D1countColumn2++;
                            }
                        }
                    }
                }
                let dim1 = question15value * 3.333333333333333333 + D1countColumn1 / 8 * 10 * 3.333333333333333333 + D1countColumn2 / 8 * 10 * 3.333333333333333333;

                //Dimension 2 (17-18)
                let question17value = 0
                if (responses[0].data.EUPSOQuestion17) {
                    question17value = responses[0].data.EUPSOQuestion17.length;
                }
                const itemCounts: any = {
                    "Item 2": 0,
                    "Item 3": 0,
                    "Item 4": 0,
                    "Item 5": 0,
                    "Item 6": 0
                };
                if (responses[0].data.EUPSOQuestion18) {
                    const question18 = responses[0].data.EUPSOQuestion18;
                    for (const row in question18) {
                        if (Object.prototype.hasOwnProperty.call(question18, row)) {
                            const item = question18[row]["Column 1"];
                            if (itemCounts.hasOwnProperty(item)) {
                                itemCounts[item]++;
                            }
                        }
                    }
                }
                let dim2 = ((question17value / 9) * 10 + ((itemCounts["Item 2"] * 0.2 + itemCounts["Item 3"] * 0.4 + itemCounts["Item 4"] * 0.6 + itemCounts["Item 5"] * 0.8 + itemCounts["Item 6"] * 1) / 8) * 10) * 5;

                //Dimension3 (19-20)
                let question19value = 0
                if (responses[0].data.EUPSOQuestion19) {
                    question19value = responses[0].data.EUPSOQuestion19.length;
                }
                let question20value = 0
                if (responses[0].data.EUPSOQuestion20) {
                    question20value = responses[0].data.EUPSOQuestion20.length;
                }
                let dim3 = ((question19value / 7) * 10 + question20value) * 5

                //Dimension4 (21-22)
                let question21value = 0
                if (responses[0].data.EUPSOQuestion21) {
                    question21value = responses[0].data.EUPSOQuestion21.length;
                }
                let question22value = 0
                if (responses[0].data.EUPSOQuestion22) {
                    question22value = responses[0].data.EUPSOQuestion22.length;
                }
                let dim4 = ((question21value / 9) * 10 + (question22value / 6) * 10) * 5

                //Dimension 5 (23)
                let D5countColumn1 = 0;
                let D5countColumn2 = 0;
                if (responses[0].data.EUPSOQuestion23) {
                    const question23 = responses[0].data.EUPSOQuestion23;
                    for (const key in question23) {
                        if (question23.hasOwnProperty(key)) {
                            const row = question23[key];
                            if (row.hasOwnProperty("Column 1") && Array.isArray(row["Column 1"]) && row["Column 1"].includes("Yes")) {
                                D5countColumn1++;
                            }
                            if (row.hasOwnProperty("Column 2") && Array.isArray(row["Column 2"]) && row["Column 2"].includes("Yes")) {
                                D5countColumn2++;
                            }
                        }
                    }
                }
                let dim5 = ((D5countColumn1 * 10) / 16 + (D5countColumn2 * 10) / 16) * 5;

                //Dimension 6 (24-25)
                let question24value = 0
                if (responses[0].data.EUPSOQuestion24) {
                    question24value = responses[0].data.EUPSOQuestion24.length;
                }
                let D6countColumn1 = 0;
                let D6countColumn2 = 0;
                let D6countColumn3 = 0;
                if (responses[0].data.EUPSOQuestion25) {
                    const question25 = responses[0].data.EUPSOQuestion25;
                    for (const key in question25) {
                        const value = question25[key];
                        if (value === "Column 1") {
                            D6countColumn1++;
                        } else if (value === "Column 2") {
                            D6countColumn2++;
                        } else if (value === "Column 3") {
                            D6countColumn3++;
                        }
                    }
                }
                let dim6 = ((question24value / 9) * 10 + ((D6countColumn1 * 0 + D6countColumn2 * 0.5 + D6countColumn3 * 1) / 5) * 10) * 5;

                //Gesamt
                let dimG = (dim1 + dim2 + dim3 + dim4 + dim5 + dim6) / 6
                newEuResults.value = { "dmaStatus": dmaDetails.value.euDMA, "dim1": dim1, "dim2": dim2, "dim3": dim3, "dim4": dim4, "dim5": dim5, "dim6": dim6, "dimG": dimG }

                radarChartDataValue.value = {
                    labels: [
                        t(filename + '.results.dimension1'),
                        t(filename + '.results.dimension2'),
                        t(filename + '.results.dimension3'),
                        t(filename + '.results.dimension4'),
                        t(filename + '.results.dimension5'),
                        t(filename + '.results.dimension6')
                    ],
                    datasets: [
                        {
                            label: dmaDetails.value.euDMA + t(filename + '.results.title'),
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: [dim1, dim2, dim3, dim4, dim5, dim6]
                        }
                    ]
                }

                //form doughnuts
                for (let i = 1; i < 7; i++) {
                    const doughnutChartData = eval(`doughnutChartDataD${i}`);
                    const dim = eval(`dim${i}`);
                    doughnutChartData.value = {
                        labels: [t(filename + '.results.dimension' + i + ''), 'Missing'],
                        datasets: [
                            {
                                backgroundColor: ['#41B883', '#E46651'],
                                data: [dim, (100 - dim)]
                            }
                        ]
                    }
                }
            }
        } else if (checkForKey(dmaDetails.value.SurveyJson.pages[1], 'BIM4VIDQuestion2')) {
            //Calculation BIM4VID
            const responses: any = dmaDetails.value.responses[0].data;
            for (let i = 2; i < 19; i++) {
                const response = responses[`BIM4VIDQuestion${i}`];
                if (responses.BIM4VIDQuestion1 === 'Item 1') {
                    if (response > 2) {
                        trafficLightKPI[i - 2].value = 'green';
                    } else if (response === 2) {
                        trafficLightKPI[i - 2].value = 'yellow';
                    } else {
                        trafficLightKPI[i - 2].value = 'red';
                    }
                } else if (responses.BIM4VIDQuestion1 === 'Item 2') {
                    if (response > 1) {
                        trafficLightKPI[i - 2].value = 'green';
                    } else if (response === 1) {
                        trafficLightKPI[i - 2].value = 'yellow';
                    } else {
                        trafficLightKPI[i - 2].value = 'red';
                    }
                } else {
                    trafficLightKPI[i - 2].value = 'green';
                }
            }
        }
    }
}

const patchOrganization = () => {
    if (dmaDetails.value && dmaDetails.value.euDMA !== '0' && dmaDetails.value.euDMA !== 'false' && newEuResults.value) {
        console.log(({ "organization": { "euDmaStatus": dmaDetails.value.euDMA, "euDmaResults": newEuResults.value, "lastDma": { "id": dmaDetails.value._id, "title": dmaDetails.value.title, "createdBy": dmaDetails.value.createdBy, "createdAt": dmaDetails.value.createdAt } } }))
        api.patch('/OrganizationDmaStatusById/' + UserId, ({ "organization": { "euDmaStatus": dmaDetails.value.euDMA, "euDmaResults": newEuResults.value, "lastDma": { "id": dmaDetails.value._id, "title": dmaDetails.value.title, "createdBy": dmaDetails.value.createdBy, "createdAt": dmaDetails.value.createdAt } } }));
    }
}
</script>

<style scoped>
/* Input container customization*/
.input-container {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 900px;
}

.leftbox {
    text-align: center;
}

.rightbox {
    text-align: center;
}
</style>