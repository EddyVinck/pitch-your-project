<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import IdeaForm from "./components/IdeaForm.vue";
import IdeaPayment from "./components/IdeaPayment.vue";
import PaymentSuccess from "./components/PaymentSuccess.vue";

let idea = reactive({
  name: "",
  email: "",
  idea: "",
  worth: 0,
});

const ideaIsValid = computed(() => {
  return (
    idea.name !== "" && idea.email !== "" && idea.idea !== "" && idea.worth > 0
  );
});

function onSubmit(newIdea: any) {
  idea.name = newIdea.name;
  idea.email = newIdea.email;
  idea.idea = newIdea.idea;
  idea.worth = newIdea.worth;
}

let paidAmount = ref(0);
function handlePayment(amount: number) {
  paidAmount.value = amount;
}
</script>

<template>
  <div class="flex flex-col gap-4 py-12">
    <div class="text-center flex gap-2 flex-col">
      <h1 class="text-3xl text-green-600 font-bold">Project Idea Submission</h1>
      <p class="text-lg">Do you have a great idea for an app? Submit it now!</p>
    </div>

    <IdeaForm v-if="!ideaIsValid" @idea-submitted="onSubmit" />
    <IdeaPayment
      v-if="ideaIsValid && !paidAmount"
      :idea="idea"
      @payment-submitted="handlePayment"
    />
    <PaymentSuccess v-if="paidAmount > 0" :paidAmount="paidAmount" />
  </div>
</template>
