<template>
  <div class="view_type">
    <sub-title>요일별 전체 웹툰</sub-title>
    <ul class="sortby">
      <li class="sel">
        <a href=""><span class="Ntxt_popular">인기순</span></a>
      </li>
      <li>
        <a href=""><span class="Ntxt_update">업데이트순</span></a>
      </li>
      <li>
        <a href=""><span class="Ntxt_count">조회순</span></a>
      </li>
      <li>
        <a href=""><span class="Ntxt_star_rate">별점순</span></a>
      </li>
    </ul>
  </div>
  <div class="list_area daily_img">
    <weekday-list-area v-if="week" :week="week">
      <template v-slot="slotProps">
        <img-list-item :webtoon="slotProps.webtoon"></img-list-item>
      </template>
    </weekday-list-area>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useStore } from "@/store";
import SubTitle from "@/components/ui/SubTitle.vue";
import WeekdayListArea from "./WeekdayListArea.vue";
import ImgListItem from "@/components/ui/ImgListItem.vue";
import { Weekday } from "@/types/webtoon";
export default defineComponent({
  name: "WeekdayListView",
  components: { SubTitle, WeekdayListArea, ImgListItem },
  setup() {
    const store = useStore();
    const route = useRoute();

    const week = computed(() => route.query.week as Weekday);
    onBeforeRouteUpdate((to) => {
      const { week } = to.query;
      store.dispatch("webtoon/getWeekdayRecommendWebtoon", { week });
    });
    return { week };
  },
});
</script>

<style></style>
