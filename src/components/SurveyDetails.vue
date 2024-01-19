<template>
    <div>
        <h3>{{survey.title}}</h3>
        {{survey}}
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    id: {
        type: String,
        required: true,
    }
});

const survey = ref([]);

const fetchData = async () => {
    fetch('http://localhost:3000/surveys/'+props.id)
        .then(res => res.json())
        .then(data => survey.value = data)
        .catch(err => console.log(err.message))
    }

fetchData();
</script>

<style scoped>

</style>