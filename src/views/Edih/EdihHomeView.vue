<template>
  <div>
    <h3>{{ $t(filename + '.h3') }} {{ ExistingUser?.name }}</h3>
  </div>

  <br>

  <!-- Informationen über die Organisation  -->

  <h4>{{ $t(filename + '.h4') }} {{ ExistingUser?.organization.name }}</h4>
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
                  <div class="delete-selected">{{$t(filename + '.deleteInput.delete') }}</div>
                  </button>
            </div>
        </div>
    </div>

  <div class="row">
    <div class="col">
      <h5>{{ $t(filename + '.OrgaInformations.title') }}</h5>

      <!-- Organisation List  -->
      <div class="leftbox">
        <div class="dma-list">
          <!-- Header  -->
          <div class="row">
            <div v-if="showDeleteOptions" class="col">
                <button class="custom-button">
                    <b>{{ $t(filename + '.OrgaInformations.list.column0') }}</b>
                </button>
            </div>
            <div class="col" id="name">
              <button class="custom-button" @click="handleSort('name')">
                <b>{{ $t(filename + '.OrgaInformations.list.column1') }}</b>
                <div v-if="OrderIcons.name" class="sort-icon">
                  <SortAlphaDown v-if="!OrderIcons.nameDown" />
                  <SortAlphaDownAlt v-if="OrderIcons.nameDown" />
                </div>
              </button>
            </div>
            <div class="col" id="contactMail">
              <button class="custom-button" @click="handleSort('contactMail')">
                <b>{{ $t(filename + '.OrgaInformations.list.column2') }}</b>
                <div v-if="OrderIcons.contactMail" class="sort-icon">
                  <SortAlphaDown v-if="!OrderIcons.contactMailDown" />
                  <SortAlphaDownAlt v-if="OrderIcons.contactMailDown" />
                </div>
              </button>
            </div>
            <div class="col" id="dmaStatus">
              <button class="custom-button" @click="handleSort('dmaStatus')">
                <b>{{ $t(filename + '.OrgaInformations.list.column3') }}</b>
                <div v-if="OrderIcons.dmaStatus" class="sort-icon">
                  <SortAlphaDown v-if="!OrderIcons.dmaStatusDown" />
                  <SortAlphaDownAlt v-if="OrderIcons.dmaStatusDown" />
                </div>
              </button>
            </div>
          </div>
          <!-- Inhalt  -->
            <transition-group name="list">
              <li v-for="organization in orderedOrganizations" :key="organization._id">
                <div class="row">
                  <div v-if="showDeleteOptions" class="col">
                        <input type="checkbox" v-model="selectedItems"
                            :value="{_id: organization._id}" />
                    </div>
                  <div class="col">
                    {{ organization._id }}
                    <!-- <RouterLink :to="{ name: 'EdihOrganizationDetails', params: { id: organization._id?.toString() } }">
                        <a href="">{{ organization.name }}</a>
                    </RouterLink> -->
                  </div>
                  <div class="col">{{ organization.organization.contactPerson.email }}</div>
                  <div class="col">{{ organization.organization.euDmaStatus }}</div>
                </div>
              </li>
            </transition-group>
          
        </div>
      </div>

      <br>
      <button class="btn btn-outline-secondary " @click="showInput = !showInput">{{
        $t(filename + '.button.editInformation') }}</button>
      <button class="btn btn-outline-secondary" v-if="selectedItems.length > 0"
            @click="selectedItems = []; showDeleteOptions = !showDeleteOptions">
            {{ $t(filename + '.button.exitDelete') }}
        </button>
      <!-- Input für neue Organisation mit Startnutzer  -->
      <div v-if="showInput" class="overlay">
        <div class="input-container">
          <SignupComp :existingAccount="true" :showLoginLink="false"/>
          <br>
          <div class="button-group">
            <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">{{
              $t(filename + '.button.endInput') }}</button>
          </div>
        </div>
      </div>

      <!-- Button Organisation und Nutzer löschen  -->
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
    <div class="rightbox">
      <h6>{{ $t(filename + '.DmaInformations.overview.title') }}</h6>
      Übersicht über Anzahl durchgeführter DMAs auf T0, T1, T2 und weiterer
      <br><br><br><br><br><br><br>
    </div>
    <br>
    <div class="rightbox">
      <h6>{{ $t(filename + '.DmaInformations.lastDma.title') }}</h6>
      Liste mit den letzten drei DMA
      <br><br><br><br>
    </div>
  </div>
  </div>


</template>

<script setup lang="ts">
import SortAlphaDown from '../../components/icons/SortAlphaDown.vue';
import SortAlphaDownAlt from '../../components/icons/SortAlphaDownAlt.vue';
import { ref, inject, computed } from 'vue';
import type { User } from "../../interfaces/User.js"
import SignupComp from '../../components/SignupComp.vue';

const filename = 'EdihHomeView'


//Get Start Data
const api = inject('api') as any;
let ExistingUser = ref<User>();
let UserId = localStorage.getItem('userId');

const getUser = async () => {
  try {
    const response = await api.get('/UserById/' + UserId);
    ExistingUser.value = response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
getUser();

let organizations = ref<any>([]);
const getOrganizations = async () => {
  try {
    const response = await api.get('/OrganizationOverview');
    organizations.value = response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
getOrganizations();

//Sort List
const orderedOrganizations = computed(() => {
  return [...organizations.value].sort((a, b) => {
    let aValue, bValue;
    switch (sortBy.value) {
      case 'name':
        aValue = a.organization.name;
        bValue = b.organization.name;
        break;
      case 'contactMail':
        aValue = a.organization.contactPerson.email;
        bValue = b.organization.contactPerson.email;
        break;
      case 'dmaStatus':
        aValue = a.organization.euDmaStatus;
        bValue = b.organization.euDmaStatus;
        break;
    }
    const result = aValue > bValue ? 1 : -1;
    return isAscending.value ? result : -result;
  });
});

type OrderIconsType = {
  [key: string]: boolean;
}

const OrderIcons = ref<OrderIconsType>({
  "name": false,
  "nameDown": false,
  "contactMail": false,
  "contactMailDown": false,
  "dmaStatus": false,
  "dmaStatusDown": false
});

let isAscending = ref<boolean>(true);
const sortBy = ref('name');

//Order Logik
const handleSort = (columnId: string) => {
  Object.keys(OrderIcons.value).forEach((key) => {
    if (key !== columnId && key !== columnId + "Down") {
      OrderIcons.value[key] = false;
    }
  });
  if (!OrderIcons.value[columnId]) {
    OrderIcons.value[columnId] = true;
    sortBy.value = columnId;
    isAscending.value = true;
  }
  else if (OrderIcons.value[columnId] && !OrderIcons.value[columnId + "Down"]) {
    OrderIcons.value[columnId + "Down"] = true;
    sortBy.value = columnId;
    isAscending.value = false;
  }
  else {
    OrderIcons.value[columnId] = false;
    OrderIcons.value[columnId + "Down"] = false;
    isAscending.value = false;
  }
}
handleSort('name');

//Create Organization and User
let showInput = ref(false);


//Delete Organization and User
interface deleteItems {
    _id: string;
}

let selectedItems = ref<deleteItems[]>([])
let showDeleteOptions = ref(false);
let showDeleteQuestion = ref(false);
const deleteSelectedItems = async () => {
    try {
        const IDs = selectedItems.value.map(item => item._id);
        const response = await api.post('/deleteMultipleOrganizations', { orgaNames: IDs });
        getOrganizations();
        showDeleteQuestion.value = false;
        showDeleteOptions.value = false;
        selectedItems.value = [];
    } catch (error) {
        console.error('Error deleting Organization:', error);
    }
};


</script>

<style scoped>
.data {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.dark .data {
  background: #020b3d;
}

.input-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 16px;
  border: 1px solid #919191;
  border-radius: 12px;
  width: 800px;
  height: 800px;
}

.dark .input-container {
  background: #16171d;
}

.input-container input {
  margin-bottom: 8px;
  border: 1px solid #919191;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  overflow-y: auto;
}

.custom-button {
  color: black !important;
  background-color: #ffffff !important;
}

.custom-button2 {
  color: black !important;
  background-color: #eceaea !important;
}

.custom-button2:hover {
  color: black !important;
  background-color: #858484 !important;
}

.dark .custom-button,
.dark .custom-button2 {
  color: #72bbff !important;
  background-color: #020b3d !important;
}

.sort-icon {
  display: inline-block;
  margin-left: 5px;
  vertical-align: middle;
}

.leftbox {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  padding-left: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  margin-right: 15px;
  text-align: left
}


.rightbox {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  padding-left: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 15px;
  margin-right: 40px;
  text-align: left
}

.dark .leftbox,
.dark .rightbox {
  background: #020b3d;
}

.leftbox h6,
.rightbox h6 {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: bold;
}

.dma-list li {
  list-style-type: none;
  background: rgba(214, 206, 206, 0.692) !important;
  padding: 16px;
  margin: 5px 0;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(43, 42, 42, 0.1);
  text-align: left;
}

.dark .dma-list li {
  list-style-type: none;
  background: rgba(54, 48, 95, 0.692) !important;
}

.list-move {
  transition: all 0.5s;
}

.delete-selected {
    color: rgb(214, 69, 69);
}
</style>