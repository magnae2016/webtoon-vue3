<template>
  <webtoon-nav-tabs
    v-if="['weekday', 'weekdayList'].includes(String($route.name))"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WebtoonNavTabs from "./WebtoonNavTabs.vue";
export default defineComponent({
  components: { WebtoonNavTabs },
});
</script>

<style></style>
