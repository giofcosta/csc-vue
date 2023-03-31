import { defineStore } from "pinia";

export const useNoteStore = defineStore("note", {
    state: () =>
    ({
        note: 'Your note here',
    }),
    persist: true,
});