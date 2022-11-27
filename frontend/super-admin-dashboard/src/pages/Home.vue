<template>
    <div v-if="error">Something were going wrong</div>
    <div v-else-if="loading">Loading</div>
    <div v-else class="flex flex-wrap bg-slate-400  items-center sm:px-2 px-5 justify-center gap-5 ">
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
                <p class="text-2xl font-semibold">{{result.buyer_aggregate.aggregate.count}}</p>
                <p class="text-sm font-semibold">Total Buyers</p>
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
                <p class="text-2xl font-semibold">{{result.seller_aggregate.aggregate.count}}</p>
                <p class="text-sm font-semibold">Total Seller</p>
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
                <p class="text-2xl font-semibold">{{result.deliver_agent_aggregate.aggregate.count}}</p>
                <p class="text-sm font-semibold">Total Deliver Agents</p>
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
                <p class="text-2xl font-semibold">{{result.product_aggregate.aggregate.count}}</p>
                <p class="text-sm font-semibold">Total Products</p>
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
                <p class="text-2xl font-semibold">{{result.product_aggregate.aggregate.count}}</p>
                <p class="text-sm font-semibold">Total Ordered Transactions</p>
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
                <p class="text-2xl font-semibold">{{result.product_aggregate.aggregate.count}}</p>
                <p class="text-sm font-semibold">Total Products</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { UserStore } from '../stores/userStore';
import { useQuery } from '@vue/apollo-composable';
import { aggragteQuery } from '../components/Constants/Query';
const { error, loading, result } = useQuery(aggragteQuery);

</script>
<style lang="">
    
</style>