<template>
    <div v-if="dma">
        <h3>{{ dma.title }} - {{ $t(filename + '.organization') }} {{ dma.createdFor }}</h3>
        <br>

        <h4>{{ $t(filename + '.dmaData') }}</h4>
        {{ $t(filename + '.creator') }} {{ dma.createdBy }} ||
        {{ $t(filename + '.createdAt') }} {{ dma.createdAt }} ||
        {{ $t(filename + '.editor') }} {{ dma.updatedBy }} ||
        {{ $t(filename + '.editedAt') }} {{ dma.updatedAt }}

        <!-- button for view -->
        <br><br>
        <div class="button-group">
            <button class="btn btn-outline-secondary" @click="showSurvey = !showSurvey; fetchData()">
                {{ $t(filename + '.button.viewDma') }}
            </button>
        </div>
        <br>

        <!-- survey js components for view dma  -->
        <div v-if="showSurvey">
            <SurveyComp :survey="dma" />
        </div>

    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { DMA } from "../../interfaces/DMA.js"
import SurveyComp from "../../components/SurveyComp.vue";

//filename for language tags
const filename = 'UserDmaDetails'

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
const dma = ref<DMA>();
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/DmaById/' + props.id);
        const data: DMA = await response.json();
        dma.value = data;
        console.log("Refresh")
    } catch (err: any) {
        console.error(err.message);
    }
};
fetchData();

</script>

<style scoped></style>