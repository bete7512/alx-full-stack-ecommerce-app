<template>
    <div>
       <Nav class="lg:block hidden"></Nav>
       <Mobile class="block sm:hidden"></Mobile>
        <slot></slot>
    </div>
    <Footer></Footer>
</template>
<script setup>
import Nav from '../common/Nav.vue';
import Mobile from '../common/Mobile/Nav.vue';
import Footer from '../common/Footer.vue';
</script>
<style>
    
</style>