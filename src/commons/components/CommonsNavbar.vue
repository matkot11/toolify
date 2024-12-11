<script setup lang="ts">
  import CommonsLogo from '@/commons/components/CommonsLogo.vue';
  import {ref} from 'vue';

  const isDrawerOpen = ref(false);
</script>

<template>
  <VAppBar flat class="commons-navbar">
    <VToolbarTitle>
      <CommonsLogo />
    </VToolbarTitle>

    <VToolbarItems v-if="$vuetify.display.mdAndUp" variant="text" class="commons-navbar__toolbar-items">
      <VBtn to="/">Home</VBtn>
      <VBtn to="/sign-up">Sign up</VBtn>
      <VBtn to="/sign-in">Sign in</VBtn>
    </VToolbarItems>

    <VAppBarNavIcon v-if="$vuetify.display.smAndDown" @click="isDrawerOpen = !isDrawerOpen" />
  </VAppBar>

  <VNavigationDrawer v-model="isDrawerOpen" location="end" temporary>
    <VList class="commons-navbar__drawer-list">
      <VListItem to="/">Home</VListItem>
      <VListItem to="/sign-up">Sign up</VListItem>
      <VListItem to="/sign-in">Sign in</VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped lang="scss">
  .commons-navbar {
    &__toolbar-items {
      height: var(--font-size-32);
      align-self: center;
    }

    &__drawer-list {
      padding-top: 0;
    }
  }
</style>
