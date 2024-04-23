<template>
    <div v-if="dmaDetails">
        <h3>{{ dmaDetails.title }} - {{ $t(filename + '.organization') }} {{ dmaDetails.createdFor }}</h3>
        <br>

        <h4>{{ $t(filename + '.dmaData') }}</h4>
        {{ $t(filename + '.creator') }} {{ dmaDetails.createdBy }} ||
        {{ $t(filename + '.createdAt') }} {{ dmaDetails.createdAt }} ||
        {{ $t(filename + '.editor') }} {{ dmaDetails.updatedBy }} ||
        {{ $t(filename + '.editedAt') }} {{ dmaDetails.updatedAt }}

        <!-- button for view -->
        <br><br>
        <div class="button-group">
            <button class="btn btn-outline-secondary" @click="showSurvey = !showSurvey; fetchData()">
                {{ $t(filename + '.button.viewDma') }}
            </button>
            <button class="btn btn-outline-secondary" @click="testcalculation()">
                {{ $t(filename + '.button.DmaAnswers') }}
            </button>
        </div>
        <br>

        <!-- survey js components for view dma  -->
        <div v-if="showSurvey">
            <SurveyComp @surveyCompleted="handleDmaCompleted" :survey="dmaDetails" />
        </div>

        {{ dmaDetails.responses }}

    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref, watch, inject } from "vue";
import type { DMA } from "../../interfaces/DMA.js"
import SurveyComp from "../../components/SurveyComp.vue";
import type { User } from "../../interfaces/User.js"
import type { EUResponse } from "../../interfaces/EUResponse.js"

//filename for language tags
const filename = 'UserDmaDetails'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
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
const dmaDetails = ref<DMA>();
const fetchData = async () => {
    try {
        const response = await api.get('/DmaById/' + props.id);
        dmaDetails.value = await response.data;
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

//use existing organization information for default values in EUPSO questionaire
watch([ExistingUser, dmaDetails], ([user]) => {
    if (user && dmaDetails.value) {
        if (dmaDetails.value.SurveyJson.pages[0].elements[0].elements[0].name === 'EUPSOQuestion1') {
            try {
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[0].defaultValue = new Date();
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[1].defaultValue = user.organization?.name;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[2].defaultValue = user.organization?.identificationNumber;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[3].elements[0].defaultValue = user.organization?.contactPerson.name;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[3].elements[1].defaultValue = user.organization?.contactPerson.role;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[3].elements[2].defaultValue = user.organization?.contactPerson.email;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[3].elements[3].defaultValue = user.organization?.contactPerson.telephone;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[4].defaultValue = user.organization?.website;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[5].defaultValue = user.organization?.type;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[6].defaultValue = user.organization?.size;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[7].defaultValue.text1 = user.organization?.address.street;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[7].defaultValue.text2 = user.organization?.address.postalcode;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[7].defaultValue.text3 = user.organization?.address.city;
                dmaDetails.value.SurveyJson.pages[0].elements[0].elements[7].defaultValue.text4 = user.organization?.address.country;
                dmaDetails.value.SurveyJson.pages[0].elements[1].elements[0].elements[0].defaultValue = user.organization?.primarySektor;
                dmaDetails.value.SurveyJson.pages[0].elements[1].elements[0].elements[1].defaultValue = user.organization?.secondarySektor;
            } catch {
                console.log('not all default value, EU questions were specialized')
            }

        }
    }
    fetchData();
});

const testcalculation = () => {
    if (dmaDetails && dmaDetails.value && dmaDetails.value.responses && dmaDetails.value.responses.length > 0) {
        const responses: any = dmaDetails.value.responses;

        //Dimension 1 (15-16)
        let D1countColumn1 = 0;
        let D1countColumn2 = 0;
        const question16 = responses[0].data.EUPSOQuestion16;
        for (const key in question16) {
            if (question16.hasOwnProperty(key)) {
                const row = question16[key];
                if (row["Column 1"]) D1countColumn1++;
                if (row["Column 2"]) D1countColumn2++;
            }
        }
        const question15 = responses[0].data.EUPSOQuestion15;
        let dim1 = question15.length * 3.333333333333333333 + D1countColumn1 / 8 * 10 * 3.333333333333333333 + D1countColumn2 / 8 * 10 * 3.333333333333333333;
        console.log('dim1: ' + dim1);

        //Dimension 2 (17-18)
        const question17 = responses[0].data.EUPSOQuestion17;
        const itemCounts: any = {
            "Item 2": 0,
            "Item 3": 0,
            "Item 4": 0,
            "Item 5": 0,
            "Item 6": 0
        };
        const question18 = responses[0].data.EUPSOQuestion18;
        for (const row in question18) {
            if (Object.prototype.hasOwnProperty.call(question18, row)) {
                const item = question18[row]["Column 1"];
                if (itemCounts.hasOwnProperty(item)) { // Prüfen Sie, ob das Item in itemCounts existiert
                    itemCounts[item]++;
                }
            }
        }
        let dim2 = ((question17.length / 9) * 10 + ((itemCounts["Item 2"] * 0.2 + itemCounts["Item 3"] * 0.4 + itemCounts["Item 4"] * 0.6 + itemCounts["Item 5"] * 0.8 + itemCounts["Item 6"] * 1) / 8) * 10) * 5;
        console.log('dim2: ' + dim2);

        //Dimension3 (19-20)
        const question19 = responses[0].data.EUPSOQuestion19;
        const question20 = responses[0].data.EUPSOQuestion20;
        let dim3 = ((question19.length / 7) * 10 + question20.length) * 5
        console.log('dim3: ' + dim3);

        //Dimension4 (21-22)
        const question21 = responses[0].data.EUPSOQuestion21;
        const question22 = responses[0].data.EUPSOQuestion22;
        console.log(question21.length, question22.length);
        let dim4 = ((question21.length / 9) * 10 + (question22.length / 6) * 10) * 5
        console.log('dim4: ' + dim4);

        //Dimension 5 (23)
        let D2countColumn1 = 0;
        let D2countColumn2 = 0;
        const question23 = responses[0].data.EUPSOQuestion23;
        for (const key in question23) {
            if (question16.hasOwnProperty(key)) {
                const row = question16[key];
                if (row["Column 1"]) D2countColumn1++;
                if (row["Column 2"]) D2countColumn2++;
            }
        }
        let dim5 = ((D2countColumn1* 10)/8 + (D2countColumn2 * 10)/8)*5 ;
        console.log('dim5: ' + dim5);

        //Dimension 6 (24-25)
        const question24 = responses[0].data.EUPSOQuestion24;
        let D6countColumn1 = 0;
        let D6countColumn2 = 0;
        let D6countColumn3 = 0;
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
        let dim6 = ((question24.length / 9) * 10 + ((D6countColumn1 * 0 + D6countColumn2 * 0.5 + D6countColumn3 * 1) / 5) * 10) * 5;
        console.log('dim6: ' + dim6);

        //Gesamt
        console.log('ges.: ' + (dim1+dim2+dim3+dim4+dim5+dim6)/6)
    }
}



</script>

<style scoped></style>