<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, inject} from 'vue';
import { useDark } from "@vueuse/core";
import HouseWithDoor from '@/components/icons/HouseWithDoor.svg';
import ArrowLeftCircle from '@/components/icons/ArrowLeftCircle.svg';
import ArrowRightCircle from '@/components/icons/ArrowRightCircle.svg';
import BrightnessHigh from '@/components/icons/BrightnessHigh.svg';
import BoxWithRightArrowOut from '@/components/icons/BoxWithRightArrowOut.svg';
import BoxWithRightArrowIn from '@/components/icons/BoxWithRightArrowIn.svg';

const loggedIn = ref(false);
const isDark = useDark();
const darkmode = inject('darkmode');

</script>

<template>
  <div :class="{ dark: isDark }">

    <header>

      <div class="container">
        <div class="row">
          <div id="mouve" class="col">
            <div class="btn-group">
              <button class="btn btn-outline-secondary" @click="$router.push({ name: 'home' })">
                <img :src="HouseWithDoor" alt="HouseWithDoor" />
              </button>
              <button class="btn btn-outline-secondary" @click="$router.go(-1)">
                <img :src="ArrowLeftCircle" alt="Arrow Left Circle" />
              </button>
              <button class="btn btn-outline-secondary" @click="$router.go(1)">
                <img :src="ArrowRightCircle" alt="Arrow Right Circle" />
              </button>
            </div>
          </div>

          <div id="nav" class="col">
            <nav>
              <RouterLink to="/">{{ $t('home.title') }}</RouterLink> |
              <RouterLink to="/survey">{{ $t('survey.title') }}</RouterLink> |
              <RouterLink to="/about">{{ $t('about.title') }}</RouterLink>
            </nav>
          </div>

          <div id="logout" class="col">
            <div class="btn-group">
              <button class="btn btn-outline-secondary" @click="isDark = !isDark; darkmode = !darkmode">
                <img :src="BrightnessHigh" alt="Brightness High" />
              </button>
              <select class="btn btn-outline-secondary">
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
              <button class="btn btn-outline-secondary" @click="loggedIn = !loggedIn">
                <div v-if="loggedIn">
                  <img :src="BoxWithRightArrowOut" alt="Box With Right Arrow In" />
                </div>
                <div v-else>
                  <img :src="BoxWithRightArrowIn" alt="Box With Right Arrow Out" />
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
</style>
