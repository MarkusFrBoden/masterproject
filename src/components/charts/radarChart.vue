<template>
  <div :style="{ height: height, width: width }">
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
  Legend,
  Colors
} from 'chart.js';
import { Radar } from 'vue-chartjs';
import type { radarChartData } from "../../src/interfaces/radarChartData.js"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors
);

ChartJS.defaults.borderColor = 'rgba(100, 100, 100, 1)';
ChartJS.defaults.color = 'rgba(150, 150, 150, 1)';


//accept survey props from calling components
let props = defineProps({
  data: {
    required: true,
    type: Object as () => radarChartData
  },
  height: {
    required: false,
    type: String
  },
  width: {
    required: false,
    type: String
  }
})

if (props.data.datasets.length > 0) {
  for (let i = 0; i < props.data.datasets.length; i++) {
    const dataset = props.data.datasets[i];
    if (i === 0) {
      dataset.backgroundColor = 'rgba(179,181,198,0.2)';
      dataset.borderColor = 'rgba(179,181,198,1)';
      dataset.pointBackgroundColor = 'rgba(179,181,198,1)';
      dataset.pointBorderColor = '#fff';
      dataset.pointHoverBackgroundColor = '#fff';
      dataset.pointHoverBorderColor = 'rgba(179,181,198,1)';
    } else if (i === 1) {
      dataset.backgroundColor = 'rgba(173, 216, 230, 0.2)';
      dataset.borderColor = 'rgba(173, 216, 230, 1)';
      dataset.pointBackgroundColor = 'rgba(173, 216, 230, 1)';
      dataset.pointBorderColor = '#fff';
      dataset.pointHoverBackgroundColor = '#fff';
      dataset.pointHoverBorderColor = 'rgba(173, 216, 230, 1)';
    } else if (i === 2) {
      dataset.backgroundColor = 'rgba(144, 238, 144, 0.2)';
      dataset.borderColor = 'rgba(144, 238, 144, 1)';
      dataset.pointBackgroundColor = 'rgba(144, 238, 144, 1)';
      dataset.pointBorderColor = '#fff';
      dataset.pointHoverBackgroundColor = '#fff';
      dataset.pointHoverBorderColor = 'rgba(144, 238, 144, 1)';
    }
  }
}

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


<style scoped></style>