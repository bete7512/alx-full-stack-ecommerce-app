<template>
    <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
        <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
            <div class="flex items-center justify-center">
                <span class="text-2xl font-semibold text-gray-700">Login</span>
            </div>
            <Form class=" justify-center space-y-6 bg-white   items-center  p-b-10 px-10"
                @submit.preventDefault="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="space-y-10">
                    <div class="space-y-3">
                        <label>Email</label>
                        <Field name="email" type="text" v-model="email" placeholder="enter your email"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.email }" />
                        <div class="text-red-700">{{ errors.email }}</div>
                    </div>
                    <div class="space-y-3">
                        <label>Password</label>
                        <Field name="password" type="password" v-model="password" placeholder="enter passwpord"
                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            :class="{ 'is-invalid': errors.password }" />
                        <div class="text-red-700">{{ errors.password }}</div>
                    </div>
                </div>
                <div class="text-red-600">{{ loginreturn }}</div>
                <div class="pt-2">
                    <button type="submit"
                        class="flex items-center justify-center w-full px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <div v-if="loginprocess" class="text-2xl">
                            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            signing...
                        </div>
                        <div v-else>
                            Sign in
                        </div>
                    </button>
                    <div class="text-blue-900">
                        <router-link to="/signup">Signup</router-link>
                        <br>
                        <router-link to="/login">Forgot password</router-link>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>
<script setup >
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { ref, onMounted } from 'vue'
import { defineEmits } from 'vue';
import router from '../router';
import { UserStore } from '../stores/UserStore';
const email = ref('')
const password = ref('')
const schema = Yup.object().shape({
    email: Yup.string()
        .required('email is required'),
    password: Yup.string()
        .min(3, 'Password must be at least 3 characters')
        .required('Password is required'),
})
const user = UserStore()
const loginreturn = ref('')
const loginprocess = ref(false)
const onSubmit = async () => {
    console.log('submit')
    loginprocess.value = true
    try {
        loginreturn.value = await user.login(email.value, password.value)
        loginprocess.value = false
    }
    catch (error) {
        loginprocess.value = false
        console.log(error);
        loginreturn.value = error.message
    }
}
</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>