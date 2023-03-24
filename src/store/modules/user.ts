import { User }  from '../../models/user';
import { defineStore } from "pinia";
import { api } from "@/http/api";

export const useUserStore = defineStore("user", {
    state: () =>
    ({
        user: {} as User,
    }),
    actions: {
        async getUser() {
            return await api
            .get("/users/random_user")
            .then((response) => (this.user = response.data));
        },
    },
});