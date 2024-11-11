<script setup lang="ts">
import { useUserStore } from "../stores/user.ts";

defineProps<{ msg: string }>();

const store = useUserStore();
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="store.increment">
      count is {{ store.count }}
    </button>
  </div>
</template>

<style scoped></style>
