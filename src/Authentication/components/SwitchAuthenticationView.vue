<script setup lang="ts">
defineProps<{
  signUp: boolean;
}>();
</script>

<template>
  <span class="switch-authentication-view__info">
    {{ signUp ? "Already have an account?" : "Do not have an account?" }}
  </span>
  <v-btn
    class="switch-authentication-view__button"
    size="large"
    :to="signUp ? '/sign-in' : '/sign-up'"
  >
    {{ signUp ? "Sign in" : "Sign up" }}
  </v-btn>
</template>

<style scoped lang="scss">
.switch-authentication-view {
  &__info {
    margin-bottom: var(--space-4);
    color: var(--color-gray);
  }

  &__button {
    align-self: center;
    color: var(--color-blue-dark);
    width: 80%;
    background: var(--color-white-dark);
  }
}
</style>
