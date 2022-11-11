<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
<script setup>
// import { RouterView, RouterLink } from 'vue-router'
// import {ref,computed} from  'vue'
// import { useRoute } from 'vue-router'
// const layout = computed(() => {
//   const route = useRoute()
//   const layout = `${route.meta.layout ||  "empty"}-layout`
//   return layout
// })

import { computed } from 'vue'
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter()
const defaultlayout = 'empty'
console.log()
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultlayout}-layout`
)
console.log(layout)
</script>

<style>

</style>
