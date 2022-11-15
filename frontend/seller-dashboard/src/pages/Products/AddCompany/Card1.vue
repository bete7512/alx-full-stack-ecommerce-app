<template>
    <div class="space-y-10">
        <div class="space-y-3">
            <label for="">Name of Your Comapany</label>
            <textarea name="" v-model="companyStore.c_name" id="" class="w-full border-gray-400 h-10 border-2 rounded"></textarea>
        </div>
        
        <div class="space-y-3">
            <label>Tin Number for your company</label>
            <textarea name="" v-model="companyStore.licence_number" class="w-full border-black h-10 border-2 rounded"></textarea>
        </div>
        <div class="space-y-3">
            <label>Address of your Company</label>
            <textarea name="" v-model="companyStore.address" class="w-full border-black h-10 border-2 rounded"></textarea>
        </div>
    </div>
</template>

<script setup>
import { CompanyStore } from '../../../stores/CompanyStore';
import { useQuery } from '@vue/apollo-composable';
import { ref,computed } from 'vue';

const companyStore = CompanyStore();

</script>

<style>

</style>