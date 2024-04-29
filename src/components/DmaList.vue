<template>
    <!-- dma list, filtered and sorted  -->
    <div v-if="filteredDmas.length > 0">
        <br>
        <!-- input for filter  -->
        <input v-model="filterText" type="text" placeholder="Filter" class="custom-input" />

        <div class="container">
            <div class="list">
                <!-- header with sort logic part  -->
                <div class="row">
                    <div class="col" v-if="showDeleteOptions">
                        <button class="flex-container">
                            <b>{{ $t(filename + '.list.column0') }}</b>
                        </button>
                    </div>
                    <div class="col" id="euDMA">
                        <button class="flex-container" @click="handleSort('euDMA')">
                            <b>{{ $t(filename + '.list.column1') }}</b>
                            <div v-if="OrderIcons.euDMA || OrderIcons.euDMADown">
                                <SortAlphaDown v-if="OrderIcons.euDMA" />
                                <SortAlphaDownAlt v-else />
                            </div>
                        </button>
                    </div>
                    <div class="col" id="title">
                        <button class="flex-container" @click="handleSort('title')">
                            <b>{{ $t(filename + '.list.column2') }}</b>
                            <div v-if="OrderIcons.title || OrderIcons.titleDown">
                                <SortAlphaDown v-if="!OrderIcons.titleDown" />
                                <SortAlphaDownAlt v-else />
                            </div>
                        </button>
                    </div>
                    <div class="col" id="createdFor" v-if="showOrganization">
                        <button class="flex-container" @click="handleSort('createdFor')">
                            <b>{{ $t(filename + '.list.column3') }}</b>
                            <div v-if="OrderIcons.createdFor || OrderIcons.createdForDown">
                                <SortAlphaDown v-if="!OrderIcons.createdForDown" />
                                <SortAlphaDownAlt v-else />
                            </div>
                        </button>
                    </div>
                    <div class="col" id="createdBy">
                        <button class="flex-container" @click="handleSort('createdBy')">
                            <b>{{ $t(filename + '.list.column4') }}</b>
                            <div v-if="OrderIcons.createdBy || OrderIcons.createdByDown">
                                <SortAlphaDown v-if="!OrderIcons.createdByDown" />
                                <SortAlphaDownAlt v-else />
                            </div>
                        </button>
                    </div>
                    <div class="col" id="createdAt">
                        <button class="flex-container" @click="handleSort('createdAt')">
                            <b>{{ $t(filename + '.list.column5') }}</b>
                            <div v-if="OrderIcons.createdAt || OrderIcons.createdAtDown">
                                <SortNumericDown v-if="!OrderIcons.createdAtDown" />
                                <SortNumericDownAlt v-else />
                            </div>
                        </button>
                    </div>
                    <div class="col" id="updatedBy">
                        <button class="flex-container" @click="handleSort('updatedBy')">
                            <b>{{ $t(filename + '.list.column6') }}</b>
                            <div v-if="OrderIcons.updatedBy || OrderIcons.updatedByDown">
                                <SortAlphaDown v-if="!OrderIcons.updatedByDown" />
                                <SortAlphaDownAlt v-else />
                            </div>
                        </button>
                    </div>
                    <div class="col" id="updatedAt">
                        <button class="flex-container" @click="handleSort('updatedAt')">
                            <b>{{ $t(filename + '.list.column7') }}</b>
                            <div v-if="OrderIcons.updatedAt || OrderIcons.updatedAtDown">
                                <SortNumericDown v-if="!OrderIcons.updatedAtDown" />
                                <SortNumericDownAlt v-else />
                            </div>
                        </button>
                    </div>
                </div>

                <!-- data with transition  -->
                <transition-group name="list">
                    <li v-for="dma in filteredDmas" :key="dma._id?.toString()">
                        <div class="row">
                            <div class="col" v-if="showDeleteOptions">
                                <input type="checkbox" v-model="localItems"
                                    :value="{ _id: dma._id, title: dma.title, createdFor: dma.createdFor }" />
                            </div>
                            <div class="col" v-if="dma.euDMA !== 'false' || dma.euDMA !== '0'">
                                <div v-if="dma.euDMA === 'T0'">
                                    <img class="image" src="../assets/dma_T0.png" alt="T0-Batch">
                                </div>
                                <div v-else-if="dma.euDMA === 'T1'">
                                    <img class="image" src="../assets/dma_T1.png" alt="T1-Batch">
                                </div>
                                <div v-else-if="dma.euDMA === 'T2'">
                                    <img class="image" src="../assets/dma_T2.png" alt="T2-Batch">
                                </div>
                            </div>
                            <div class="col" v-else>
                            </div>
                            <div class="col">
                                <RouterLink :to="{ name: 'EdihDmaDetails', params: { id: dma._id?.toString() } }">
                                    <a href="">{{ dma.title }}</a>
                                </RouterLink>
                            </div>
                            <div class="col" v-if="showOrganization">
                                {{ dma.createdFor }}
                            </div>
                            <div class="col">{{ dma.createdBy }}</div>
                            <div class="col">{{ dma.createdAt }}</div>
                            <div class="col">{{ dma.updatedBy }}</div>
                            <div class="col">{{ dma.updatedAt }}</div>
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
import type { DMA } from "../interfaces/DMA.js"
import type { deleteItems } from "../interfaces/deleteItems.js"
import SortNumericDown from '../components/icons/SortNumericDown.vue';
import SortNumericDownAlt from '../components/icons/SortNumericDownAlt.vue';
import SortAlphaDown from '../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../components/icons/SortAlphaDownAlt.vue';

//filename for language tags
const filename = 'DmaView';

//accept props from calling views
let props = defineProps({
    showDeleteOptions: {
        type: Boolean,
        required: true
    },
    dmas: {
        type: Array as () => Array<DMA>,
        required: true
    },
    showOrganization: {
        type: Boolean,
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
let isAscending = ref<boolean>(true);
const sortBy = ref('updatedAt');
type OrderIconsType = {
    [key: string]: boolean;
}

const orderedDmas = computed(() => {
    return [...props.dmas].sort((a, b) => {
        let aValue, bValue;
        switch (sortBy.value) {
            case 'title':
                aValue = a.title.toLowerCase();
                bValue = b.title.toLowerCase();
                break;
            case 'createdFor':
                aValue = a.createdFor.toLowerCase();
                bValue = b.createdFor.toLowerCase();
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
    "title": false,
    "titleDown": false,
    "createdFor": false,
    "createdForDown": false,
    "createdBy": false,
    "createdByDown": false,
    "createdAt": false,
    "createdAtDown": false,
    "updatedBy": false,
    "updatedByDown": false,
    "updatedAt": false,
    "updatedAtDown": false,
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
handleSort('updatedAtDown');

//filter
let filterText = ref('');

let filteredDmas = computed(() => {
    if (filterText.value === '') {
        return orderedDmas.value;
    } else {
        const filterLowerCase = filterText.value.toLowerCase();
        return orderedDmas.value.filter(item =>
            (item.title?.toLowerCase()).includes(filterLowerCase) ||
            (item.createdFor?.toLowerCase()).includes(filterLowerCase) ||
            (item.createdBy?.toLowerCase()).includes(filterLowerCase) ||
            (item.updatedBy?.toLowerCase()).includes(filterLowerCase)
        );
    }
});

</script>

<style scoped>
.image {
    width: 70px;
    height: 70px;
    margin-left: 10px;
}

.col {
    width: 140px;
}
</style>