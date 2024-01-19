<template>
  <div>
    <h3>Survey Overview</h3>
  </div>

  <div class="survey-list">
      <div class="row">
        <div class="col">
            Bezeichnung
          </div>
        <div class="col">
            Organisation
          </div>
          <div class="col">
            Ersteller
          </div>
          <div class="col">
            Erstellt am
          </div>
          <div class="col">
            Bearbeitet von
          </div>
          <div class="col">
            Bearbeitet am
          </div>
      </div>

      <li v-for="survey in surveys" :key="survey._id">
        <div class="row">
          <div class="col">
            <RouterLink :to="{name:'JobDetails', params:{id:survey._id}}">
              <a href="">{{ survey.title }}</a>
            </RouterLink>
          </div>
          <div class="col">
            {{ survey.createdFor }}
          </div>
          <div class="col">
            {{ survey.createdBy }}
          </div>
          <div class="col">
            {{ survey.createdAt }}
          </div>
          <div class="col">
            {{ survey.updatedBy }}
          </div>
          <div class="col">
            {{ survey.updatedAt }}
          </div>
        </div>
      </li>

  </div>

</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

const api = inject('api') as any;

const surveys = ref([]);

const fetchData = async () => {
  try {
    const response = await api.get('/surveys');
    surveys.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();


</script>

<style scoped>
.survey-list {
  max-width: 960px;
  margin: 40px auto;
}

.survey-list ul {
  padding: 0
}

.survey-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}

</style>