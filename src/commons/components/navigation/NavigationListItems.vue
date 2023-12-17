<script setup lang="ts">
import NavigationDropdownMenu from "@/commons/components/navigation/NavigationDropdownMenu.vue";
import NavigationLabel from "@/commons/components/navigation/NavigationLabel.vue";
</script>

<template>
  <v-list>
    <NavigationLabel to="/">home</NavigationLabel>
    <NavigationDropdownMenu />
    <NavigationLabel to="/sign-up">sign up</NavigationLabel>
    <NavigationLabel to="/sign-in">sign in</NavigationLabel>
  </v-list>
</template>
