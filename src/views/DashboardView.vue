<template>
<div id="widgets">
  <div id="company-widget" class="card mb-3">
    <div class="card-header">
    Company
  </div>
    <img :src="company.logo" class="card-img-top" alt="company logo">
    <div class="card-body">
      <h5 class="card-title"> {{ company.business_name }}</h5>
      <p class="card-text"> {{ company.bs_company_statement }}</p>
      <p class="card-text"><small class="text-muted"> {{ company.catch_phrase }}</small></p>
    </div>
  </div>

  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Foods
  </div>
  <ul class="list-group list-group-flush" >
    <li class="list-group-item" v-for="food in foods" :key="food.id">{{ food.dish }}</li>
  </ul>
</div>
</div>
  
</template>

<script setup lang="ts">
  import { useCompanyStore } from '@/store/modules/company';
import { useFoodStore } from '@/store/modules/food';
  import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

  const companyStore = useCompanyStore();
  const { company } = storeToRefs(companyStore);
  const foodStore = useFoodStore()
  const { foods } = storeToRefs(foodStore);
  onMounted(() => foodStore.getFoods());
</script>

<style lang="scss">
  #company-widget img {
    max-width: 200px;
    max-height: 200px;
  }
</style>