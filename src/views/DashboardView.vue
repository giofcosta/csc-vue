<template>
  <div id="widgets" class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <CompanyWidget />
      </div>
      <div class="col">
        <FoodsWidget />
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
import CompanyWidget from '@/components/CompanyWidget.vue';
import FoodsWidget from '@/components/FoodsWidget.vue';
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