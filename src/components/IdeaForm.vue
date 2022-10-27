<script setup lang="ts">
import { ref } from "vue";

let name = ref("");
let email = ref("");
let idea = ref("");
let worth = ref(0);
let invalid = ref(false);

const emit = defineEmits(["idea-submitted"]);

function reset() {
  name.value = "";
  email.value = "";
  idea.value = "";
  worth.value = 0;
}

function onSubmit() {
  if (
    name.value === "" ||
    email.value === "" ||
    idea.value === "" ||
    worth.value < 1
  ) {
    invalid.value = true;
    return;
  }
  invalid.value = false;
  const newIdea = {
    name: name.value,
    email: email.value,
    idea: idea.value,
    worth: worth.value,
  };

  emit("idea-submitted", newIdea);
  reset();
}
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center w-full h-full">
    <form class="flex items-start flex-col gap-4" @submit.prevent="onSubmit">
      <label for="name">Name</label>
      <input
        class="border border-gray-300 rounded-l py-3 px-2 text-lg"
        type="text"
        id="name"
        name="name"
        v-model="name"
      />
      <label for="email">Email</label>
      <input
        class="border border-gray-300 rounded-lg py-3 px-2 text-lg"
        type="email"
        id="email"
        name="email"
        v-model="email"
      />
      <label for="idea">Idea</label>
      <textarea
        class="border border-gray-300 rounded-lg py-3 px-2 text-lg"
        id="idea"
        name="idea"
        rows="4"
        v-model="idea"
      />
      <label for="worth"> How much is the idea worth in $? </label>
      <input
        class="border border-gray-300 rounded-lg py-3 px-2 text-lg"
        type="number"
        name="worth"
        id="worth"
        v-model="worth"
      />
      <button
        class="bg-green-100 py-4 px-6 font-bold text-black rounded-full shadow-lg hover:bg-green-200 transition"
        type="submit"
      >
        Submit
      </button>
    </form>
    <p v-if="invalid" class="text-red-500">
      Please fill out all fields and make sure the worth is greater than 0.
    </p>
  </div>
</template>
