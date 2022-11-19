<template>
    <div v-if="error">error</div>
    <div v-else-if="loading">error</div>
    <div v-else class="flex h-auto justify-center items-center   ">
        <div class="container  h-full bg-zinc-100 w-full px-4 shadow-slate-800 sm:w-3/4 md:1/2 lg:1/2  space-y-3">
            <div class="flex justify-start pt-2">
                <router-link to="/" class= " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go back</router-link>
            </div>
            <div class="flex justify-center items-center font-bold">{{ result.product_by_pk.name }}</div>
            <div class="flex justify-center items-center font-bold  ">
                <div class="sm:w-1/2 w-full flex justify-center items-center">
                    {{ result.product_by_pk.about_product }}
                </div>
            </div>
            <div class="flex justify-center items-center font-bold">Options</div>
            <div class="space-y-8">
                <div class=" font-bold flex-wrap" v-for="option, index in result.product_by_pk.p_options"
                    :key="option.id">
                    <div class="flex justify-center items-center">Option {{ ++index }}</div>
                    <div class="flex justify-center items-center space-x-2">
                        <div class="space-y-2">
                            <div class="flex justify-center space-x-2">
                                <div class=" " v-for="img in option.image_url.split(',')">
                                    <img :src="img" class="w-48 h-48" alt="">
                                </div>
                            </div>
                            <div>
                                <div>{{ option.name }}</div>
                                <div>{{ option.difference }}</div>
                                <div>{{ option.price }}$</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap space-x-2 justify-center items-center py-3">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Add to Cart</button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            @click="product.add_order(option.id)">Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useQuery } from '@vue/apollo-composable'
import { GET_PRODUCT_DETAIL, ADD_ORDER } from '../Constants/Query'
import { ProductStore } from '../stores/productStore';
const route = useRoute();
const product = ProductStore()
console.log(route.params.id)
const { error, loading, result } = useQuery(
    GET_PRODUCT_DETAIL,
    {
        id: route.params.id
    }
)
</script>
<style>

</style>