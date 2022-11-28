<template>
    <div class="h-screen">
        <div class="flex justify-between items-center text-slate-900 bg-[#6DB0B0] px-10 h-20">
            <div class="text-4-xl font-bold">BS</div>
            <div class="flex justify-between items-center space-x-3">
                <div class="flex justify-center items-center space-x-1">
                    <router-link to="/login" class="flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                            <path fill-rule="evenodd"
                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                        <div>
                            signin
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="sm:inline-flex block items-center flex-wrap-reverse justify-center h-full sm:px-20 px-0 w-full">
            <div class="sm:w-1/2 w-full">
                <div class="flex justify-center font-bold text-9xl h-auto">
                    Get our fast and quality service
                </div>
                <div class="text-lg text-blue-700">
                    Save your time and energy buy what you want from home
                </div>
                <router-link to=/home class="rounded-lg flex justify-center w-1/2  items-center bg-red-600 px-14 py-2">Get Started</router-link>
            </div>
            <img src="../assets/landing.webp" class="h-1/2 sm:w-1/2 w-full flex justify-center items-center" alt="">
        </div>
    </div>
</template>
<script setup>
</script>
<style>

</style>