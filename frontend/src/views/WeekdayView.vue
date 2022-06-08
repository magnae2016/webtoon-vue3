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
  <div class="list_area daily_all">
    <div v-for="week in Weekday" :key="week" class="col">
      <div class="col_inner">
        <h4 :class="week"><span>월요 웹툰</span></h4>
        <weekday-list-area :week="week">
          <template v-slot="slotProps">
            <div class="thumb">
              <a href="#">
                <img
                  :src="`https://shared-comic.pstatic.net/thumb/webtoon/${slotProps.webtoon.titleId}/thumbnail/${slotProps.webtoon.thumbnailFilename}`"
                  width="83"
                  height="90"
                  :title="slotProps.webtoon.titleName"
                  :alt="slotProps.webtoon.titleName"
                /><span class="mask"></span>
              </a>
            </div>
            <a href="#" class="title" :title="slotProps.webtoon.titleName">{{
              slotProps.webtoon.titleName
            }}</a>
          </template>
        </weekday-list-area>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubTitle from "@/components/ui/SubTitle.vue";
import WeekdayListArea from "./WeekdayListArea.vue";
import { Weekday } from "@/types/webtoon";
export default defineComponent({
  name: "WeekdayView",
  components: { SubTitle, WeekdayListArea },
  setup() {
    return { Weekday };
  },
});
</script>

<style></style>
