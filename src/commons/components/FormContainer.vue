<script setup lang="ts">
import FormButton from "@/commons/components/FormButton.vue";

defineProps<{
  submitButtonTitle: string;
  loading: boolean;
}>();

defineEmits<{
  (e: "submit"): void;
}>();
</script>

<template>
  <v-form class="form-container">
    <slot></slot>

    <FormButton
      class="form-container__button"
      :loading="loading"
      @click.prevent="$emit('submit')"
    >
      {{ submitButtonTitle }}
    </FormButton>

    <slot name="after-submit"></slot>
  </v-form>
</template>

<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);

  @media (min-width: 700px) {
    align-self: center;
    width: 400px;
  }

  &__button {
    margin-bottom: var(--space-12);
  }
}
</style>
