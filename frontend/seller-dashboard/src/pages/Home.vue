<template>
    <div class="flex flex-wrap   items-center sm:px-2 px-5 justify-center gap-5 ">
        <div
            class="sm:w-64 w-full sm:px-0  h-28 flex px-5 justify-center items-center space-x-2 bg-white mt-4 rounded-lg">
            <div class="flex  justify-center items-center  h-20 w-20 rounded-full bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-cart"
                    viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </div>
            <div class="flex flex-col justify-center items-start">
                <p class="text-2xl font-semibold">1,234</p>
                <p class="text-sm font-semibold">Total Orders</p>
            </div>
        </div>
        <div
            class="sm:w-64 w-full sm:px-0 px-5 h-28 flex justify-center  items-center space-x-2 bg-white mt-4 rounded-lg">
            <div class="flex justify-center items-center h-20 w-20 rounded-full bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-cart"
                    viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </div>
            <div class="flex flex-col justify-center items-start">
                <p class="text-2xl font-semibold">1,234</p>
                <p class="text-sm font-semibold">Total Followers</p>
            </div>
        </div>
        <div
            class="sm:w-64 w-full sm:px-0 px-5 h-28 flex justify-center  items-center space-x-2 bg-white mt-4 rounded-lg">
            <div class="flex justify-center items-center h-20 w-20 rounded-full bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-cart"
                    viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </div>
            <div class="flex flex-col justify-center items-start">
                <p class="text-2xl font-semibold">1,234</p>
                <p class="text-sm font-semibold">Total Reviews</p>
            </div>
        </div>
        <div
            class="sm:w-64 w-full sm:px-0 px-5 h-28 flex justify-center  items-center space-x-2 bg-white mt-4 rounded-lg">
            <div class="flex justify-center items-center h-20 w-20 rounded-full bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-cart"
                    viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </div>
            <div class="flex flex-col justify-center items-start">
                <p class="text-2xl font-semibold">1,234</p>
                <p class="text-sm font-semibold">Total Reviews</p>
            </div>
        </div>
    </div>
    <AddCompany v-if="!company.have_company" v-on:close="company.have_company = true"></AddCompany>
</template>
<script setup>
import {computed,ref} from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import AddCompany from './Products/AddCompany/AddCompany.vue';
import { CompanyStore } from '../stores/CompanyStore';
const company = CompanyStore();
const limit = ref(5)
const offset = ref(0)
// const { error, loading, result, fetchMore } = useQuery(gql`
//     `, () => ({
//         offset: offset.value,
//         limit: limit.value
//     }),
//     { fetchPolicy: 'network-only' });
// const users = computed(() => result.value?.users)
// const recipes = computed(() => result.value?.recipe)
</script>
<style lang="">
    
</style>