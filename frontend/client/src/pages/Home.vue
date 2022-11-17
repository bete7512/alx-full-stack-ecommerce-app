<template >
    <div class="sm:flex px-4 pt-10 sm:w-full w-auto space-x-3 ">
        <div class="flex sm:justify-start justify-center  sm:w-1/3 w-full  ">
            <div class="flex justify-start w-full p-10 bg-gray-300 rounded-lg">
                <div>
                    <h1 class="flex justify-start text-xl font-bold">Categories</h1>
                    <div class="pt-5 space-y-2">
                        <div class="relative ">
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
                                class="text-white absolute right-0 bottom-0 top-0 bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                        <div v-for="cat in products.categories" :key="cat.id">
                            <div class="flex space-x-2 text-lg font-bold">
                                <input v-model="products.category" type="checkbox">
                                <span>{{cat.name}}</span>
                            </div>
                            <div class="pl-10 flex" v-for="sub in cat.sub_category_ids" :key="sub.id">
                                <input v-model="products.subcategory" type="checkbox">
                                <span>{{sub.name}}</span>
                            </div>
                        </div>
                        <!-- <div>
                            <div class="flex space-x-2 text-lg font-bold">
                                <input type="checkbox">
                                <span>Clothes</span>
                            </div>
                            <div class="pl-10 flex">
                                <input type="checkbox">
                                <span>shoes </span>
                            </div>
                            <div class="pl-10 flex">
                                <input type="checkbox">
                                <span>fashion </span>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class=" pt-4 space-x-3 sm:w-3/4  w-full">
            <div class="">
                <h1 class="flex justify-center text-xl font-bold">Popular Products</h1>
                <div v-if="error">error</div>
                <div v-else-if="loading">loading</div>
                <!-- <div v-else>{{product}}</div> -->
                <div v-else class="flex flex-wrap justify-center space-x-4">
                    <div class="  pt-5 px-4" v-for="p in product.filter((elem)=>products.subcategory ? elem.sub_category_ob.name == products.subcategory:products.category ? elem.category.name==products.category:elem)" :key="p.id">
                        <Card :product="p"></Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable'
import { ref, computed,onMounted } from 'vue'
import { GET_PRODUCTS } from '../Constants/Query';
import Card from '../components/Products/Card.vue'
import { ProductStore } from '../stores/productStore';
const { error, loading, result } = useQuery(
    GET_PRODUCTS,
    {
        fetchPolicy: 'network-only',
    }
)
const product = computed(() => result.value?.product ?? []);
const products = ProductStore()
onMounted(() => {
    products.getCategories()
    // products.category()
})
console.log(product);
const test = ref(4)
</script>
<style>

</style>