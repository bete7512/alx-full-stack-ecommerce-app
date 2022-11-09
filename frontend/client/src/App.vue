<template>
  <!-- <component :is="layout"> -->
    <router-view></router-view>
  <!-- </component> -->
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter()
const defaultlayout = 'empty'
console.log(curr)
const layout = computed(
  () => `${currentRoute || defaultlayout}-layout`
)

</script>


<style>

</style>
