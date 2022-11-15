<template>
    <div class="space-y-10">
        <div class="flex justify-center items-center">Add Options</div>
        <div class="space-y-3">
            <label for="">Option Name</label>
            <textarea name="" v-model="product.o_name" id=""
                class="w-full border-gray-400 h-10 border-2 rounded"></textarea>
        </div>
        <div class="space-y-3">
            <label>Describe Difference</label>
            <textarea name="" v-model="product.difference"
                class="w-full border-black h-10 border-2 rounded"></textarea>
        </div>
        <div class="space-y-3">
            <label>Price</label>
            <textarea name="" v-model="product.price"
                class="w-full border-black h-10 border-2 rounded"></textarea>
        </div>
    </div>
</template>
<script setup>
import { ProductStore } from '../../../stores/ProductStores';
const product = ProductStore();
</script>

<style>

</style>