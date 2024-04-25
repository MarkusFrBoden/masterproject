<template>
    <div>
        <Doughnut :data="props.data" :options="options" />
    </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs';
import type { doughnutChartData } from "../interfaces/doughnutChartData.js"

ChartJS.register(ArcElement, Tooltip, Legend)

//accept survey props from calling components
let props = defineProps({
    data: {
    required: true,
    type: Object as () => doughnutChartData
  }
})
  
//define chart options
const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>


<style scoped>

</style>