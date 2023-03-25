<template>
  <div id="widgets" class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">

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

      </div>
      <div class="col">

        <div class="card">
          <div class="card-header">
            Foods
          </div>
          <div class="card-body fixed-height">
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="food in foods" :key="food.id">{{ food.dish }}</li>
            </ul>
          </div>
        </div>

      </div>
      <div class="col">
        <BankWidget />
      </div>
      <div class="col col-md-6">
        <AddressWidget />
      </div>
      <div class="col col-md-6">
        <NoteWidget />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddressWidget from '@/components/AddressWidget.vue';
import BankWidget from '@/components/BankWidget.vue';
import NoteWidget from '@/components/NoteWidget.vue';

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
#widgets {
  padding: 0 0 2em 0;
}

#widgets .card-body.fixed-height {
  height: 320px;
  overflow: auto;
}

#company-widget img {
  max-width: 200px;
  max-height: 200px;
}
</style>