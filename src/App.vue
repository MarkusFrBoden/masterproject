<template>
  <div :class="{ dark: darkmode }">

    <!-- define header with buttons from all pages  -->
    <!-- navigation buttons  -->
    <header>
      <div class="container">
        <div class="row">
          <div id="mouve" class="col">
            <div class="btn-group">
              <button class="btn btn-outline-secondary" @click="$router.push({ name: type + 'Home' })">
                <HouseWithDoor />
              </button>
              <button class="btn btn-outline-secondary" @click="$router.go(-1)">
                <ArrowLeftCircle />
              </button>
              <button class="btn btn-outline-secondary" @click="$router.go(1)">
                <ArrowRightCircle />
              </button>
            </div>
          </div>

          <!-- router links  -->
          <div id="nav" class="col">
            <nav>
              <router-link :to="{ name: type + 'Home' }">{{ $t(type + 'HomeView.title') }}</router-link> |
              <router-link :to="{ name: type + 'Dma' }">{{ $t('DmaView.title') }}</router-link> |
              <router-link :to="{ name: type + 'Dmm' }">{{ $t('DmmView.title') }}</router-link>
            </nav>
          </div>

          <!-- login/logout and darkmode buttons -->
          <div id="logout" class="col">
            <div class="btn-group">
              <button class="btn btn-outline-secondary" @click="darkmode = !darkmode">
                <BrightnessHigh />
              </button>
              <select class="btn btn-outline-secondary" v-model="$i18n.locale">
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
              <button class="btn btn-outline-secondary" @click="logout">
                <div v-if="loggedIn">
                  <BoxWithRightArrowOut />
                </div>
                <div v-else>
                  <BoxWithRightArrowIn />
                </div>

              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

      <RouterView />

  </div>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, inject, type Ref } from 'vue';
import ArrowLeftCircle from './components/icons/ArrowLeftCircle.vue';
import ArrowRightCircle from './components/icons/ArrowRightCircle.vue';
import BrightnessHigh from './components/icons/BrightnessHigh.vue';
import BoxWithRightArrowOut from './components/icons/BoxWithRightArrowOut.vue';
import BoxWithRightArrowIn from './components/icons/BoxWithRightArrowIn.vue';
import HouseWithDoor from './components/icons/HouseWithDoor.vue';
import { useRouter } from 'vue-router';

//use global variable darkmode for all pages
const darkmode: Ref<boolean> = inject('darkmode') || ref(false);

//use logged in organization for router
const type = ref<string>();
const typefunkction = () => {
  if (localStorage.getItem('organizationName') === 'EDIH Thuringia') {
    type.value = 'Edih'
  } else {
    type.value = 'User'
  };
};
typefunkction();

//login is required
const loggedIn = ref(false);

//create logout
let router = useRouter();
const logout = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('organizationName');
  loggedIn.value = !loggedIn.value;
  router.push({ name: 'login' });
  setTimeout(async () => {
    location.reload();
  }, 10);
};

</script>

<style>
@import "./styles/global.css";
</style>
