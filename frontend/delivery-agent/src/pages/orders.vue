<template>
    <div class="flex justify-center items-center">
        <div class="container flex justify-center items-center space-y-3 flex-wrap gap-5 ">
            <div v-if="error">error </div>
            <div v-else-if="loading">loading</div>
            <div v-else v-for="order in orders" :key="order.id">
            <Card class="p-3" :orders="order"></Card>
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from './orders/Card.vue';
import { useQuery } from '@vue/apollo-composable';
import {ref,onMounted,computed} from 'vue'
import { query_orders } from '../constants/query';
const {error,loading,result} = useQuery(query_orders)
const orders = computed(() => result.value?.product_orders)
</script>

<style>

</style>