<template>
  <slot name="weekday"></slot>
  <router-link
    v-for="(route, index) in routes"
    :key="index"
    :to="route.to"
    custom
    v-slot="{ href, navigate }"
  >
    <slot :item="route" :href="href" :navigate="navigate"></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["routes"],
});
</script>

<style></style>
