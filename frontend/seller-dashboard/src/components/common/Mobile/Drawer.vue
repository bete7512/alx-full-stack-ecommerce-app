<template>
    <div class="overlay top-0 lg:hidden w-1/2   left-0 flex items-center justify-center ">
        <div class="flex justify-between space-x-3 pr-3 items-center pt-3">
            <div></div>
            <button class="sm:hidden block" @click="emit('close')">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['close']);
</script>

<style >

</style>