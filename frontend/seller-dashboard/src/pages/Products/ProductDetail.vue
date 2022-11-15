<template>
    <div>
        <div
        class="overlay px-10 sm:px-0  sm:py-0 py-2 z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <div class="space-y-4  sm:h-3/4 h-full sm:w-1/2 w-full  bg-white rounded-md">
            <div class="flex  justify-between items-center px-4 pt-3 ">
                
    </div>
    </div>
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable';
import { ProductStore } from '../../stores/ProductStores';
import gql from 'graphql-tag';
import { product_query } from '../../Constants/Query/query';
import { ref, computed } from 'vue';
const { error, result, loading } = useQuery(gql`
query MyQuery {
  product {
    about_product
    id
    category {
      name
    }
    name
    created_at
    p_options {
      difference
      name
      image_url
      price
    }
  }
}
`, {
    fetchPolicy: 'network-only',
});
const products = ProductStore();
const product = computed(() => result.value?.product ?? []);
</script>
<style>
    
</style>