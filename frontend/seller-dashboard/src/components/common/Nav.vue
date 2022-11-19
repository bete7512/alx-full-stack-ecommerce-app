<template>
    <Mdrawer class="lg:hidden block" v-if="isNav" v-on:close="isNav = false"></Mdrawer>
    <div class="space-x-0 w-full  z-10 flex justify-between">
        <div class="lg:block bg-blue-600 z-20 fixed w-1/6 hidden">
            <Drawer class=""></Drawer>
        </div>
        <div class="w-full flex-1  bg-slate-200">
            <!-- <div class="  "> -->
            <div
                class="w-full border-b-8 border-cyan-800 right-0 z-0 fixed text-3xl px-5 items-center pt-0 h-20 bg-slate-400 flex justify-between">
                <div class="">
                    <button @click="nav()" v-if="!isNav" class="lg:hidden block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor"
                            class="bi bi-list " viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
                <div class="relative mx-4 lg:mx-0 bg-slate-400">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>

                    <input
                        class="w-32 bg-slate-200 pl-10 h-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                        type="text" placeholder="Search" />
                </div>
                <div class="flex items-center space-x-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-bell"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                    <div class="relative">
                        <button @click="dropdownOpen = !dropdownOpen"
                            class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                            <img class="object-cover w-full h-full" src="../../assets/images2.jpeg" alt="Your avatar" />
                        </button>

                        <div v-show="dropdownOpen" @click="dropdownOpen = false"
                            class="fixed inset-0 z-10 w-full h-full"></div>

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
                <div class="px-4">
                    <slot class=""></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Drawer from './Drawer.vue';
import Mdrawer from './Mobile/Drawer.vue'
import Header from './Header.vue';
import { ref } from 'vue'
import router from '../../router';
const isNav = ref(false)
const nav = () => {
    isNav.value = true
    console.log(isNav.value);
}
const dropdownOpen = ref(false);
//   const { isOpen } = useSidebar();
const isOpen = ref(false)
//array of numbers
const logout = ()=>{
    console.log(localStorage.getItem('Apollotoken'));
    localStorage.removeItem('Apollotoken')
    router.push('/login')
}
</script>
<style lang="">
    
</style>