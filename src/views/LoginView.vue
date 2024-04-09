<template>
    <div class="user-login-view">
        <div v-if="existingAccount === true">
            <LoginForm :existingAccount="existingAccount" @updateExistingAccount="updateExistingAccount"/> 
        </div>
        <div v-else>
            <SignupForm :existingAccount="existingAccount" @updateExistingAccount="updateExistingAccount"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

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
  backdrop-filter: blur(10px);
  }
</style>