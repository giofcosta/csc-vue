import { Bank }  from '../../models/bank';
import { defineStore } from "pinia";
import { api } from "@/http/api";

export const useBankStore = defineStore("bank", {
    state: () =>
    ({
        bank: {} as Bank,
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
    persist: true,
});