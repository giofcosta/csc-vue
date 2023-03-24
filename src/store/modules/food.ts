import { Food }  from '../../models/food';
import { defineStore } from "pinia";
import { api } from "@/http/api";

export const useFoodStore = defineStore("food", {
    state: () =>
    ({
        foods: [] as Food[],
    }),
    actions: {
        async getFoods() {
            return await api
            .get("/food/random_food?size=3")
            .then((response) => (this.foods = response.data));
        },
    },
});