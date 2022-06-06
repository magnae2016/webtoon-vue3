<template>
  <weekday-view v-if="routeName === 'weekday'"></weekday-view>
  <weekday-list-view
    v-else-if="routeName === 'weekdayList'"
  ></weekday-list-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import WeekdayView from "./WeekdayView.vue";
import WeekdayListView from "./WeekdayListView.vue";

export default defineComponent({
  components: { WeekdayView, WeekdayListView },
  setup() {
    const routeName = ref("weekday");

    onBeforeRouteUpdate((to) => {
      routeName.value = String(to.name);
    });
    return { routeName };
  },
});
</script>

<style></style>
