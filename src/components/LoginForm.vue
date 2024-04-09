<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="loginError" class="error">{{ loginError }}</div>
    </form>
    <div class="submit">
            <button @click="getUser">Login</button>
            <br><br>
            <a href="#" @click="noAccount">New here? Create an Account</a>
        </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

//Accept Props
let props = defineProps({
    existingAccount: {
      type: Boolean,
      required: true
    }
  })

//Component Emits
const emit = defineEmits<{
    updateExistingAccount: [value: boolean]
}>()
const noAccount = () => {
    emit("updateExistingAccount", !props.existingAccount);
};

//Login Logik
let user = ref([]);
let email = ref('');
let password = ref('');
let loginError = ref('');
let router = useRouter();

//Get data
const api = inject('api') as any;
const getUser = async () => {
    try {
        const response = await api.get('/UserByMailAndPassword/'+email.value+'/'+password.value);
        user.value = response.data;
        if(user.value){
            router.push({ name: 'home' })
        }else{
            loginError.value = 'Your Email or your Password is wrong';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

</script>


<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
}
</style>