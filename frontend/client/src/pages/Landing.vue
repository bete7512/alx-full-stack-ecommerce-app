<template>
    <div class="h-auto  flex bg-[#dae0ff]  justify-center pb-5 ">
        <div>
            <div class="flex fixed w-full justify-between items-center text-black  bg-[#dae0ff]  px-10 h-20">
                <div class=" h-full flex justify-center items-center">
                    <span class="text-4-xl font-bold">
                        BS
                    </span>
                </div>
                <div class="flex h-full space-x-6 ">
                    <a herf="#home" class="flex  px-4 hover:text-white justify-center items-center hover:bg-pink-800 h-full space-x-2">
                        <div>
                            Home
                        </div>
                    </a>
                    <a href="#service" class="flex hover:text-white px-5 hover:bg-pink-800 justify-center items-center space-x-2">
                        <div>
                            Services
                        </div>
                    </a>
                    <a href="#about"
                        class="flex  hover:bg-pink-800 hover:text-white  justify-center items-center px-4 space-x-2">
                        <div>
                            About
                        </div>
                    </a>
                </div>
                <div class="flex h-full justify-between items-center ">
                    <div class="flex h-full justify-center items-center space-x-1">
                        <router-link to="/login"
                            class="flex  hover:bg-pink-800 h-full  justify-center items-center px-4 space-x-2">
                            <div class="text-black">
                                signin
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="sm:h-32 h-12"></div>
            <div class="sm:h-32 h-12"></div>
            <div  class="sm:flex block bg-[#dae0ff] h-auto  flex-wrap container  sm:px-10 px-0 w-full">
                <div  class="sm:w-1/2 w-full h-full px-4 flex justify-center items-center ">
                    <div class="h-1/2 w-full space-y-5">
                        <div id="home" class="flex  text-black font-bold  text-4xl h-auto">
                            Get our Fast and quality service
                        </div>
                        <div class="text-2xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis blanditiis dolorum cumque
                            corrupti fugit ea tempore aliquam soluta cum, repudiandae nemo, numquam obcaecati quae ipsam
                            excepturi fuga, id minus iusto!
                        </div>
                        <router-link to='/home'
                            class="rounded-lg hover:text-white flex w-48  text-lg bg-[#fe5627]  justify-center h-14  items-center hover:bg-[#a34a58] py-2">
                            Get Started
                        </router-link>
                    </div>
                </div>
                <div class="h-full sm:w-1/2 w-full flex justify-center items-center">
                    <img src="../assets/landing5.webp" class="h-1/2 flex justify-center items-center  w-full" alt="">
                </div>
            </div>
            <div class="sm:h-32 h-12 "></div>
            <div id="service" class="sm:h-20 font-bold font-serif text-6xl flex justify-center">Services</div>
            <div class="sm:h-32 h-12"></div>
            <div class="sm:flex px-4 block sm:justify-center sm:items-center  sm:flex-wrap container gap-5">
            <div v-for="i in 3" class="py-4">
                <div   class="sm:w-96 py-4  w-full   h-auto  shadow-red-700 bg-white rounded-lg shadow-dark-100">
                    <img src="../assets/landing.webp" class="h-60 sm:w-96 w-full rounded" alt="">
                    <div class="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia sint dolore quidem aliquam
                        eveniet soluta eaque iste corporis rem cupiditate provident impedit, quas possimus quisquam
                        omnis nemo mollitia ipsam!
                    </div>
                </div>
            </div>
            </div>
            <div class="sm:h-32 h-12"></div>
            <div id="about" class="sm:h-20 font-bold font-serif text-6xl flex justify-center">About Us</div>
            <div class="sm:h-32 h-12"></div>
            <div class="container w-full  ">
                <div class="w-full text-2xl px-4 rounded-lg bg-light-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia sint dolore quidem aliquam
                    eveniet soluta eaque iste corporis rem cupiditate provident impedit, quas possimus quisquam omnis
                    nemo mollitia ipsam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis quod, laborum
                    corrupti dolore enim ducimus maiores sapiente voluptatem earum odio consequuntur ad porro molestiae
                    magni cumque. Dolorem, pariatur perspiciatis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at tempore quasi minus assumenda
                    explicabo similique voluptatibus libero laudantium harum voluptatum sequi voluptatem, corrupti modi
                    neque, impedit ad autem? Optio?
                </div>
            </div>
            <div class="sm:h-32 h-12"></div>
        </div>
    </div>
    <Footer class=""></Footer>
</template>
<script setup>
import Footer from '../components/common/Footer.vue'
</script>
<style>

</style>