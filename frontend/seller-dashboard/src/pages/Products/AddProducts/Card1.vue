<template>
    <div class="space-y-5">
        <div class="space-y-3">
            <div class="flex justify-center items-center">New Product</div>
            <label for="">Name of Product</label>
            <textarea name="" v-model="product.product_name" id="" class="w-full border-gray-400 h-10 border-2 rounded"></textarea>
        </div> 
        <div class="space-y-3">
            <label for="">About Product</label>
            <textarea name="" v-model="product.about_product" id="" class="w-full  border-gray-400 h-20 border-2 rounded"></textarea>
        </div>
        <div class="space-y-3">
            <label>Category</label>
            <select name=""  v-model="product.c_id" class="w-full border-black h-10 border-2 rounded">
            <option :value="cat.id" v-for="cat in product.categories" :key="cat.id" selected>{{cat.name}}</option>
            </select>
        </div>
        <div class="space-y-3">
            <label>SubCategory</label>
            <select name="" v-model="product.sub_category_id"  class="w-full border-black h-10 border-2 rounded">
            <option :value="cat.id" v-for="cat in product.subcategories.filter(elem=>elem.c_id === product.c_id)" :key="cat.id">{{cat.name}}</option>
            </select>
        </div>
    </div>
</template>
<script setup>
import { ref,computed,onMounted } from 'vue';
import {ProductStore} from '../../../stores/ProductStores';
const product = ProductStore();
onMounted(() => {
    product.category()
    product.subcategory()
})
</script>

<style>

</style>