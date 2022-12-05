<template>
    <div class="flex justify-center items-center">
        <div class=" pt-420 space-x-3 container flex justify-center items-center  w-full">
            <div class="">
                <h1 class="flex container justify-center text-xl font-bold">Popular Products</h1>
                <div v-if="error">error</div>
                <div v-else-if="loading">loading</div>
                <div v-else-if="!product.length">there is not thing</div>
                <div v-else class="flex flex-wrap justify-center space-x-2">
                    <div class="pt-5 sm:px-4 px-0" v-for="p in product" :key="p.id">
                        <Card :product="p">
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable'
import { ref, computed, watch, onMounted } from 'vue'
import { QUERY_CART } from '../Constants/Query';
import Card from '../components/Products/cartCard.vue';
const { error, loading, result } = useQuery(
    QUERY_CART,
    {
        fetchPolicy: 'network-only',
    }
)
const product = computed(() => result.value?.cart ?? []);
</script>
<style >

</style>