<script setup lang="ts">
import { useMainStore } from "../stores/main.ts";

const store = useMainStore();

const selectUser = () => {}
</script>

<template>
  <div class="card">
    <button v-for="user in store.users" type="button" @click="selectUser">{{ user }}</button>
  </div>
</template>

<style scoped>

</style>
