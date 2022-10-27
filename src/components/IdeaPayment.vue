<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { formatMoney } from "../utils";
import TableCell from "./TableCell.vue";

interface Props {
  idea: {
    name: string;
    email: string;
    idea: string;
    worth: number;
  };
}

const { idea } = defineProps<Props>();

const myFee = computed(() => {
  return idea.worth / 2;
});
const myFormattedFee = computed(() => {
  return formatMoney(myFee.value);
});

const emit = defineEmits(["payment-submitted"]);
const handlePayment = () => {
  emit("payment-submitted", myFee.value);
};
</script>

<template>
  <div
    class="container mx-auto flex flex-col gap-4 items-center justify-center w-full h-full"
  >
    <h2 class="text-2xl font-bold">Great idea, {{ idea.name }}!</h2>

    <div class="rounded-lg overflow-hidden border-green-500 border">
      <table class="border-collapse table-auto w-full text-sm bg-green-100">
        <thead>
          <tr>
            <TableCell elem="th" colspan="4">Your brilliant idea:</TableCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>Name</TableCell>
            <TableCell>{{ idea.name }}</TableCell>
          </tr>
          <tr>
            <TableCell>Idea</TableCell>
            <TableCell>{{ idea.idea }}</TableCell>
          </tr>
          <tr>
            <TableCell>Worth</TableCell>
            <TableCell>{{ formatMoney(idea.worth) }}</TableCell>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center flex flex-col gap-4 items-center">
      <p class="text-xl">
        It's only fair that if you are serious and certain about your idea, that
        pay me to build it.
      </p>
      <p class="text-xl">
        I'm taking 50% of the idea's worth. That means you owe me
        {{ myFormattedFee }}.
      </p>
      <button
        @click="handlePayment"
        class="bg-green-100 py-4 px-6 font-bold text-black rounded-full shadow-lg hover:bg-green-200 transition"
      >
        Pay {{ myFormattedFee }}
      </button>
      <p class="text-sm text-gray-400">
        100% upfront payment. No refunds. No guaranteed delivery.
      </p>
    </div>
  </div>
</template>
