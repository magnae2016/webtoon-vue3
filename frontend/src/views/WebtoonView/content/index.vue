<template>
  <webtoon-nav-tabs
    v-if="['weekday', 'weekdayList'].includes(String($route.name))"
  />
  <genre-nav-tabs v-else-if="String($route.name) === 'genre'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WebtoonNavTabs from "./WebtoonNavTabs.vue";
import GenreNavTabs from "./GenreNavTabs.vue";
export default defineComponent({
  components: { WebtoonNavTabs, GenreNavTabs },
});
</script>

<style></style>
