<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { useBankStore } from '@/store/modules/bank';
import { storeToRefs } from 'pinia';

    const bankStore = useBankStore();
  const { bank } = storeToRefs(bankStore);
</script>