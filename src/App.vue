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

const loggedIn = ref(false);

const darkmode: Ref<boolean> = inject('darkmode')|| ref(false);


let router = useRouter();

const logout = () => {
  localStorage.removeItem('userId');
  loggedIn.value = !loggedIn.value;
  router.push({ name: 'login'  })
};

</script>

<template>
  <div :class="{ dark: darkmode }">

    <header>

      <div class="container">
        <div class="row">
          <div id="mouve" class="col">
            <div class="btn-group">
              <button class="btn btn-outline-secondary" @click="$router.push({ name: 'home' })">
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

          <div id="nav" class="col">
            <nav>
              <RouterLink to="/">{{ $t('home.title') }}</RouterLink> |
              <RouterLink to="/survey">{{ $t('SurveyOverview.title') }}</RouterLink> |
              <RouterLink to="/about">{{ $t('about.title') }}</RouterLink>
            </nav>
          </div>

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


<style>
@import "./styles/global.css";

.input-container {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 16px;
    border: 1px solid #919191;
    border-radius: 12px;
}
</style>
