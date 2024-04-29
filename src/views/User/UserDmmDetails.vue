<template>
    <div v-if="dmm">
        <h2>{{ dmm.akronym }} </h2>
        <br>

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

    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import type { DMM } from "../../interfaces/DMM.js"

//language prefix
const filename = 'DmmDetails'

//enable api via global variable
const api = inject('api') as any;

//accept props from UserDmmView with dmm id
const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

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

</script>

<style scoped></style>