<template>
    <div class="overlay top-0 lg:hidden w-1/2   left-0 flex items-center justify-center ">
        <div class="space-y-80 h-screen w-full  bg-cyan-600 rounded-md">
            <div class=" w-full  border-zinc-900 h-auto space-y-4 px-2">
                <div class="w-full flex justify-end px-2 pt-4">
                    <button @click="emit('close')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                            <path fill-rule="evenodd"
                                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup >
import { defineEmits } from 'vue';
const emit = defineEmits(['close'])
const activeClass = ref(
    "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
);
const inactiveClass = ref(
    "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
);
</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>