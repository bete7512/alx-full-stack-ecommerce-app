<template>
    <div>
       <Nav>
         <slot></slot>
         <!-- <Footer  class="z-50"></Footer> -->
       </Nav>
    </div>
</template>
<script setup>
import Nav from '../common/Nav.vue';
import Footer from '../common/Footer.vue'
</script>
<style>
    
</style>