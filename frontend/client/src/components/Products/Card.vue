<template>
    <div class="h-auto sm:w-72  w-full ">
        <img class="h-72 sm:w-full w-full" :src="product.p_options[0].image_url.split(',')[0]" alt="">
        <div class="font-bold italic">{{product.name}}</div>
        <div class="italic text-red-400">{{product.about_product}}</div>
        <router-link :to="{name:'productdetails',params:{id:product.id} }" class="flex justify-center items-center"><button class="bg-orange-600 font-bold text-lg px-4 py-2 rounded-lg">detail</button></router-link>
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