<script setup lang="ts">
defineProps<{
  signIn: boolean;
}>();
</script>

<template>
  <span class="switch-authentication-view__info">
    {{ signIn ? "Already have an account?" : "Do not have an account?" }}
  </span>
  <v-btn
    class="switch-authentication-view__button"
    size="large"
    :to="signIn ? '/sign-in' : '/sign-up'"
  >
    {{ signIn ? "Sign in" : "Sign up" }}
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
