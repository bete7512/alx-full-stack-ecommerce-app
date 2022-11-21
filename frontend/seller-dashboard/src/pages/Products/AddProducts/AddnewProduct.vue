<template>
    <div
        class="overlay px-10 sm:px-0 h-screen sm:py-0 py-2 overflow-scroll z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <div class="space-y-4  my-4 h-auto sm:w-1/2 w-full  bg-white rounded-md">
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
                <div :class="[card1 ? activeClass : inactiveClass]"
                    class="border-8 rounded-full p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-800">
                    1</div>
                <div :class="[card2 ? activeLine : inactiveLine]" class="h-2 w-8 bg-blue-800"></div>
                <div :class="[card2 ? activeClass : inactiveClass]"
                    class="border-8 rounded-full p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-800">
                    1</div>
                <div :class="[card3 ? activeLine : inactiveLine]" class="h-2 w-8 bg-blue-800"></div>
                <div :class="[card3 ? activeClass : inactiveClass]"
                    class="border-8 rounded-full p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-800">
                    3</div>
            </div>
            <div>
                <div class=" justify-center  bg-white py-4  items-center  px-10" @submit.preventDefault="onSubmit">
                    <!-- :validation-schema="schema" v-slot="{ errors }" -->
                    <Card1 v-if="card1"></Card1>
                    <Card2 v-if="card2"></Card2>
                    <Card3 v-if="card3"></Card3>

                </div>
                <!-- {{ product.options }} -->
            </div>
            <div class="flex justify-center items-center">
                <button v-if="card3 && !adding_option" @click="add_options"
                    class="px-4  py-2 bg-amber-600 rounded-lg">Add another
                    options</button>
                <button v-if="card3 && adding_option" @click="add_options"
                    class="px-4  py-2 bg-amber-600 rounded-lg">
                    <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg> adding option
                </button>

            </div>
            <div class="flex pb-2 bottom-0  justify-center space-x-2 items-center ">
                <button v-if="!card1" class=" px-10 py-3 bg-cyan-700 rounded-lg " @click="previous()">Previous</button>
                <button v-if="!card3" class=" px-10 py-3 bg-cyan-700 rounded-lg " @click="next()">Next</button>
                <button v-if="card3 && !adding_product" class=" px-10 py-3 bg-cyan-700 rounded-lg "
                    @click="onSubmit()">Submit</button>
                <button v-if="card3 && adding_product" class=" px-10 py-3 bg-cyan-700 rounded-lg ">
                    <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor" />
                    </svg>
                    adding product
                </button>


            </div>
            <div class="flex justify-center items-center">
            </div>
        </div>
    </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import Card1 from './Card1.vue';
import Card2 from './Card2.vue';
import Card3 from './Card3.vue';
import { ref, onMounted } from 'vue'
import { defineEmits } from 'vue';
import { ProductStore } from '../../../stores/ProductStores';
const activeClass = ref('bg-blue-800 border-blue-800');
const activeLine = ref('');
const inactiveClass = ref('border-blue-200');
const inactiveLine = ref('bg-blue-200');
const card1 = ref(true)
const card2 = ref(false)
const card3 = ref(false)
const product = ProductStore()
const adding_option = ref(false)
const adding_product = ref(false)
const next = () => {
    if (card1.value == true) {
        card1.value = false
        card3.value = false
        card2.value = true
    }
    else if (card2.value == true) {
        card1.value = false
        card2.value = false
        card3.value = true
    }

}
const previous = () => {
    if (card2.value == true) {
        card1.value = true
        card2.value = false
        card3.value = false
    }
    else if (card3.value == true) {
        card1.value = false
        card3.value = false
        card2.value = true
    }

}
const add_options = async () => {
    adding_option.value = true
    await product.add_options()
    card3.value = false
    card2.value = true
    product.o_name = ''
    product.price = ''
    product.difference = ''
    adding_option.value = false

}
// const schema = Yup.object().shape({
//     email: Yup.string()
//         .required('email is required'),
//     password: Yup.string()
//         .min(3, 'Password must be at least 3 characters')
//         .required('Password is required'),
// })
const onSubmit = async () => {
    // await product.add_product()
    adding_product.value = true
    console.log(localStorage.getItem('Apollotoken'));
    let done = await product.insert_product()
    if (done) {
        console.log(done);
        console.log("product succefully added");
    }
    card3.value = false
    card1.value = true
    adding_product.value = false
    // router.push('/dashboard')
}
const emits = defineEmits(['close', 'delete']);
</script>

<style>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 100;
}
</style>