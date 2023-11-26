<template>
  <v-layout>
    <Navigation />

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import Navigation from "@/commons/components/navigation/Navigation.vue";
</script>
