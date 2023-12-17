<template>
  <v-layout class="view">
    <Navigation />

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Navigation from "@/commons/components/navigation/Navigation.vue";
</script>

<style scoped lang="scss">
.view {
  @media (min-width: 1400px) {
    margin: 0 300px;
  }
}
</style>
