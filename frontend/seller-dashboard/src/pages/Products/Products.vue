<template>
    <div class="overflow-x-scroll">
        <div class="flex justify-between">
            <div></div>
            <button @click="modal = true" class="text-green-900 p-4 mb-2 rounded-lg bg-orange-400">add new product</button>
        </div>
        <table class="w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th class="py-3 px-2">Product name</th>
                <th class="py-3 px-2">Product options</th>
                <th class="py-3 px-2">Products Reviews</th>
                <th class="py-3 px-2">Release Date</th>
                <th class="py-3 px-2">Price</th>
                <th class="py-3 px-2">for test</th>
                <th class="py-3 px-2">activity</th>
            </tr>
        </thead>
        <tbody class="px-2">
            <tr v-for="i in 20" class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td class="py-3 px-2">patient.name</td>
                <td class="py-3 px-2">patient.health_num</td>
                <td class="py-3 px-2">patient.p_id</td>
                <td class="py-3 px-2">patient.registered_at</td>
                <td class="py-3 px-2">patient.phone</td>
                <td class="py-3 px-2">patient.address</td>
                <td class="py-3 px-2">
                    <div class="flex space-x-2">
                        <button>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-pencil" viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
                        </button>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <AddnewProductVue v-if="modal" v-on:close="modal = false"></AddnewProductVue>
</template>

<script setup>
import AddnewProductVue from './AddnewProduct.vue';
import {ref} from 'vue'
const modal = ref(false)
</script>

<style>

</style>