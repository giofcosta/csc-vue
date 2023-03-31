<template>
    <div id="company-widget" class="card">
        <div class="card-header">
            Company
        </div>
        <div class="card-body fixed-height">
            <img v-lazy="company.logo" class="card-img-top m-5 mx-auto d-block" alt="company logo">
            <h5 class="card-title"> {{ company.business_name }}</h5>
            <p class="card-text"> {{ company.bs_company_statement }}</p>
            <p class="card-text"><small class="text-muted"> {{ company.catch_phrase }}</small></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCompanyStore } from '@/store/modules/company';
import { storeToRefs } from 'pinia';

const companyStore = useCompanyStore();
const { company } = storeToRefs(companyStore);

</script>