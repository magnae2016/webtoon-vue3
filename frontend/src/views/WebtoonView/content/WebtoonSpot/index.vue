<template>
  <weekday-view v-if="routeName === 'weekday'"></weekday-view>
  <weekday-list-view
    v-else-if="routeName === 'weekdayList'"
  ></weekday-list-view>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import WeekdayView from "./WeekdayView.vue";
import WeekdayListView from "./WeekdayListView.vue";

export default defineComponent({
  components: { WeekdayView, WeekdayListView },
  setup() {
    const route = useRoute();
    const routeName = computed(() => route.name);

    return { routeName };
  },
});
</script>

<style></style>
