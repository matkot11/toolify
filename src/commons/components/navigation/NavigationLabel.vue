<script setup lang="ts">
import { computed } from "vue";

const { size } = withDefaults(
  defineProps<{
    size?: number;
    to?: string | undefined;
  }>(),
  {
    size: 18,
    to: undefined,
  },
);

const fontSize = computed(() => `${size}px`);
</script>

<template>
  <v-list-item
    class="navigation-label"
    active-class="navigation-label--active"
    :to="to"
    :exact="true"
  >
    <slot />
  </v-list-item>
</template>

<style scoped lang="scss">
.navigation-label {
  font-size: v-bind(fontSize);
  font-weight: var(--font-weight-semi-bold);
  letter-spacing: 1px;
  text-transform: uppercase;

  &--active {
    color: var(--color-gray);
  }
}
</style>
