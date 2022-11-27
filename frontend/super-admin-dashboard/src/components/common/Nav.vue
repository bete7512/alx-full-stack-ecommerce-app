<template>
    <Mdrawer class="lg:hidden block" v-if="isNav" v-on:close="isNav = false"></Mdrawer>
    <div class="space-x-0 w-full  z-10 flex justify-between">
        <div class="lg:block bg-blue-600 z-20 fixed w-1/6 hidden">
            <Drawer class=""></Drawer>
        </div>
        <div class="w-full flex-1   bg-slate-400">
            <!-- <div class="  "> -->
            <div
                class="w-full  right-0 z-0 fixed text-3xl px-5 items-center pt-0 h-20 bg-slate-200 flex justify-between">
                <div class="">
                    <button @click="nav()" v-if="!isNav" class="lg:hidden block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor"
                            class="bi bi-list " viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
                <div class="flex items-center space-x-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-bell"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                    <div class="relative" >
                    <button @click="dropdownOpen = !dropdownOpen"
                        class="relative z-10 block w-12 h-12 bg-red-500 overflow-hidden rounded-full shadow focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            class="bi bi-person inline-flex" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                    </button>
                    <div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 z-10 w-full h-full">
                    </div>

                    <transition enter-active-class="transition duration-150 ease-out transform"
                        enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100"
                        leave-active-class="transition duration-150 ease-in transform"
                        leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
                        <div v-show="dropdownOpen"
                            class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                            <a href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Announcement</a>

                            <button @click="logout"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                                Log out
                            </button>
                        </div>
                    </transition>
                </div>

                </div>
                <!-- </div> -->
            </div>
            <div class="w-full lg:pl-72 pl-0 h-screen right-0  mt-20 ">
                <div class="sm:w-1/6 w-full sm:px-0 px-5 h-28 lg:pl-16 pl-5 pt-5 space-x-2  mt-4 rounded-lg">

                    <div class="flex flex-col justify-center items-start">
                        <div class="font-bold flex space-x-4 items-center">
                            <div class="text-gray-600 text-3xl "> Dashboard</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="text-gray-600"
                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <slot class=""></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import Drawer from './Drawer.vue';
import Mdrawer from './Mobile/Drawer.vue'
import { ref } from 'vue'
const isNav = ref(false)
const nav = () => {
    isNav.value = true
    console.log(isNav.value);
}
const dropdownOpen = ref(false)
const logout = () => {
    localStorage.removeItem('Apollotoken')
    location.reload()
    console.log('logout');
}
//array of numbers
</script>
<style lang="">
    
</style>