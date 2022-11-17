<template>
    <div class="flex justify-center items-center h-screen bg-slate-300  ">
        <div class="container  h-1/2  space-y-3">
            <div class="flex justify-center">
                <router-link to="/" class="px-5 py-2  bg-orange-300 rounded-lg">Go back</router-link>
                <!-- <div></div> -->
            </div>
            <div class="flex justify-center items-center font-bold">{{ result.product_by_pk.name }}</div>
            <div class="flex justify-center items-center font-bold">{{ result.product_by_pk.about_product }}</div>
            <div class="flex justify-center items-center font-bold">Options</div>
            <div class="space-y-4">
                <div class=" font-bold flex-wrap"
                v-for="option, index in result.product_by_pk.p_options" :key="option.id">
                <div class="flex justify-center items-center">Option {{++index}}</div>
                    <div class="flex justify-center items-center space-x-2">
                            <div class="space-y-2">
                        <div class="flex justify-center space-x-2">
                            <div class=" " v-for="img in option.image_url.split(',')">
                                <img :src="img" class="w-16 h-16" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>{{ option.name }}</div>
                        <div>{{ option.difference }}</div>
                        <div>{{ option.price }}$</div>
                    </div>
                    </div>
                
                    <div class="flex flex-wrap space-x-2 justify-center items-center">
                        <button class="p-3 rounded-lg bg-orange-700">Add to Cart</button>
                        <button class="p-3 rounded-lg bg-orange-700">Order</button>
                        <button class="p-3 rounded-lg bg-orange-500">add To Wishlist</button>
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
import { GET_PRODUCT_DETAIL } from '../Constants/Query'
const route = useRoute();
console.log(route.params.id)
const { error, loading, result } = useQuery(
    GET_PRODUCT_DETAIL,
    {
        id: route.params.id
    }
)
// const product = ref(result.value?.product ?? []);
// console.log(product);


</script>
<style>

</style>