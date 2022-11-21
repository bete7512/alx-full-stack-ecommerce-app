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
                <!-- <div :class="[card3 ? activeLine : inactiveLine]" class="h-2 w-8 bg-blue-800"></div> -->
                <!-- <div :class="[card3 ? activeClass : inactiveClass]"
                    class="border-8 rounded-full p-4 h-8 w-8 flex justify-center items-center text-lg font-extrabold border-blue-800">
                    3</div>                 -->
            </div>
            <div>
                <div class=" justify-center  bg-white py-4  items-center  px-10" @submit.preventDefault="onSubmit"
                >
                <!-- :validation-schema="schema" v-slot="{ errors }" -->
                    <Card1 v-if="card1"></Card1>
                    <Card2 v-if="card2"></Card2>
                    <!-- <Card3 v-if="card3"></Card3> -->
                </div>
            </div>

            <div class="flex pb-2 justify-center space-x-2 items-center ">
                <button v-if="!card1" class=" px-10 py-3 bg-cyan-700 rounded-lg " @click="previous()">Previous</button>
                <button v-if="!card2" class=" px-10 py-3 bg-cyan-700 rounded-lg " @click="next()">Next</button>
                <button v-if="card2" class=" px-10 py-3 bg-cyan-700 rounded-lg " @click="onSubmit()">Submit</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import Card1 from './Card1.vue';
import Card2 from './Card2.vue';
import { ref, onMounted } from 'vue'
import { defineEmits } from 'vue';
import { CompanyStore } from '../../../stores/CompanyStore';
const activeClass = ref('bg-blue-800 border-blue-800');
const activeLine = ref('');
const inactiveClass = ref('border-blue-200');
const inactiveLine = ref('bg-blue-200');
const card1 = ref(true)
const card2 = ref(false)

const next = () => {
    if (card1.value == true) {
        card1.value = false
        // card3.value = false
        card2.value = true
    }
    else if (card2.value == true) {
        card1.value = false
        card2.value = false
        // card3.value = true
    }

}
const company = CompanyStore()
const previous = () => {
    if (card2.value == true) {
        card1.value = true
        card2.value = false
        // card3.value = false
    }
    // else if (card3.value == true) {
    //     card1.value = false
    //     card3.value = false
    //     card2.value = true
    // }

}
// const schema = Yup.object().shape({
//     email: Yup.string()
//         .required('email is required'),
//     password: Yup.string()
//         .min(3, 'Password must be at least 3 characters')
//         .required('Password is required'),
// })
const onSubmit = async () => {
    console.log(localStorage.getItem('Apollotoken'));
    let done  = await company.insert_company()
    if(done){
        location.reload()
        emits('close')
    }
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