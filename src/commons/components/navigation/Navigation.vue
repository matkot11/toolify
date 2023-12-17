<script setup lang="ts">
import NavigationListItems from "@/commons/components/navigation/NavigationListItems.vue";
import NavigationLogo from "@/commons/components/navigation/NavigationLogo.vue";
import { ref } from "vue";

const drawer = ref(false);
</script>

<template>
  <v-app-bar flat>
    <template #prepend>
      <NavigationLogo />
    </template>

    <template #append>
      <v-app-bar-nav-icon
        class="navigation__hamburger-icon"
        @click.stop="drawer = !drawer"
      />

      <NavigationListItems class="navigation__list-items" />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <NavigationListItems />
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.navigation {
  &__hamburger-icon {
    @media (min-width: 700px) {
      display: none;
    }
  }

  &__list-items {
    display: flex;

    @media (max-width: 700px) {
      display: none;
    }
  }
}
</style>
