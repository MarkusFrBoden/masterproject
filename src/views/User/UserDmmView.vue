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
    <!-- input for filter  -->
    <input v-model="filterText" type="text" placeholder="Filter" class="custom-input" />

    <!-- dmm list, filtered and sorted  -->
    <!-- header with sort logic part  -->
    <div class="list">
      <div class="row">
        <div class="col" id="akronym">
          <button class="flex-container" @click="handleSort('akronym')">
            <b>{{ $t(filename + '.list.column1') }}</b>
            <div v-if="OrderIcons.akronym || OrderIcons.akronymDown">
              <SortAlphaDown v-if="OrderIcons.akronym" />
              <SortAlphaDownAlt v-else />
            </div>
          </button>
        </div>
        <div class="col" id="createdBy">
          <button class="flex-container" @click="handleSort('createdBy')">
            <b>{{ $t(filename + '.list.column3') }}</b>
            <div v-if="OrderIcons.createdBy || OrderIcons.createdByDown">
              <SortAlphaDown v-if="OrderIcons.createdBy" />
              <SortAlphaDownAlt v-else />
            </div>
          </button>
        </div>
        <div class="col" id="createdAt">
          <button class="flex-container" @click="handleSort('createdAt')">
            <b>{{ $t(filename + '.list.column4') }}</b>
            <div v-if="OrderIcons.createdAt || OrderIcons.createdAtDown">
              <SortNumericDown v-if="OrderIcons.createdAt" />
              <SortNumericDownAlt v-else />
            </div>
          </button>
        </div>
        <div class="col" id="updatedBy">
          <button class="flex-container" @click="handleSort('updatedBy')">
            <b>{{ $t(filename + '.list.column5') }}</b>
            <div v-if="OrderIcons.updatedBy || OrderIcons.updatedByDown">
              <SortAlphaDown v-if="OrderIcons.updatedBy" />
              <SortAlphaDownAlt v-else />
            </div>
          </button>
        </div>
        <div class="col" id="updatedAt">
          <button class="flex-container" @click="handleSort('updatedAt')">
            <b>{{ $t(filename + '.list.column6') }}</b>
            <div v-if="OrderIcons.updatedAt || OrderIcons.updatedAtDown">
              <SortNumericDown v-if="OrderIcons.updatedAt" />
              <SortNumericDownAlt v-else />
            </div>
          </button>
        </div>
      </div>

      <!-- data with transition  -->
      <transition-group name="list">
        <li v-for="dmm in filteredDmms" :key="dmm._id?.toString()">
          <div class="row">
            <div class="col">
              <RouterLink :to="{ name: 'UserDmmDetails', params: { id: dmm._id?.toString() } }">
                <a href="">{{ dmm.akronym }}</a>
              </RouterLink>
            </div>
            <div class="col">{{ dmm.createdBy }}</div>
            <div class="col">{{ dmm.createdAt }}</div>
            <div class="col">{{ dmm.updatedBy }}</div>
            <div class="col">{{ dmm.updatedAt }}</div>
          </div>
        </li>
      </transition-group>
    </div>
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
            <img src="/EDIH-Thuringia-Pink.png" alt="EDIH pink"
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
import { ref, inject, computed } from 'vue';
import type { DMM } from "../../interfaces/DMM.js"
import SortNumericDown from '../../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';

//filename for language tags
const filename = 'UserDmmView'

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

// ---------------------------------------------------- sort & filter ---------------------------------------------------------------
//order
let isAscending = ref<boolean>(false);
const sortBy = ref('updatedAt');
type OrderIconsType = {
  [key: string]: boolean;
}
const orderedDmms = computed(() => {
  return [...dmms.value].sort((a, b) => {
    let aValue, bValue;
    switch (sortBy.value) {
      case 'akronym':
        aValue = a.akronym.toLowerCase();
        bValue = b.akronym.toLowerCase();
        break;
      case 'createdBy':
        aValue = a.createdBy.toLowerCase();
        bValue = b.createdBy.toLowerCase();
        break;
      case 'createdAt':
        aValue = a.createdAt;
        bValue = b.createdAt;
        break;
      case 'updatedBy':
        aValue = a.updatedBy.toLowerCase();
        bValue = b.updatedBy.toLowerCase();
        break;
      case 'updatedAt':
        aValue = a.updatedAt;
        bValue = b.updatedAt;
        break;
      default:
        aValue = '';
        bValue = '';
    }
    const result = aValue > bValue ? 1 : -1;
    return isAscending.value ? result : -result;
  });
});

const OrderIcons = ref<OrderIconsType>({
  "akronym": false,
  "akronymDown": false,
  "createdBy": false,
  "createdByDown": false,
  "createdAt": false,
  "createdAtDown": false,
  "updatedBy": false,
  "updatedByDown": false,
  "updatedAt": false,
  "updatedAtDown": true,
});

const handleSort = (columnId: string) => {
  Object.keys(OrderIcons.value).forEach((key) => {
    if (key !== columnId && key !== columnId + "Down") {
      OrderIcons.value[key] = false;
    }
  });
  if (!OrderIcons.value[columnId]) {
    OrderIcons.value[columnId] = true;
    OrderIcons.value[columnId + "Down"] = false;
    sortBy.value = columnId;
    isAscending.value = true;
  } else {
    isAscending.value = !isAscending.value;
    OrderIcons.value[columnId] = false;
  }
  OrderIcons.value[columnId + (isAscending.value ? "" : "Down")] = true;
}

//filter
let filterText = ref('');

let filteredDmms = computed(() => {
  if (filterText.value === '') {
    return orderedDmms.value;
  } else {
    const filterLowerCase = filterText.value.toLowerCase();
    return orderedDmms.value.filter(item =>
      (item.akronym?.toLowerCase()).includes(filterLowerCase) ||
      (item.createdFor?.toLowerCase()).includes(filterLowerCase) ||
      (item.createdBy?.toLowerCase()).includes(filterLowerCase) ||
      (item.updatedBy?.toLowerCase()).includes(filterLowerCase)
    );
  }
});

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