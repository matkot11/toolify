<template>
  <div class="logo">
    <VIcon icon="mdi-hammer-wrench" />
    <h1 class="logo__title">Toolify</h1>
  </div>
</template>

<style scoped lang="scss">
  .logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);

    &__title {
      font-size: var(--font-size-24);
      font-family: 'Arapey', serif;
      font-weight: var(--font-weight-400);
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
</style>
