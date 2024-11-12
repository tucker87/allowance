import { defineStore } from "pinia";
import { DefaultApi } from 'allowance-api-client'

const api = new DefaultApi();

export const useMainStore = defineStore("main", {
  state: () => ({
    count: 0,
    users: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
    async getUsers() {
      this.users = (await api.usersGet()).data
    }
  },
});
