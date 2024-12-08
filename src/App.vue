<script setup lang="ts">
  import {RouterView} from 'vue-router';
  import CommonsNavbar from '@/commons/components/CommonsNavbar.vue';
</script>

<template>
  <VLayout>
    <CommonsNavbar />

    <VMain>
      <RouterView />
    </VMain>
  </VLayout>
</template>
