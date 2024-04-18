<template>
    <form @submit.prevent="handleSubmit">

        <!-- signup form  -->
       <label>{{ $t(filename + '.organization') }}</label>
        <input type="text" required v-model="organization">
        <div v-if="organizationError" class="error">{{ organizationError }}</div>

        <label>{{ $t(filename + '.username') }}</label>
        <input type="text" required v-model="name">

        <label>{{ $t(filename + '.email') }}</label>
        <input type="email" required v-model="email" >
        <div v-if="emailError" class="error">{{ emailError }}</div>

        <label>{{ $t(filename + '.password') }}</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>{{ $t(filename + '.accept') }}<a href="#">{{ $t(filename + '.terms') }}</a></label>
        </div>

        <!-- message that user was created  -->
        <div v-if="showPopup" class="overlay">
            <div class="popup">
                <p>{{ $t(filename + '.newUser') }}</p>
            </div>
        </div>
    </form>

    <!-- submit button  -->
    <div class="submit">
        <button @click="handleSubmit">{{ $t(filename + '.button.create') }}</button>
        <br><br>
        <div v-if="showLoginLink">
            <a href="#" @click="Account">{{ $t(filename + '.button.existingUser') }}</a>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import type { User } from "../interfaces/User.js"

//filename for language tags
const filename = 'SignupComp'

//enable api via global variable
const api = inject('api') as any;

//show and hide elements
let showPopup = ref(false);

//accept props from LoginView
let props = defineProps({
    existingAccount: {
        type: Boolean,
        required: true
    },
    showLoginLink: {
        type: Boolean,
        required: true
    }
})

//accept and trigger emit from LoginView with updateExistingAccount
const emit = defineEmits<{
    updateExistingAccount: [value: boolean]
}>()
const Account = () => {
    emit("updateExistingAccount", !props.existingAccount);
    console.log("Account ausgeführt")
};

//check for existing email
let ExistingUser = ref<any[]>([]);
const getUser = async () => {
    try {
        const response = await api.get('/UserByMail/' + email.value);
        ExistingUser.value = response.data;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};

//check for existing organization
let ExistingOrganization = ref<any[]>([]);
const getOrganisation = async () => {
    try {
        const response = await api.get('/OrganizationByName/' + organization.value);
        ExistingOrganization.value = response.data;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};

//crate new user and organization
let name = ref('');
let email = ref('');
let emailError = ref('');
let password = ref('');
let passwordError = ref('');
let terms = ref(true);
let organization = ref('');
let organizationError = ref('');

const CreateAccount = async () => {
    try {
        let PostUser = ref<User>({
            name: name.value,
            email: email.value,
            password: password.value,
            organization: {
                name: organization.value,
                identificationNumber: "",
                contactPerson: {
                    name: name.value,
                    role: "",
                    email: email.value,
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
                secondarySektor: "",
                euDmaStatus:"start"
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
    organizationError.value = '';
    await getUser(); 
    await getOrganisation();
    if (ExistingUser.value) {
        emailError.value = 'A User with this email exists';
    } else if(ExistingOrganization.value){
        organizationError.value = 'This Organization already exists';
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