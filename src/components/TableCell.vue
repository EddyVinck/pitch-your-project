<script setup lang="ts">
withDefaults(defineProps<{ elem?: string }>(), {
  elem: "td",
});
</script>

<template>
  <component
    :is="elem"
    :class="[
      elem === 'td' ? 'bg-white' : '',
      'border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400',
    ]"
  >
    <slot />
  </component>
</template>
