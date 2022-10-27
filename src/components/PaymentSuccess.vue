<script setup lang="ts">
import { formatMoney } from "../utils";

defineProps<{
  paidAmount: number;
}>();

function reload() {
  window.location.reload();
}
</script>

<template>
  <div class="container mx-auto text-center flex flex-col items-center gap-4">
    <h2 class="text-2xl">Your payment was successful!</h2>
    <p class="text-lg">Thanks for {{ formatMoney(paidAmount) }}</p>
    <button
      @click="reload"
      class="bg-green-100 py-4 px-6 font-bold text-black rounded-full shadow-lg hover:bg-green-200 transition"
    >
      Submit another idea
    </button>
  </div>
</template>
