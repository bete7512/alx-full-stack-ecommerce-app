<template>
    <div class="h-auto py-4 sm:px-4   sm:w-96  w-full  bg-white border hover:scale-105 hover:duration-500 hover:shadow-lg  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <img class="h-72 sm:w-full w-full" :src="product.p_option.image_url.split(',')[0]" alt="">
        <div class="font-bold italic text-center">{{product.p_option.product.name}}</div>
        <div class="italic text-red-400 line-clamp-3 text-center">{{product.p_option.product.about_product}}</div>
        <router-link :to="{name:'productdetails',params:{id:product.p_option.product.id} }" class="flex justify-center items-center"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</button></router-link>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    product: {
        type:Object
    }
})
</script>
<style>

</style>