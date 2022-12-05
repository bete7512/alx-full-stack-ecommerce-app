<template >
    <div class="sm:flex px-4 h-full pt-10 sm:w-full w-auto space-x-3 ">
        <div class="flex sm:justify-start justify-center h-full  min-w-fit  ">
            <div class="flex justify-start w-full p-10 bg-gray-300 rounded-lg">
                <div>
                    <h1 class="flex justify-start text-xl font-bold">Categories</h1>
                    <div class="pt-5 space-y-2">
                        <div class="relative z-0">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block p-4 pl-10  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search products" required>
                            <button type="submit"
                                class="text-white z-0 absolute right-0 bottom-0 top-0 bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                        <div v-for="cat, index in products.categories" :key="cat.id">
                            <div class="flex space-x-2 text-lg font-bold">
                                <input id="cname" v-model="category" :value="cat.name" type="checkbox">
                                <label for="cname">{{ cat.name }}</label>
                            </div>
                            <div class="pl-10 flex" v-for="sub, ind in cat.sub_category_ids" :key="sub.id">
                                <input v-model="subcategory" :value="sub.name" type="checkbox">
                                <span>{{ sub.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-y-scroll pt-4 space-x-3 sm:w-5/6  w-full">
            <div class="">
                <h1 class="flex justify-center text-xl font-bold">Popular Products</h1>
                <div v-if="error">error</div>
                <div v-else-if="loading">loading</div>
                <div v-else class="flex flex-wrap justify-center  space-x-2">
                    <div class="pt-5 sm:px-4 px-0 "
                        v-for="p in product.filter((elem) => (category.length > 0) ? elem.category.name == category[0] : (subcategory.length > 0) ? elem.sub_category_ob.name === subcategory[0] : elem)"
                        :key="p.id">
                        <Card :product="p"></Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable'
import { ref, computed, watch, onMounted } from 'vue'
import { GET_PRODUCTS } from '../Constants/Query';
import Card from '../components/Products/Card.vue'
import { ProductStore } from '../stores/productStore';
const { error, loading, result } = useQuery(
    GET_PRODUCTS,
    {
        fetchPolicy: 'network-only',
    },
    // {
    //     pollInterval:100
    // }
)
const category = ref([])
const subcategory = ref([])
const product = computed(() => result.value?.product ?? []);
const products = ProductStore()
onMounted(() => {
    products.getCategories()
})
// watch(category, (one, two) => {
// })
const test = ref(4)
</script>
<style>

</style>