<template>
  <div>
    <h3>{{ $t(filename + '.h3') }}</h3>
  </div>
  <br>

  <!-- buttons for page navigation  -->
  <div>
    <button class="btn" :class="{ 'btn-outline-secondary': !showDmm, 'btn-secondary': showDmm }"
      @click="showDmm = true">
      {{ $t(filename + '.button.showDmm') }}
    </button>
    <button class="btn" :class="{ 'btn-outline-secondary': showDmm, 'btn-secondary': !showDmm }"
      @click="showDmm = false">
      {{ $t(filename + '.button.showAbout') }}
    </button>
  </div>
  <br>

  <div v-if="showDmm">

  <!-- dmm list, filtered and sorted  -->
  <DmmList :showDeleteOptions="false" :dmms="dmms" type="User" />
  </div>

  <div v-else>
    <div class="container">
      <div class="box">
        <div class="row">
          <div class="col-10">
            <b>EDIH Thuringia</b>
            <br>
            {{ $t(filename + '.EDIHInformation.edihDescription') }}
          </div>
          <div class="col">
            <img src="../../assets/EDIH-Thuringia-Pink.png" alt="EDIH pink"
              style="max-width: 100%;  margin-left: auto; margin-right: auto; ">
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row justify-content-between">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <a href="https://edih.digital/moodle/course/index.php?categoryid=1" target="_blank" class="custom-btn">
                  <h3><b> {{ $t(filename + '.EDIHInformation.edihButtons.learn') }}</b></h3>
                </a>
              </div>
              <div class="col">
                <a href="https://edih.digital/moodle/course/index.php?categoryid=2" target="_blank" class="custom-btn">
                  <h3><b>{{ $t(filename + '.EDIHInformation.edihButtons.test') }}</b></h3>
                </a>
              </div>
              <div class="col">
                <a href="https://edih.digital/moodle/course/index.php?categoryid=4" target="_blank" class="custom-btn">
                  <h3><b>{{ $t(filename + '.EDIHInformation.edihButtons.invest') }}</b></h3>
                </a>
              </div>
              <div class="col">
                <a href="https://edih.digital/moodle/course/index.php?categoryid=5" target="_blank" class="custom-btn">
                  <h3><b>{{ $t(filename + '.EDIHInformation.edihButtons.connect') }}</b></h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="box">
        {{ $t(filename + '.EDIHInformation.dmmDescription.part1') }} <a
          href="https://european-digital-innovation-hubs.ec.europa.eu/knowledge-hub/guidance-documents/overview-digital-maturity-assessment-dma"
          target="_blank"> {{ $t(filename + '.EDIHInformation.dmmDescription.link') }}</a> {{ $t(filename +
            '.EDIHInformation.dmmDescription.part2') }}
        <br> {{ $t(filename + '.EDIHInformation.dmmDescription.aim1') }}
        <br>{{ $t(filename + '.EDIHInformation.dmmDescription.aim2') }}
        <br>{{ $t(filename + '.EDIHInformation.dmmDescription.aim3') }}
        <br>{{ $t(filename + '.EDIHInformation.dmmDescription.aim4') }}
      </div>

      <div class="box">
        {{ $t(filename + '.EDIHInformation.dmaToolDescription') }}
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { DMM } from "../../interfaces/DMM.js"
import DmmList from '@/components/DmmList.vue';

//filename for language tags
const filename = 'DmmView.user'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showDmm = ref(false);

//get start data
const dmms = ref<DMM[]>([]);
const fetchData = async () => {
  try {
    const response = await api.get('/PublishedDmm');
    dmms.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();

</script>

<style scoped>
.custom-btn {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.dark .custom-btn {
  color: rgb(211, 211, 211);
  text-decoration: none;
  transition: color 0.3s;
}

.custom-btn:hover {
  color: #ff6869;
}

.dark .btn-secondary {
  background-color: #01051b;
}
</style>