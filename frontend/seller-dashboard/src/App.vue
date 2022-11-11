<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
import {ref,computed} from  'vue'
import { useRoute } from 'vue-router'
const layout = computed(() => {
  const route = useRoute()
  const layout = `${route.meta.layout ||  "empty"}`
  return layout
})
</script>

<style>

</style>
