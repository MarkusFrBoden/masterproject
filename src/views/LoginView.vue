<template>
    <!-- differ between login and signup  -->
    <div class="user-login-view">
        <div v-if="existingAccount === true">
            <LoginComp :existingAccount="existingAccount" @updateExistingAccount="updateExistingAccount"/> 
        </div>
        <div v-else>
            <SignupComp :existingAccount="existingAccount" :showLoginLink="true" @updateExistingAccount="updateExistingAccount"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginComp from '../components/LoginComp.vue';
import SignupComp from '../components/SignupComp.vue';

//give prop existingAccount and emit updateExistingAccout to children
let existingAccount = true;
const updateExistingAccount = (newValue: boolean)=> {
    existingAccount = newValue;
}

</script>

<style scoped>
.user-login-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  backdrop-filter: blur(2px);
  }
</style>