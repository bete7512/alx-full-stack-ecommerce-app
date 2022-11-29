<template>
    <div class="w-full fixed z-50">
        <div class="flex justify-between items-center text-slate-900 bg-[#dae0ff] px-10 h-20">
            <div class="text-4-xl font-bold">BS</div>
            <div>
                <div>
                    <div class="flex relative justify-center items-center ">
                        <div class="flex justify-center items-center">
                            <div>
                                Categories
                            </div>
                            <div class="flex pl-2">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg> -->
                                <select class=p-4  id="">
                                    <option v-for="cat in product.categories" value="">
                                    <select name="" id="">{{cat.name}}
                                        <option value=""></option>
                                    </select>
                                    </option>                                  
                                </select>
                            </div>
                        </div>
                        <div class="relative sm:w-80 md:96 ">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search products" required>
                            <button type="submit"
                                class="text-white absolute right-0 bottom-0 top-0 bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-full justify-between items-center space-x-3">
                <div v-if="!user.userLoggedin" class="flex h-full justify-center items-center space-x-1">
                    <router-link to="/login"
                        class="flex h-full justify-center items-center hover:bg-red-700 hover:text-white px-3 space-x-2">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                            <path fill-rule="evenodd"
                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg> -->
                        <div>
                            signin
                        </div>
                    </router-link>
                </div>
                <!-- <div class="relative" v-if="user.userLoggedin">
                    <button @click="dropdownOpen = !dropdownOpen"
                        class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                        <img class="object-cover w-full h-full" src="../../assets/meron.jpg" alt="Your avatar" />
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

                            <router-link to="/"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                                Log out
                            </router-link>
                        </div>
                    </transition>
                </div> -->
                <div class="flex space-x-1 h-full   justify-center items-center">
                    <router-link to="/carts"
                        class="text-lg h-full justify-center items-center hover:bg-red-900 hover:text-white px-4 flex space-x-2">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg> -->
                        <div>
                            Cart
                        </div>
                    </router-link>
                </div>
                <!-- <div class="flex space-x-1 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    <button class="text-lg">Wishlist</button>
                </div> -->
                <div class="relative" v-if="user.userLoggedin">
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
        </div>
    </div>
</template>
<script setup>
import { ProductStore } from '../../stores/productStore';
import { ref } from 'vue'
import { UserStore } from '../../stores/userStore';
import router from '../../router';
const user = UserStore();
const product = ProductStore();
const dropdownOpen = ref(false)
const logout = () => {
    localStorage.removeItem('Apollotoken')
    user.userLoggedin = false
    router.push('/')
}
</script>
<style>

</style>