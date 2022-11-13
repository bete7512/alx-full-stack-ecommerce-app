<template>
    <div class="space-y-10">
        <div class="space-y-3">
            <label>Add About YOUR Company</label>
            <textarea name="" v-model="companyStore.about_company" class="w-full border-black h-40 border-2 rounded"></textarea>
        </div>

    </div>
</template>
<script setup>
import { CompanyStore } from '../../../stores/CompanyStore';
const companyStore = CompanyStore();
</script>

<style>

</style>