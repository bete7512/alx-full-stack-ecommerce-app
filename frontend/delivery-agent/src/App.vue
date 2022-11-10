<template>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </template>
  <script setup>
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
  