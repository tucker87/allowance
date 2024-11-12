<script setup lang="ts">
import { onMounted } from 'vue'
import { useMainStore } from "../stores/main.ts";

const store = useMainStore();

onMounted(async () => {
  await store.getUsers()
  console.log(store.users)
})

const selectUser = () => {}
</script>

<template>
  Select
  <div class="card">
    <button v-for="user in store.users" type="button" @click="selectUser">{{ user.name }}</button>
  </div>
</template>

<style scoped>

</style>
