<template>
  <div>
    <h3>{{ $t(filename + '.h3') }} {{ ExistingUser?.name }}</h3>
  </div>

  <br>

  <!-- Informationen über die Organisation  -->

  <h4>{{ $t(filename + '.h4') }} {{ ExistingUser?.organization.name }}</h4>
  <br>

  <div class="row">
    <div class="col">
      <h5>{{ $t(filename + '.OrgaInformations.title') }}</h5>

      <!-- Organisation List  -->
      <div class="leftbox">
        <div class="dma-list">
          <!-- Header  -->
          <div class="row">
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
          <div class="row">
            <transition-group name="list">
              <li v-for="organization in orderedOrganizations" :key="organization._id">
                <div class="row">
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
      </div>

      <br>
      <button class="btn btn-outline-secondary " @click="showInput = !showInput">{{
        $t(filename + '.button.editInformation') }}</button>

      <!-- Input für neue Organisation mit Startnutzer  -->
      <div v-if="showInput" class="overlay">
        <div class="input-container">
          <SignupComp :existingAccount="true" :showLoginLink="false"/>
          <br>
          <div class="button-group">
            <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">{{
              $t(filename + '.button.endInput') }}</button>
            <button class="btn btn-outline-secondary custom-button2" @click="showInput = false;">{{
              $t(filename + '.button.createOrganization') }}</button>
          </div>
        </div>
      </div>
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
    const aValue = a.organization.name;
    const bValue = b.organization.name;
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

let order = ref<keyof any>('updatedAt');
let isAscending = ref<boolean>(true);

//Order Logik
const handleSort = (columnId: string) => {
  Object.keys(OrderIcons.value).forEach((key) => {
    if (key !== columnId && key !== columnId + "Down") {
      OrderIcons.value[key] = false;
    }
  });
  if (!OrderIcons.value[columnId]) {
    OrderIcons.value[columnId] = true;
    order.value = columnId;
    isAscending.value = true;
  }
  else if (OrderIcons.value[columnId] && !OrderIcons.value[columnId + "Down"]) {
    OrderIcons.value[columnId + "Down"] = true;
    order.value = columnId;
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

</style>