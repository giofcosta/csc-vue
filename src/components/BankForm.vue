<template>
  <form>
    <div class="mb-3">
      <label for="account_number" class="form-label">Account Number</label>
      <input type="text" class="form-control" id="account_number" v-model="bank.account_number">
    </div>
    <div class="mb-3">
      <label for="iban" class="form-label">IBAN</label>
      <input type="text" class="form-control" id="iban" v-model="bank.iban">
    </div>
    <div class="mb-3">
      <label for="bank_name" class="form-label">Bank Name</label>
      <input type="text" class="form-control" id="bank_name" v-model="bank.bank_name">
    </div>
    <div class="mb-3">
      <label for="routing_number" class="form-label">Routing Number</label>
      <input type="text" class="form-control" id="routing_number" v-model="bank.routing_number">
    </div>
    <div class="mb-3">
      <label for="swift_bic" class="form-label">SWIFT/BIC</label>
      <input type="text" class="form-control" id="swift_bic" v-model="bank.swift_bic">
    </div>
  </form>
</template>

<script setup lang="ts">
import { useBankStore } from '@/store/modules/bank';
import { storeToRefs } from 'pinia';

const bankStore = useBankStore();
const { bank } = storeToRefs(bankStore);
</script>