<script setup lang="ts">
import { useMainStore } from "../stores/main.ts";

defineProps<{ msg: string }>();

const store = useMainStore();
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
