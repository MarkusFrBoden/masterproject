<template>
  <div>
    <h3>{{ $t(filename + '.h3') }} {{ currentUserName }}</h3>
  </div>
  <br>
  <h4>{{ $t(filename + '.h4') }} {{ currentUserOrganization }}</h4>
  <br>

  <!-- delete organization interface  -->
  <div v-if="showDeleteQuestion" class="overlay">
    <div class="input-container">
      <h4>{{ $t(filename + '.deleteInput.title') }}</h4>
      <li v-for="item in selectedItems" :key="item._id">
        {{ $t(filename + '.deleteInput.organization') }} {{ item._id }}
      </li>
      <br>
      <div class="button-group">
        <button class="btn btn-outline-secondary" @click="showDeleteQuestion = false;">{{
          $t(filename + '.deleteInput.cancel') }}</button>
        <button class="btn btn-outline-secondary" @click="deleteSelectedItems">
          <div class="delete-selected">{{ $t(filename + '.deleteInput.delete') }}</div>
        </button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        <!-- organization list  -->
        <h5>{{ $t(filename + '.OrgaInformations.title') }}</h5>
        <div class="leftbox">
          <div class="list">
            <!-- header  -->
            <div class="row">
              <div v-if="showDeleteOptions" class="col">
                <button class="custom-button">
                  <b>{{ $t(filename + '.OrgaInformations.list.column0') }}</b>
                </button>
              </div>
              <div class="col" id="name">
                <button class="custom-button" @click="handleSort('name')">
                  <b>{{ $t(filename + '.OrgaInformations.list.column1') }}</b>
                  <div v-if="OrderIcons.name || OrderIcons.nameDown" class="sort-icon">
                    <SortAlphaDown v-if="OrderIcons.name" />
                    <SortAlphaDownAlt v-else />
                  </div>
                </button>
              </div>
              <div class="col" id="contactMail">
                <button class="custom-button" @click="handleSort('contactMail')">
                  <b>{{ $t(filename + '.OrgaInformations.list.column2') }}</b>
                  <div v-if="OrderIcons.contactMail || OrderIcons.contactMailDown" class="sort-icon">
                    <SortAlphaDown v-if="OrderIcons.contactMail" />
                    <SortAlphaDownAlt v-else />
                  </div>
                </button>
              </div>
              <div class="col" id="dmaStatus">
                <button class="custom-button" @click="handleSort('dmaStatus')">
                  <b>{{ $t(filename + '.OrgaInformations.list.column3') }}</b>
                  <div v-if="OrderIcons.dmaStatus || OrderIcons.dmaStatusDown" class="sort-icon">
                    <SortAlphaDown v-if="OrderIcons.dmaStatus" />
                    <SortAlphaDownAlt v-else />
                  </div>
                </button>
              </div>
            </div>
            <!-- content  -->
            <transition-group name="list">
              <li v-for="organization in orderedOrganizations" :key="organization._id">
                <div class="row">
                  <div v-if="showDeleteOptions" class="col">
                    <input type="checkbox" v-model="selectedItems" :value="{ _id: organization._id }" />
                  </div>
                  <div class="col">
                    {{ organization._id }}
                  </div>
                  <div class="col">{{ organization.organization.contactPerson.email }}</div>
                  <div class="col">{{ organization.organization.euDmaStatus }}</div>
                </div>
              </li>
            </transition-group>
          </div>
        </div>
        <br>

        <!-- button and interface create organization and user -->
        <button class="btn btn-outline-secondary " @click="showInput = !showInput">{{
          $t(filename + '.button.editInformation') }}</button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0"
          @click="selectedItems = []; showDeleteOptions = !showDeleteOptions">
          {{ $t(filename + '.button.exitDelete') }}
        </button>
        <div v-if="showInput" class="overlay">
          <div class="input-container">
            <SignupComp :existingAccount="true" :showLoginLink="false" />
            <br>
            <div class="button-group">
              <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">{{
                $t(filename + '.button.endInput') }}</button>
            </div>
          </div>
        </div>

        <!-- button and interface delete organization and user  -->
        <button class="btn btn-outline-secondary" v-if="selectedItems.length === 0"
          @click="showDeleteOptions = !showDeleteOptions">
          <div v-if="!showDeleteOptions">{{ $t(filename + '.button.deleteOrga') }}</div>
          <div v-else> {{ $t(filename + '.button.exitDelete') }}</div>
        </button>
        <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0" @click="showDeleteQuestion = true">
          <div class="delete-selected">
            {{ $t(filename + '.button.deleteSelected') }}
          </div>
        </button>
      </div>

      <!-- Dashboard Durchgeführte DMAs  -->
      <div class="col">
        <h5>{{ $t(filename + '.DmaInformations.title') }}</h5>
        <div class="rightbox" >
          <h6>{{ $t(filename + '.DmaInformations.overview.title') }}</h6>
          {{ $t(filename + '.DmaInformations.title2') }}
          <div class="container" >
            <div class="row">
              <div class="col">
                <img class="image" src="../../assets/dma_T0.png" alt="T0-Batch">
              </div>
              <div class="col">
                <br>
                <span style="font-size: 50px; color:  #41B883;"> {{ dmaTValues.T0 }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <img class="image" src="../../assets/dma_T1.png" alt="T1-Batch">
              </div>
              <div class="col">
                <br>
                <span style="font-size: 50px; color:  #41B883;"> {{ dmaTValues.T1 }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <img class="image" src="../../assets/dma_T2.png" alt="T2-Batch">
              </div>
              <div class="col">
                <br>
                <span style="font-size: 50px; color:  #41B883;"> {{ dmaTValues.T2 }}</span>
              </div>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';
import { ref, inject, computed } from 'vue';
import SignupComp from '../../components/SignupComp.vue';

//filename for language tags
const filename = 'EdihHomeView'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);
let showInput = ref(false);

//get start data
let currentUserName = localStorage.getItem('userName');
let currentUserOrganization = localStorage.getItem('organizationName');
let organizations = ref<any>([]);
const getOrganizations = async () => {
  try {
    const response = await api.get('/OrganizationOverview');
    organizations.value = response.data;
  } catch (err) {
    console.error('error while fetching data:', err);
  }
};
getOrganizations();

let dmaTValues = ref<any>([]);
const getdmaTValues = async () => {
  try {
    const response = await api.get('/DmaTValues');
    dmaTValues.value = response.data;
  } catch (err) {
    console.error('error while fetching data:', err);
  }
};
getdmaTValues();



//delete user and organization
interface deleteItems {
  _id: string;
}

let selectedItems = ref<deleteItems[]>([])
const deleteSelectedItems = async () => {
  try {
    const IDs = selectedItems.value.map(item => item._id);
    const response = await api.post('/deleteMultipleOrganizations', { orgaNames: IDs });
    getOrganizations();
    showDeleteQuestion.value = false;
    showDeleteOptions.value = false;
    selectedItems.value = [];
  } catch (error) {
    console.error('error while deleting organization:', error);
  }
};

// ---------------------------------------------------- sort ---------------------------------------------------------------
//sort organisation list via buttons
let isAscending = ref<boolean>(true);
const sortBy = ref('name');
type OrderIconsType = {
  [key: string]: boolean;
}

const orderedOrganizations = computed(() => {
  return [...organizations.value].sort((a, b) => {
    let aValue, bValue;
    switch (sortBy.value) {
      case 'name':
        aValue = a.organization.name.toLowerCase();
        bValue = b.organization.name.toLowerCase();
        break;
      case 'contactMail':
        aValue = a.organization.contactPerson.email.toLowerCase();
        bValue = b.organization.contactPerson.email.toLowerCase();
        break;
      case 'dmaStatus':
        aValue = a.organization.euDmaStatus.toLowerCase();
        bValue = b.organization.euDmaStatus.toLowerCase();
        break;
    }
    const result = aValue > bValue ? 1 : -1;
    return isAscending.value ? result : -result;
  });
});

const OrderIcons = ref<OrderIconsType>({
  "name": false,
  "nameDown": false,
  "contactMail": false,
  "contactMailDown": false,
  "dmaStatus": false,
  "dmaStatusDown": false
});

//handle table-header to sort list
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

handleSort('name');

</script>

<style scoped>
/* Custom list */
.list li {
  background: rgba(214, 206, 206, 0.692) !important;
}

.dark .list li {
  list-style-type: none;
  background: rgba(54, 48, 95, 0.692) !important;
}

.image {
  max-width: 100px;
  max-height: 100px;
  margin: 10px;
}

.rightbox{
  min-height: 500px;
}
.leftbox{
  min-height: 500px;
}
</style>