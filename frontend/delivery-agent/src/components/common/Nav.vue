<template>
    <div>
        <div class="flex justify-between items-center text-slate-900 bg-[#6DB0B0] px-10 h-20">
            <div class="text-4-xl font-bold">BS</div>
            <div class="text-4-xl font-bold">New Posts</div>

            <div class="flex justify-between items-center space-x-3 h-full">
                <router-link to="/login" class="flex hover:bg-red-800 px-4 h-full justify-center items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                        <path fill-rule="evenodd"
                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                    <button class="text-lg">signin</button>
                </router-link>
                <router-link to="/orders" class="flex space-x-1 hover:bg-red-800 px-4 h-full justify-center items-center">
                    <button class="text-lg">Active Order</button>
                </router-link>
                <router-link to="/" class="flex space-x-1 hover:bg-red-800 px-4 h-full justify-center items-center">
                    <button class="text-lg">Waiting</button>
                </router-link>
                <router-link to="/message" class="flex space-x-1 hover:bg-red-800 px-4 h-full justify-center items-center">
                    <button class="text-lg">messages</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
// import {routerLink} from 'vue-router'
import {RouterLink} from 'vue-router'
</script>
<style>

</style>