<template>
  <div class="navigation-logo__wrapper">
    <v-icon icon="mdi-hammer-wrench" size="24" />
    <h1 class="navigation-logo__title">toolify</h1>
  </div>
</template>

<style scoped lang="scss">
.navigation-logo {
  &__wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  &__title {
    font-size: var(--font-size-24);
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}
</style>
