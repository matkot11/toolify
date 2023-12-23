<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string | null;
  }>(),
  {
    title: null,
  },
);
</script>

<template>
  <div class="page-container">
    <h2 v-if="title" class="page-container__title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;

  &__title {
    margin: var(--space-16) 0;
    align-self: center;
  }
}
</style>
