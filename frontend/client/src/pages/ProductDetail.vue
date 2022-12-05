<template>
    <div v-if="error">error</div>
    <div v-else-if="loading">error</div>
    <div v-else class="flex  justify-center items-center   ">
        <div class="container  h-full bg-zinc-100 w-full px-4 shadow-slate-800 sm:w-3/4 md:1/2 lg:1/2  space-y-3">
            <div class="flex justify-start sm:pt-24">
                <router-link to="/" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go
                    back</router-link>
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
                        <button :class="[option.is_user_added_to_cart ? 'bg-red-700':'bg-blue-500']" @click="add_cart(option.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex space-x-2 items-center">
                            <svg v-if="is_carting" role="status"
                            class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB" />
                            <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor" />
                        </svg>
                        <div v-if="!option.is_user_added_to_cart">
                            Add to Cart
                        </div>
                        <div v-else="option.is_user_added_to_cart">Remove from cart</div>
                        </button>
                        <button :class="[option.is_user_added_to_order ? 'bg-red-700':'bg-blue-500']"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex space-x-2 items-center"
                            @click="add_order(option.id)">
                            <svg v-if="is_ordering" role="status"
                            class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB" />
                            <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor" />
                        </svg>
                            <div v-if="!option.is_user_added_to_order">
                                Order
                            </div>
                            <div v-else="option.is_user_added_to_order">
                                Ordered
                            </div>
                        </button>
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
const is_ordering = ref(false)
const is_carting = ref(false)
const add_order = async (id) => {
    is_ordering.value = true
    const response = await product.add_order(id)
    if (response) {
        console.log(response)
    }
    is_ordering.value = false
}
const add_cart = async (id) => {
    is_carting.value = true
    const response = await product.add_to_cart(id)
    if (response) {
        console.log(response)
    }
    is_carting.value = false
}
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