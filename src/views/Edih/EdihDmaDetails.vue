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
        <div>
            <div v-if="dmaDetails.responses.length > 0">
                <!-- check if it includes EU questions  -->
                <div v-if="dmaDetails.euDMA !== 'false'">
                    <!-- show answers and results  -->
                    <h5>{{ $t(filename + '.results.euAnswers') }}</h5>
                    <!-- button for downloading csv data -->
                    <button class="btn btn-outline-secondary" @click="downloadCSV">
                        CSV herunterladen
                        <!-- boxes with results -->
                    </button>
                    <br><br>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="box position-relative">
                                    <b>{{ $t(filename + '.results.overview') }}</b>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <span class="position-absolute"
                                            style="top: 50%; left: calc(15%); transform: translate(-50%, -50%); font-size: 50px; color: #41B883;">
                                            Ø {{ newEuResults?.dimG.toFixed(2) }}
                                        </span>
                                    </div>
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
                <!-- BIM4VID Answers  -->
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
            </div>
            <div v-else>
                <button class="btn btn-outline-secondary"
                    @click="showSurveyCreator = !showSurveyCreator; showSurvey = false; fetchData()">
                    {{ $t(filename + '.button.editDma') }}
                </button>
                <button class="btn btn-outline-secondary"
                    @click="showSurvey = !showSurvey; showSurveyCreator = false; fetchData()">
                    {{ $t(filename + '.button.viewDma') }}
                </button>
            </div>
        </div>
        <br>

        <!-- survey js components for edit and view dma  -->
        <div v-if="showSurvey">
            <SurveyComp @surveyCompleted="handleDmaCompleted" :survey="dmaDetails" surveyMode="edit" />
        </div>
        <div v-if="showSurveyCreator">
            <SurveyCreatorComp @triggerRefresh="fetchData" :survey="dmaDetails" :type="'DMA'" />
        </div>

    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import type { DMA } from "../../interfaces/DMA.js"
import SurveyComp from "../../components/SurveyComp.vue";
import SurveyCreatorComp from "../../components/SurveyCreatorComp.vue";
import radarChart from "../../components/radarChart.vue";
import doughnutChart from "../../components/doughnutChart.vue";
import trafficLight from "../../components/trafficLight.vue";
import { useI18n } from 'vue-i18n';
import type { radarChartData } from "../../interfaces/radarChartData.js"
import type { doughnutChartData } from "../../interfaces/doughnutChartData.js"

//filename for language tags
const filename = 'EdihDmaDetails'

//enable api via global variable
const api = inject('api') as any;

//use I18n for language keys
const { t } = useI18n();

//show and hide elements
let showSurvey = ref(false);
let showSurveyCreator = ref(false);

//accept props from EdihDmaView with dma id
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

//get start data
let currentUserName = localStorage.getItem('userName') || '';
const dmaDetails = ref<DMA>();
const fetchData = async () => {
    try {
        const response = await api.get('/DmaById/' + props.id);
        dmaDetails.value = await response.data;
    } catch (err: any) {
        console.error(err.message);
    }
    calculation();
};
fetchData();

//patch with new dma answers
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
            console.log('dmm patch success:', response.data);
            fetchData()
        } else { console.error('dmm null or undefined'); }
    } catch (err) {
        console.error('Error patchching data:', err);
    }
};

// rekursive function to check for key
function checkForKey(element: any, name: string): boolean {
    if (element && element.name && element.name === name) {
        return true;
    } else if (element && element.elements) {
        for (const nestedElement of element.elements) {
            if (checkForKey(nestedElement, name)) {
                return true;
            }
        }
    }
    return false;
}

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
        }

        if (checkForKey(dmaDetails.value.SurveyJson.pages[1], 'BIM4VIDQuestion2') || checkForKey(dmaDetails.value.SurveyJson.pages[9], 'BIM4VIDQuestion2')) {
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

//enable csv download
const downloadCSV = () => {
    // crate json with mapping
    const header = dmaDetails.value?.responses[0].data
    console.log(header);

    //transform date
    const inputDateString = new Date().toLocaleString();
    const parts = inputDateString.split(", ")[0].split(".");
    const inputDate = new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");
    const year = inputDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;

    //function for 2 answers 1|1
    const questionCalc1 = (question: any, row: any) => {
        if (question) {
            let Column1 = false;
            let Column2 = false;
            if (question.hasOwnProperty(row)) {
                const rowData = question[row];
                if (rowData.hasOwnProperty("Column 1") && Array.isArray(rowData["Column 1"]) && rowData["Column 1"].includes("Yes")) {
                    Column1 = true;
                }
                if (rowData.hasOwnProperty("Column 2") && Array.isArray(rowData["Column 2"]) && rowData["Column 2"].includes("Yes")) {
                    Column2 = true;
                }
            }
            if (Column1 && Column2) {
                return '1|1';
            } else if (Column1 && !Column2) {
                return '1|0';
            } else if (!Column1 && Column2) {
                return '0|1';
            } else {
                return '0|0';
            }
        }
    }

    //function for readiogrop with 6 answers
    const questionCalc2 = (question: any, row: any) => {
        if (question.hasOwnProperty(row)) {
            const item = question[row]["Column 1"];
            switch (item) {
                case "Item 1":
                    return 0;
                case "Item 2":
                    return 2;
                case "Item 3":
                    return 4;
                case "Item 4":
                    return 6;
                case "Item 5":
                    return 8;
                case "Item 6":
                    return 10;
                default:
                    return 0;
            }
        } else {
            return 0;
        }
    };

    //function for readiogrop with 3 answers
    const questionCalc3 = (question: any, row: any) => {
        if (question.hasOwnProperty(row)) {
            const item = question[row];
            switch (item) {
                case "Column 1":
                    return 0;
                case "Column 2":
                    return 5;
                case "Column 3":
                    return 10;
                default:
                    return 0;
            }
        } else {
            return 0;
        }
    };

    const jsonData: any = {
        time_point: dmaDetails.value?.euDMA,
        maturity_assessment_date: formattedDate,
        enterprise_name_edih: header.EUPSOQuestion2,
        fiscal_registration_number_vat: header.EUPSOQuestion3,
        //question EUPSOQuestion15
        digitalisation_needs_are_identified_m2_1_1: header.EUPSOQuestion15?.includes('Item 1') ? 1 : 0,
        financial_resources_m2_1_1: header.EUPSOQuestion15?.includes('Item 2') ? 1 : 0,
        ict_infrastructures_m2_1_1: header.EUPSOQuestion15?.includes('Item 3') ? 1 : 0,
        ict_specialists_m2_1_1: header.EUPSOQuestion15?.includes('Item 4') ? 1 : 0,
        political_commitment_m2_1_1: header.EUPSOQuestion15?.includes('Item 5') ? 1 : 0,
        organisational_units_m2_1_1: header.EUPSOQuestion15?.includes('Item 6') ? 1 : 0,
        internal_external_operational_processes_m2_1_1: header.EUPSOQuestion15?.includes('Item 7') ? 1 : 0,
        offline_services_m2_1_1: header.EUPSOQuestion15?.includes('Item 8') ? 1 : 0,
        citizens_and_other_stakeholders_m2_1_1: header.EUPSOQuestion15?.includes('Item 9') ? 1 : 0,
        risks_of_digitalisation_m2_1_1: header.EUPSOQuestion15?.includes('Item 10') ? 1 : 0,
        //question EUPSOQuestion16
        internal_operations_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 1'),
        external_operations_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 2'),
        policy_making_policy_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 3'),
        provision_of_public_services_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 4'),
        financial_administration_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 5'),
        human_resources_management_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 6'),
        purchasing_and_public_procurement_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 7'),
        project_planning_m2_1_2: questionCalc1(header.EUPSOQuestion16, 'Row 8'),
        //question EUPSOQuestion17
        connectivity_infrastructure_m2_2_3: header.EUPSOQuestion17?.includes('Item 1') ? 1 : 0,
        website_m2_2_3: header.EUPSOQuestion17?.includes('Item 2') ? 1 : 0,
        web_based_forms_and_blogs_m2_2_3: header.EUPSOQuestion17?.includes('Item 3') ? 1 : 0,
        live_chats_social_networks_m2_2_3: header.EUPSOQuestion17?.includes('Item 4') ? 1 : 0,
        remote_collaboration_tools_m2_2_3: header.EUPSOQuestion17?.includes('Item 5') ? 1 : 0,
        internal_web_portal_m2_2_3: header.EUPSOQuestion17?.includes('Item 6') ? 1 : 0,
        information_management_systems_m2_2_3: header.EUPSOQuestion17?.includes('Item 7') ? 1 : 0,
        tools_for_digital_public_services_m2_2_3: header.EUPSOQuestion17?.includes('Item 8') ? 1 : 0,
        public_procurement_tools_m2_2_3: header.EUPSOQuestion17?.includes('Item 9') ? 1 : 0,
        //question EUPSOQuestion18
        following_advanced_digital_technologies_m2_2_4__artificial_intelligence_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 1'),
        following_advanced_digital_technologies_m2_2_4__communication_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 2'),
        following_advanced_digital_technologies_m2_2_4__computing_infrastructures_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 3'),
        following_advanced_digital_technologies_m2_2_4__distributed_ledger_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 4'),
        following_advanced_digital_technologies_m2_2_4__digital_identity_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 5'),
        following_advanced_digital_technologies_m2_2_4__immersive_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 6'),
        following_advanced_digital_technologies_m2_2_4__internet_of_things_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 7'),
        following_advanced_digital_technologies_m2_2_4__software_service_technologies_m2_2_4: questionCalc2(header.EUPSOQuestion18, 'Row 8'),
        //question EUPSOQuestion19
        assesses_digital_skills_gaps_m2_3_5: header.EUPSOQuestion19?.includes('Item 1') ? 1 : 0,
        designs_a_training_plan_m2_3_5: header.EUPSOQuestion19?.includes('Item 2') ? 1 : 0,
        organises_short_trainings_m2_3_5: header.EUPSOQuestion19?.includes('Item 3') ? 1 : 0,
        facilitates_learning_m2_3_5: header.EUPSOQuestion19?.includes('Item 4') ? 1 : 0,
        offers_traineeships_m2_3_5: header.EUPSOQuestion19?.includes('Item 5') ? 1 : 0,
        sponsors_staff_participation_m2_3_5: header.EUPSOQuestion19?.includes('Item 6') ? 1 : 0,
        makes_use_of_subsidised_training_m2_3_5: header.EUPSOQuestion19?.includes('Item 7') ? 1 : 0,
        //question EUPSOQuestion20
        increases_staff_awareness_m2_3_6: header.EUPSOQuestion20?.includes('Item 1') ? 1 : 0,
        communicates_digitalisation_m2_3_6: header.EUPSOQuestion20?.includes('Item 2') ? 1 : 0,
        monitors_staff_acceptance_m2_3_6: header.EUPSOQuestion20?.includes('Item 3') ? 1 : 0,
        involves_staff_including_m2_3_6: header.EUPSOQuestion20?.includes('Item 4') ? 1 : 0,
        gives_staff_more_autonomy_m2_3_6: header.EUPSOQuestion20?.includes('Item 5') ? 1 : 0,
        redesigns_adapts_jobs_m2_3_6: header.EUPSOQuestion20?.includes('Item 6') ? 1 : 0,
        sets_up_more_flexible_working_m2_3_6: header.EUPSOQuestion20?.includes('Item 7') ? 1 : 0,
        puts_at_staff_disposal_m2_3_6: header.EUPSOQuestion20?.includes('Item 8') ? 1 : 0,
        puts_at_end_users_disposal_m2_3_6: header.EUPSOQuestion20?.includes('Item 9') ? 1 : 0,
        uses_feedback_m2_3_6: header.EUPSOQuestion20?.includes('Item 10') ? 1 : 0,
        //question EUPSOQuestion21
        the_organisation_has_in_place_m2_4_7: header.EUPSOQuestion21?.includes('Item 1') ? 1 : 0,
        not_used_paper_based_forms_m2_4_7: header.EUPSOQuestion21?.includes('Item 2') ? 1 : 0,
        data_are_stored_only_digitally_m2_4_7: header.EUPSOQuestion21?.includes('Item 3') ? 1 : 0,
        data_is_properly_integrated_m2_4_7: header.EUPSOQuestion21?.includes('Item 4') ? 1 : 0,
        data_is_accessible_m2_4_7: header.EUPSOQuestion21?.includes('Item 5') ? 1 : 0,
        collected_data_systematically_analysed_m2_4_7: header.EUPSOQuestion21?.includes('Item 6') ? 1 : 0,
        organisation_data_enriched_m2_4_7: header.EUPSOQuestion21?.includes('Item 7') ? 1 : 0,
        organisation_data_analytics_m2_4_7: header.EUPSOQuestion21?.includes('Item 8') ? 1 : 0,
        organisation_data_available_publicly_m2_4_7: header.EUPSOQuestion21?.includes('Item 9') ? 1 : 0,
        //question EUPSOQuestion22
        data_security_policy_m2_4_8: header.EUPSOQuestion22?.includes('Item 1') ? 1 : 0,
        established_plans_m2_4_8: header.EUPSOQuestion22?.includes('Item 2') ? 1 : 0,
        staff_is_regularly_informed_m2_4_8: header.EUPSOQuestion22?.includes('Item 3') ? 1 : 0,
        cyber_threats_egularly_monitored_m2_4_8: header.EUPSOQuestion22?.includes('Item 4') ? 1 : 0,
        full_backup_copy_of_critical_business_data_m2_4_8: header.EUPSOQuestion22?.includes('Item 5') ? 1 : 0,
        business_continuity_plan_m2_4_8: header.EUPSOQuestion22?.includes('Item 6') ? 1 : 0,
        //question EUPSOQuestion23
        publish_data_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 1'),
        ensure_level_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 2'),
        give_preference_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 3'),
        ensure_internal_visibility_m2_9_5: questionCalc1(header.EUPSOQuestion23, 'Row 4'),
        reuse_and_share_m2_9_5: questionCalc1(header.EUPSOQuestion23, 'Row 5'),
        impose_any_technology_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 6'),
        ensure_data_portability_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 7'),
        give_end_users_options_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 8'),
        provide_single_point_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 9'),
        ask_users_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 10'),
        persons_with_disabilities_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 11'),
        services_available_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 12'),
        ensure_data_exchange_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 13'),
        give_priority_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 14'),
        data_storage_formats_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 15'),
        digital_solutions_m2_5_9: questionCalc1(header.EUPSOQuestion23, 'Row 16'),
        //question EUPSOQuestion24
        sustainable_organisational_model_m2_6_10: header.EUPSOQuestion24?.includes('Item 1') ? 1 : 0,
        sustainable_service_provision_m2_6_10: header.EUPSOQuestion24?.includes('Item 2') ? 1 : 0,
        procurement_of_sustainable_products_m2_6_10: header.EUPSOQuestion24?.includes('Item 3') ? 1 : 0,
        emissions_pollution_m2_6_10: header.EUPSOQuestion24?.includes('Item 4') ? 1 : 0,
        sustainable_energy_generation_m2_6_10: header.EUPSOQuestion24?.includes('Item 5') ? 1 : 0,
        optimisation_of_energy_consumption_m2_6_10: header.EUPSOQuestion24?.includes('Item 6') ? 1 : 0,
        reduction_of_transport_and_packaging_costs_m2_6_10: header.EUPSOQuestion24?.includes('Item 7') ? 1 : 0,
        digital_applications_m2_6_10: header.EUPSOQuestion24?.includes('Item 8') ? 1 : 0,
        paperless_administrative_processes_m2_6_10: header.EUPSOQuestion24?.includes('Item 9') ? 1 : 0,
        //question EUPSOQuestion25
        green_digitalisation_2_likert__environmental_concerns_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 1'),
        green_digitalisation_2_likert__environmental_management_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 2'),
        green_digitalisation_2_likert__environmental_aspects_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 3'),
        green_digitalisation_2_likert__energy_consumption_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 4'),
        green_digitalisation_2_likert__recycling_reuse_m2_6_11: questionCalc3(header.EUPSOQuestion25, 'Row 5'),
    };

    // Generiere Header aus dem JSON
    const headers: string[] = Object.keys(jsonData);

    // Daten unter den Headern einfügen
    let csvContent = headers.join(",") + "\n";
    headers.forEach((header: string) => {
        // Korrekte Kodierung der Umlaute sicherstellen und einzelne Nullen behandeln
        const value = jsonData[header] !== null && jsonData[header] !== undefined ? jsonData[header].toString().replace(/"/g, '""') : "";
        csvContent += `"${value}",`;
    });
    csvContent = csvContent.slice(0, -1); // Letztes Komma entfernen
    csvContent += "\n";

    // CSV-Datei herunterladen
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodedUri); // BOM-Zeichen hinzufügen
    link.setAttribute("download", "EuDMAdata.csv");
    document.body.appendChild(link);
    link.click();
}


</script>

<style scoped></style>