<template>
    <div>
       <Nav class="lg:block hidden"></Nav>
       <Mobile class="block sm:hidden"></Mobile>
        <slot></slot>
    </div>
    <Footer></Footer>
</template>
<script setup>
import Footer from '../common/Footer.vue'
import Nav from '../common/Nav.vue';
import Mobile from '../common/Mobile/Nav.vue';
</script>
<style>
    
</style>