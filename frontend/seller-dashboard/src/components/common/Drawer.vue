<template>
     <div class="w-64 sm:block hidden bg-orange-300 h-screen ">
        <div class="flex justify-between"><div></div><button @click="">x</button></div>
        </div>
</template>
<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['close']);
</script>
<style>
    
</style>