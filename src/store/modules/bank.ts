import { Bank }  from '../../models/bank';
import { defineStore } from "pinia";
import { api } from "@/http/api";
import { useStorage } from '@vueuse/core'

export const useBankStore = defineStore("bank", {
    state: () =>
    ({
        bank: useStorage<Bank>('bank', null),
    }),
    actions: {
        async getBank() {
            return await api
            .get("/bank/random_bank")
            .then((response) => {
                this.bank = response.data
            } );
        },
    },
});