<template>
    <div>
       <Nav class="lg:block hidden"></Nav>
       <Mobile class="block sm:hidden"></Mobile>
        <slot></slot>
    </div>
</template>
<script setup>
import Nav from '../common/Nav.vue';
import Mobile from '../common/Mobile/Nav.vue';
</script>
<style>
    
</style>