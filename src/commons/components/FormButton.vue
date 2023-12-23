<script setup lang="ts">
withDefaults(
  defineProps<{
    submitType?: boolean;
    prependIcon?: string | undefined;
    loading?: boolean;
  }>(),
  {
    submitType: true,
    prependIcon: undefined,
    loading: false,
  },
);
</script>

<template>
  <v-btn
    :type="submitType && 'submit'"
    :prepend-icon="prependIcon"
    :loading="loading"
    size="large"
    class="form-button"
  >
    <slot></slot>
  </v-btn>
</template>

<style scoped lang="scss">
.form-button {
  align-self: center;
  color: var(--color-white-dark);
  width: 80%;
  background: var(--color-blue-dark);
}
</style>
