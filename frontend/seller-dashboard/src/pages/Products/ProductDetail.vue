<template>
    <div>
        <div
            class="overlay px-10 sm:px-0  sm:py-0 py-2 z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
            <div class="space-y-4  auto sm:w-1/2 w-full  bg-white rounded-md">
                <div v-if="error">error in fetching products</div>
                <div v-else-if="loading">loading Please Wait</div>
                <div v-else >

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable';
import { ProductStore } from '../../stores/ProductStores';
import gql from 'graphql-tag';
import { defineProps } from 'vue';
import { product_query } from '../../Constants/Query/query';
import { ref, computed } from 'vue';
const props = defineProps({
    id:Number
})
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