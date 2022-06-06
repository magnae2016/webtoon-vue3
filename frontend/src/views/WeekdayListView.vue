<template>
  <div>WeekdayListView</div>
  <p>{{ $route.query.week }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { useStore } from "@/store";
export default defineComponent({
  name: "WeekdayListView",
  setup() {
    const store = useStore();
    onBeforeRouteUpdate((to) => {
      const { week } = to.query;
      store.dispatch("webtoon/getWeekdayRecommendWebtoon", { week });
    });
  },
});
</script>

<style></style>
