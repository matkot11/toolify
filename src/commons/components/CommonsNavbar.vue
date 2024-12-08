<script setup lang="ts">
  import CommonsLogo from '@/commons/components/CommonsLogo.vue';
  import {ref} from 'vue';

  const isDrawerOpen = ref(false);
</script>

<template>
  <VAppBar flat>
    <VToolbarTitle>
      <CommonsLogo />
    </VToolbarTitle>

    <VSpacer />

    <VToolbarItems v-if="$vuetify.display.mdAndUp">
      <VBtn to="/">Home</VBtn>
      <VBtn to="/sign-up">Sign up</VBtn>
      <VBtn to="/sign-in">Sign in</VBtn>
    </VToolbarItems>

    <VAppBarNavIcon v-if="$vuetify.display.smAndDown" @click="isDrawerOpen = !isDrawerOpen" />
  </VAppBar>

  <VNavigationDrawer v-model="isDrawerOpen" location="end" temporary>
    <VList>
      <VListItem to="/">Home</VListItem>
      <VListItem to="/sign-up">Sign up</VListItem>
      <VListItem to="/sign-in">Sign in</VListItem>
    </VList>
  </VNavigationDrawer>
</template>
