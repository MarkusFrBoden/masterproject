<template>
    <div>
        <h3>Survey Overview</h3>
    </div>

    <div>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <li v-for="item in data" :key="item._id">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

const api = inject('api');

const data = ref([]);

const fetchData = async () => {
  try {
    // Verwende die bereitgestellte API
    const response = await api.get('/books');
    data.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

</script>

<style scoped>

</style>