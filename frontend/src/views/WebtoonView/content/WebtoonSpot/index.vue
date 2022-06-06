<template>
  <weekday-view></weekday-view>
  <weekday-list-view></weekday-list-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeekdayView from "./WeekdayView.vue";
import WeekdayListView from "./WeekdayListView.vue";

export default defineComponent({
  components: { WeekdayView, WeekdayListView },
});
</script>

<style></style>
