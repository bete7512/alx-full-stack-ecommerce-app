<template>
    <div class="overflow-x-scroll">
        <table class="w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th class="py-3 px-2">client name</th>
                    <th class="py-3 px-2">client email</th>
                    <th class="py-3 px-2">Product name</th>
                    <th class="py-3 px-2">Products Reviews</th>
                    <th class="py-3 px-2">Release Date</th>
                    <!-- <th class="py-3 px-2">Price</th> -->
                    <!-- <th class="py-3 px-2">for test</th> -->
                    <th class="py-3 px-2">activity</th>
                </tr>
            </thead>
            <tbody class="px-2">
                <tr v-if="error">error fetching data</tr>
                <tr v-if="loading">loading</tr>
                <tr v-else v-for="order in orders" :key="order.id"
                    class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="py-3 px-2">{{ order.buyer.first_name }}</td>
                    <td class="py-3 px-2">{{ order.buyer.email }}</td>
                    <td class="py-3 px-2">{{ order.p_option.product.name }}</td>
                    <td class="py-3 px-2">0</td>
                    <td class="py-3 px-2">{{ order.created_at }}</td>
                    <td class="py-3 px-2">
                        <div class="flex space-x-2">
                            <button @click="view_product(order.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-eye" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path
                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </button>
                            <button @click="edit_product">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green"
                                    class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path
                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                            </button>
                            <button @click="delete_product(order.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
            <!-- <div>{{ product.options }}</div> -->
        </table>
        <!-- <div v-else>{{ product }}</div> -->
    </div>
    <orderdetail :id="id_param" v-if="detail_product" v-on:close="detail_product = false"></orderdetail>
    <Delete v-if="isDelete" v-on:canceldelete="isDelete = false" :id="id_param" v-on:deletenotify="isDelete = false">
    </Delete>
</template>
<script setup>
import { useQuery } from '@vue/apollo-composable';
import { ProductStore } from '../../stores/ProductStores';
import gql from 'graphql-tag';
import Delete from './Delete.vue'
import orderdetail from './orderdetail.vue';
import { product_query, query_orders } from '../../Constants/Query/query';
import { ref, computed } from 'vue';
import { logMissingFieldErrors } from '@apollo/client/core/ObservableQuery';
const { error, result, loading } = useQuery(
    query_orders, {
    fetchPolicy: 'network-only',
});
const isDelete = ref(false);
const products = ProductStore();
const orders = computed(() => result.value?.product_orders ?? []);
// console.log(orders);
const id_param = ref(0)
const edit_product = () => {

}
const delete_product = (id) => {
    id_param.value = id
    isDelete.value = true;
}
const detail_product = ref(false)

const view_product = (id) => {
    id_param.value = id
    detail_product.value = true

}

const modal = ref(false)
</script>

<style>

</style>