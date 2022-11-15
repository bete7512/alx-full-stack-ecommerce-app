<template>
    <div class="h-auto sm:w-72  w-full ">
        <img class="h-72 sm:w-full w-full" :src="product.p_options[0].image_url.split(',')[0]" alt="">
        <div class="font-bold italic">{{product.name}}</div>
        <div class="italic text-red-400">{{product.about_product}}</div>
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