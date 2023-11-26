<script setup lang="ts">
import NavigationLabel from "@/commons/components/navigation/NavigationLabel.vue";
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <NavigationLabel v-bind="props">categories</NavigationLabel>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in ['subcategory 1', 'subcategory 2']"
        :key="index"
      >
        <NavigationLabel :to="`/category/${item}`" :size="16">
          {{ item }}
        </NavigationLabel>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
