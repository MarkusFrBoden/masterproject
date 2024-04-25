<template>
    <div>
        <Radar :data="props.data" :options="options" />
    </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'vue-chartjs';
import type { radarChartData } from "../../src/interfaces/radarChartData.js"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

//accept survey props from calling components
let props = defineProps({
    data: {
    required: true,
    type: Object as () => radarChartData
  }
})
  
//define chart options
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    }
  }

</script>


<style scoped>

</style>