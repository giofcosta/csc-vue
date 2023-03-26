<template>
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
</template>

<script setup lang="ts">
import { useFoodStore } from '@/store/modules/food';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const foodStore = useFoodStore()
const { foods } = storeToRefs(foodStore);
onMounted(() => foodStore.getFoods());
</script> 