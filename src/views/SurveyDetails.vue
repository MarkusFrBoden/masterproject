<template>
    <div v-if="survey">
        <h3>{{ survey.title }}</h3>
        {{ survey }}
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Survey } from "../interfaces/Survey.js"

const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

const survey = ref<Survey>();

const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/SurveyById/' + props.id);
        const data: Survey = await response.json();
        survey.value = data;
    } catch (err: any) {
        console.error(err.message);
    }
};

fetchData();
</script>

<style scoped></style>