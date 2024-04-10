<template>
    <form @submit.prevent="handleSubmit">
        <div v-if="showPopup" class="overlay">
            <div class="popup">
                <p>Neuer Nutzer wurde angelegt!</p>
            </div>
        </div>

        <label>First Name:</label>
        <input type="text" required v-model="firstname">

        <label>Surname:</label>
        <input type="text" required v-model="surname">

        <label>Email:</label>
        <input type="email" required v-model="email" >
        <div v-if="emailError" class="error">{{ emailError }}</div>

        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label>Organisation:</label>
        <input type="text" required v-model="organization">

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>Accept <a href="#">terms and conditions</a></label>
        </div>
    </form>

    <div class="submit">
        <button @click="handleSubmit">Create an Account</button>
        <br><br>
        <a href="#" @click="Account">You have already an Account?</a>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { User } from "../interfaces/User.js"

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
const Account = () => {
    emit("updateExistingAccount", !props.existingAccount);
    console.log("Account ausgeführt")
};

//Create Account Logik
const api = inject('api') as any;

let ExistingUser = ref<any[]>([]);
let firstname = ref('');
let surname = ref('');
let email = ref('');
let emailError = ref('');
let password = ref('');
let passwordError = ref('');
let terms = ref(true);
let organization = ref('');
let showPopup = ref(false);

const getUser = async () => {
    try {
        const response = await api.get('/UserByMail/' + email.value);
        ExistingUser.value = response.data;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};

const CreateAccount = async () => {
    try {
        let PostUser = ref<User>({
            firstname: firstname.value,
            surname: surname.value,
            email: email.value,
            password: password.value,
            organization: {
                name: organization.value,
                identificationNumber: "",
                contactPerson: {
                    name: "",
                    role: "",
                    email: "",
                    telephone: ""
                },
                website: "",
                type: "",
                size: "",
                address: {
                    street: "",
                    postalcode: "",
                    city: "",
                    country: ""
                },
                PIC: "",
                primarySektor: "",
                secondarySektor: ""
            },
            termsAccepted: terms.value
        });
        const response = await api.post('/User', PostUser.value);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

const showAndHidePopup = () => {
    showPopup.value = true;
    setTimeout(() => {
        showPopup.value = false;
    }, 2000);
};

const handleSubmit = async () => {
    emailError.value = '';
    passwordError.value = '';
    await getUser();
    if (ExistingUser.value) {
        emailError.value = 'A User with this email exists';
    } else {
        passwordError.value = password.value.length > 5 ? '' : 'Password must be at least 6 chars long';
        if (!passwordError.value && !emailError.value) {
            try {
                await CreateAccount();
                showAndHidePopup();
                setTimeout(async () => {
                    Account();
                    location.reload();
                }, 2000);
            } catch (err) {
                console.log(err);
            }
        }
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

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.popup {
    background-color: #2b0cdb;
    color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 60%;
    position: relative;
    top: -50px;
}
</style>