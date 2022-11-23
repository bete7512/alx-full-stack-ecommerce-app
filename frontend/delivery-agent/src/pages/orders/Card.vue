<template>
    <div class="flex flex-wrap justify-center pt-3">
        <div
            class="h-auto py-4 sm:px-4 px-2  sm:w-80  w-full max-w-sm rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div class="font-bold text-2xl">Starting Place : <span class="text-red-600">{{
                    orders.p_option.product.seller.address
            }}</span></div>
            <div class="font-bold text-2xl">Destination : <span class="text-red-600">{{ orders.buyer.address }}</span>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-2">
                <router-link :to="{ name: 'messagedetail', params: { id: orders.p_option.product.seller.id } }"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">contact seller
                    about the delivery
                </router-link>
                <router-link to="/" class="flex justify-center items-center">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">deliver</button>
                </router-link>
            </div>

        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    orders: {
        type: Object
    }
})
</script>
<style>

</style>