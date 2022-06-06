<template>
  <webtoon-nav-tabs
    v-if="['weekday', 'weekdayList'].includes(String($route.name))"
  />
  <genre-nav-tabs v-else-if="String($route.name) === 'genre'" />
  <template v-if="String($route.name) != 'genre'">
    <webtoon-spot />
    <ad-banner-premium />
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WebtoonNavTabs from "./WebtoonNavTabs.vue";
import GenreNavTabs from "./GenreNavTabs.vue";
import WebtoonSpot from "./WebtoonSpot.vue";
import AdBannerPremium from "./AdBannerPremium.vue";
export default defineComponent({
  components: { WebtoonNavTabs, GenreNavTabs, WebtoonSpot, AdBannerPremium },
});
</script>

<style></style>
