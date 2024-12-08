<script setup lang="ts">
  import CommonsLogo from '@/commons/components/CommonsLogo.vue';
</script>

<template>
  <div class="commons-navbar">
    <CommonsLogo />
    <VIcon icon="mdi-menu" size="28" />
  </div>
</template>

<style scoped>
  .commons-navbar {
    padding: var(--space-12);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
