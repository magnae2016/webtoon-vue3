<template>
  <div id="wrap">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/layout/AppHeader.vue";
export default {
  components: { AppHeader },
};
</script>

<style></style>
