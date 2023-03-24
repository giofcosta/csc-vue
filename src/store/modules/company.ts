import { Company }  from '../../models/company';
import { defineStore } from "pinia";
import { api } from "@/http/api";

export const useCompanyStore = defineStore("company", {
    state: () =>
    ({
        company: {} as Company,
    }),
    actions: {
        async getCompany() {
            return await api
            .get("/company/random_company")
            .then((response) => (this.company = response.data));
        },
    },
});