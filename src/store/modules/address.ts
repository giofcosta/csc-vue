import { Address } from './../../models/address';
import { defineStore } from "pinia";
import { api } from "@/http/api";

export const useCompanyStore = defineStore("address", {
    state: () =>
    ({
        address: {} as Address,
    }),
    actions: {
        async getAddress() {
            return await api
            .get("/address/random_address")
            .then((response) => (this.address = response.data));
        },
    },
});

