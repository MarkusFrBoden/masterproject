<template>
    <!-- login form  -->
    <form>
        <label>{{ $t(filename + '.email') }}</label>
        <input type="email" required v-model="email">

        <label>{{ $t(filename + '.password') }}:</label>
        <input type="password" required v-model="password">
        <div v-if="loginError" class="error">{{ loginError }}</div>
    </form>
    <!-- link to signup  -->
    <div class="submit">
        <button @click="getUser">{{ $t(filename + '.login') }}</button>
        <br><br>
        <a href="#" @click="noAccount">{{ $t(filename + '.newHere') }}</a>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

//filename for language tags
const filename = 'LoginComp'

//enable api via global variable
const api = inject('api') as any;

//accept props from LoginView with existingAccount
let props = defineProps({
    existingAccount: {
        type: Boolean,
        required: true
    }
})

//accept and trigger emit from LoginView with updateExistingAccount
const emit = defineEmits<{
    updateExistingAccount: [value: boolean]
}>()
const noAccount = () => {
    emit("updateExistingAccount", !props.existingAccount);
};

//get user data and login to edih or user side and set local Storage
let email = ref('');
let password = ref('');
let loginError = ref('');
let router = useRouter();
const getUser = async () => {
    try {
        const response = await api.get('/UserByMailAndPassword/' + email.value + '/' + password.value);
        if (response.data) {
            localStorage.setItem('userId', response.data._id);
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('organizationName', response.data.organization.name);
            if (response.data.organization.name === "EDIH Thuringia") {
                router.push({ name: 'EdihHome' })
            } else {
                router.push({ name: 'UserHome' })
            }
            setTimeout(async () => {
                if (response.data.organization.name === "EDIH Thuringia") {
                    location.reload();
                }
            }, 10);
        } else {
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

.dark form {
    background-color: #020b3d;
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

.dark input,
.dark select {
    background-color: #020b3d;
    color: #72bbff;
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