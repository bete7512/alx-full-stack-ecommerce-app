<template>
  <div class="flex justify-center items-center">
    <div class="container h-screen bg-dark-300 rounded-lg">
      <div v-if="error">error</div>
      <div v-if="loading">loading</div>
      <div v-else class="">
        {{ result }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, computed, onMounted, watch } from "vue ";
import { useSubscription, useQuery, useMutation } from "@vue/apollo-composable";
import { query_live_messages } from "../constants/query";
import gql from "graphql-tag";
const messages = ref('')
const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
const { error, loading, result } = useQuery(
  gql`
  query MyQuery {
    messages_seller_delivery(order_by: {created_at: asc}) {
      chat_seller_deliveries {
        deliver_agent {
          address
          email
          first_name
          last_name
        }
        seller {
          email
          address
          first_name
          last_name
        }
      }
      created_at
      is_my_message
      message
    }
  }
   `
)
</script>

<style>

</style>