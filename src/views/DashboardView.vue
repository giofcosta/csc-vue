<template>
  <div id="widgets" class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card-body">
          <div id="company-widget" class="card">
            <div class="card-header">
              Company
            </div>
            <img v-lazy="company.logo" class="card-img-top m-5 mx-auto d-block" alt="company logo">
            <div class="card-body">
              <h5 class="card-title"> {{ company.business_name }}</h5>
              <p class="card-text"> {{ company.bs_company_statement }}</p>
              <p class="card-text"><small class="text-muted"> {{ company.catch_phrase }}</small></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card-body">
          <div class="card">
            <div class="card-header">
              Foods
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="food in foods" :key="food.id">{{ food.dish }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card-body">
          <div class="card">
            <div class="card-header">
              Bank
            </div>
            <div class="card-body">
              <BankForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BankForm from '@/components/BankForm.vue';
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