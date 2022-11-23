<template>
    <div class="justify-center w-full inline-flex h-screen bg-light-blue-400  items-center">
        <div class="container space-y-4   bg-light-blue-400">
            <!-- {{ messages }} -->
            <div class="w-full space-y-3">
                <div v-for="message in messages" :key="message.id"
                    class="flex w-full space-y-3 justify-center items-center space-x-2">
                    <div class="w-full space-y-3 gap-4 flex justify-between">
                        <div class="flex items-center">
                            <div class="h-16  w-16 rounded-full  flex justify-center items-center bg-red-500">

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                            </div>
                            <div>bete</div>
                        </div>
                        <div>
                            {{ message.message }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <textarea v-model="message" name="" id="" class="w-full h-24 border "></textarea>
            </div>
            <button @click="send_message" class="hover:bg-yellow-700  bg-red-600 py-2 rounded-lg px-8">Send</button>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from "vue ";
import { useSubscription, useQuery, useMutation } from "@vue/apollo-composable";
import { query_live_messages, insert_message, detail_message } from "../constants/query";
import { useRoute } from 'vue-router'
import gql from "graphql-tag";
const route = useRoute()
const message = ref(route.params.id)
const id = route.params.id
const { error, loading, result, onResult } = useSubscription(
    detail_message,
    () => ({
        id: id
    })
)
const messages = computed(() => result.value?.messages_seller_delivery)

const { mutate: send_message, onDone } = useMutation(insert_message, () => ({
    message: message.value,
    seller_id: 1,
}))
onDone((response) => {
    console.log(response);
})
</script>
<style>

</style>