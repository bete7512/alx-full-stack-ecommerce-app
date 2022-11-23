<template>
  <div class="flex justify-center w-full h-full items-center">
    <div class="bg-light-100 w-full h-full flex justify-center items-center">
      <div v-if="error">error</div>
      <div v-if="loading">error</div>
      <div v-else class="container w-full h-screen ">
        <div class="space-y-4 w-full">
          <router-link v-for="chat in persons" :to="{ name: 'messagedetail', params: { id: chat.seller.id } }"
            class=" flex  items-center h-20 bg-green-200 rounded" :key="chat.id">
            <div class="h-16  w-16 rounded-full  flex justify-center items-center bg-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person"
                viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </div>
            <div class=" w-full">
              <div>
                {{ chat.seller.first_name }} {{ chat.seller.last_name }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from "vue ";
import { useSubscription, useQuery } from "@vue/apollo-composable";
import { query_live_messages } from "../constants/query";
import gql from "graphql-tag";
const { error, loading, result } = useQuery(
  gql`
  query MyQuery {
  chat_seller_delivery(distinct_on: seller_id) {
  id
    seller {
      first_name
      last_name
      id
      address
      email
    }
    messages_seller_delivery {
      message
      is_my_message
    }
  }
}`
)
const persons = computed(() => result.value?.chat_seller_delivery)
</script>

<style>

</style>