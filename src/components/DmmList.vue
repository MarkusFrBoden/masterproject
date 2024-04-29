<template>
    <div v-if="filteredDmms.length > 0">

        <!-- input for filter  -->
        <input v-model="filterText" type="text" placeholder="Filter" class="custom-input" />

        <!-- dmm list, filtered and sorted  -->
        <!-- header with sort logic part  -->
        <div class="container">
            <div class="list">
                <div class="row">
                    <div v-if="showDeleteOptions" class="col">
                        <button class="flex-container">
                            <b>{{ $t(filename + '.list.column0') }}</b>
                        </button>
                    </div>
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
                            <div v-if="showDeleteOptions" class="col">
                                <input type="checkbox" v-model="localItems"
                                    :value="{ _id: dmm._id, title: dmm.title, createdFor: dmm.createdFor }" />
                            </div>
                            <div class="col">
                                <RouterLink :to="{ name: `${type}DmmDetails`, params: { id: dmm._id?.toString() } }">
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
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import SortNumericDown from '../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../components/icons/SortAlphaDownAlt.vue';
import type { DMM } from '@/interfaces/DMM';
import type { deleteItems } from "../interfaces/deleteItems.js"

//filename for language tags
const filename = 'DmmView';

//accept props from calling views
let props = defineProps({
    showDeleteOptions: {
        type: Boolean,
        required: true
    },
    dmms: {
        type: Array as () => Array<DMM>,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

//update delete Items in Parent
let localItems = ref<deleteItems[]>([]);

const emit = defineEmits<{
  updateselectedItems: [value: deleteItems[]]
}>()

watchEffect(() => {
  emit("updateselectedItems", localItems.value);
});

// ---------------------------------------------------- sort & filter ---------------------------------------------------------------
//order
let isAscending = ref<boolean>(false);
const sortBy = ref('updatedAt');
type OrderIconsType = {
  [key: string]: boolean;
}
const orderedDmms = computed(() => {
  return [...props.dmms].sort((a, b) => {
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

<style scoped></style>