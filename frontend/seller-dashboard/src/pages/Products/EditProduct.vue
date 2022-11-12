<template>
    <div
        class="overlay px-10 sm:px-0  sm:py-0 py-2 z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <div class="space-y-4  sm:h-3/4 h-full sm:w-1/2 w-full  bg-white rounded-md">
            <div class="flex  justify-between items-center px-4 pt-3 ">
                <div></div>
                <button class="p-3 hover:bg-red-800 rounded-lg" @click="() => emits('close')"><svg
                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
            <div class="flex justify-center items-center space-x-0">
                <div
                    class="border-8 rounded-full p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-800">
                    1</div>
                <div class="h-2 w-8 bg-blue-800"></div>
                <div
                    class="border-8 rounded-full p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-800">
                    2</div>
                <div class="h-2 w-8 bg-blue-200"></div>
                <div
                    class="border-8 rounded-full text-gray-600 p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-200">
                    3</div>
                <div class="h-2 w-8 bg-blue-200"></div>
                <div
                    class="border-8 rounded-full text-gray-600 p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-200">
                    4</div>
            </div>
            <div>
                <Form class=" justify-center  bg-white   items-center  px-10" @submit.preventDefault="onSubmit"
                    :validation-schema="schema" v-slot="{ errors }">
                    <div class="space-y-10">
                        <div class="space-y-3">
                            <label>Product Name</label>
                            <!-- <Field name="email" type="text" v-model="email" placeholder="enter your email"
                                class="block w-full h-10 px-5 border-2 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform  border-transparent rounded-lg bg-orange-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                :class="{ 'is-invalid': errors.email }" />
                            <div class="text-red-700">{{ errors.email }}</div> -->
                            <textarea name="" id="" class="w-full h-10 border-2 rounded"></textarea>
                        </div>
                        <div class="space-y-3">
                            <label>About Product</label>
                            <!-- <Field name="password" type="password" v-model="password" placeholder="enter passwpord"
                                class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                :class="{ 'is-invalid': errors.password }" />
                            <div class="text-red-700">{{ errors.password }}</div> -->
                            <textarea name="" class="w-full h-20 border-2 rounded"></textarea>
                        </div>
                        <div>
                            <label for="">Category</label>
                            <select class="w-full h-10 border-1" name="" id="">
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                            </select>
                        </div>
                        <div>
                            <label for="">Sub Category</label>
                            <select class="w-full h-10 border-1" name="" id="">
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                                <option value="">SHoes</option>
                            </select>
                        </div>
                    </div>
                </Form>
            </div>
            <div class="flex pb-2 justify-center items-center "><button class=" px-10 py-3 bg-cyan-700 rounded-lg ">Next</button></div>
        </div>
    </div>
</template>
<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import { ref, onMounted } from 'vue'
import { defineEmits } from 'vue';
// import router from '../router';
// import { UserStore } from '../stores/UserStore';
const email = ref('')
const password = ref('')
const schema = Yup.object().shape({
    email: Yup.string()
        .required('email is required'),
    password: Yup.string()
        .min(3, 'Password must be at least 3 characters')
        .required('Password is required'),
})
const emits = defineEmits(['close', 'delete']);
</script>
<style>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 100;
}
</style>