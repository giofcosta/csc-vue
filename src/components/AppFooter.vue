<template>
  <footer class="navbar navbar-dark bg-dark fixed-bottom bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand" href="#">© 2022 {{ company.business_name }}, {{ company.suffix }}</a>
  </footer>
</template>

<script setup lang="ts">
import { useCompanyStore } from '@/store/modules/company';
import { storeToRefs } from 'pinia';

const companyStore = useCompanyStore();
const { company } = storeToRefs(companyStore);
</script>