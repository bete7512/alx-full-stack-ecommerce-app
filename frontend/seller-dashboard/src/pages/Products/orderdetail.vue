<template>
    <div>
        <div
            class="overlay px-10 sm:px-0  sm:py-4  py-2 z-50 top-0 left-0 bottom-0 right-0 flex items-center justify-center">
            <div class="space-y-4  auto  w-full h-full  sm:w-1/2 md:w-3/4 lg:w-1/2 bg-white rounded-md">
                <div class="flex  justify-between items-center px-4 pt-3 ">
                <div></div>
                <button class="p-3 hover:bg-red-800 rounded-lg" @click="() => emits('close')"><svg
                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>

                <div v-if="error">error in fetching products</div>
                <div v-if="loading">loading Please Wait</div>
                <div v-else class="flex justify-center items-center">
                    <!-- <div class="inline-flex"> -->
                    <div>
                        <div class="font-bold text-lg italic underline flex justify-center items-center">{{
                                result.product_by_pk.name
                        }}</div>
                        <div class="py-3 italic flex justify-center items-center">{{ result.product_by_pk.about_product
                        }}</div>
                        <div classs="flex justify-center items-center">
                            <div class="font-bold italic flex justify-center items-center">Category</div>
                            <div class="italic px-20">{{ result.product_by_pk.category.name }}</div>
                        </div>
                        <div classs="flex justify-center items-center">
                            <div class="font-bold italic flex justify-center items-center">Sub Category</div>
                            <div class=" italic px-20">{{ result.product_by_pk.sub_category_ob.name }}</div>
                        </div>
                        <div classs="flex justify-center items-center">
                            <div class="font-bold italic flex justify-center items-center">
                                {{ result.product_by_pk.p_options.length }} Options
                            </div>
                            <div class=" italic px-20 " v-for="option in result.product_by_pk.p_options"
                                :key="option.id">
                                <div class="">
                                    <div class="font-bold">name</div>
                                    <div>{{ option.me }}</div>
                                    <div class="font-bold">price</div>
                                    <div>{{ option.price }}</div>
                                    <div class="font-bold">difference</div>
                                    <div>{{ option.difference }}</div>
                                    <div class="flex">
                                        <div class="flex flex-wrap space-x-2"
                                            v-for="img in option.image_url.split(',')">
                                            <img :src="img" class="w-20 h-20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable';
import { ProductStore } from '../../stores/ProductStores';
import gql from 'graphql-tag';
import { defineProps,defineEmits } from 'vue';
import { product_query } from '../../Constants/Query/query';
import { ref, computed } from 'vue';
const props = defineProps({
    id: Number
})
const emits = defineEmits(['close']);
const { error, loading, result } = useQuery(gql`
query MyQuery($id: Int!) {
  product_by_pk(id: $id) {
    about_product
    category {
      name
    }
    created_at
    name
    sub_category_ob {
      name
    }
    p_options {
    id
      name
      image_url
      difference
      price
    }
  }
}
`,
    () => ({
        id: props.id
    }),
    {
        fetchPolicy: 'network-only',
    });
const products = ProductStore();
</script>
<style>

</style>