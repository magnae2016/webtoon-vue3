<template>
  <ul class="category_tab">
    <nav-tabs :routes="routes">
      <template v-slot:weekday>
        <router-link
          to="/webtoon/weekday"
          custom
          v-slot="{ href, navigate, isExactActive }"
        >
          <li :class="[isExactActive && 'on']">
            <a :href="href" @click="navigate">요일전체</a>
          </li>
        </router-link>
      </template>
      <template v-slot="slotProps">
        <li
          :class="[
            $route.query.week === slotProps.item.week && linkActiveClass,
          ]"
        >
          <a :href="slotProps.href" @click="slotProps.navigate">{{
            slotProps.item.text
          }}</a>
        </li>
      </template>
    </nav-tabs>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavTabs from "@/components/ui/NavTabs.vue";
import { Weekday } from "@/types/webtoon";
export default defineComponent({
  components: { NavTabs },
  data() {
    return {
      linkActiveClass: "on",
      routes: [
        {
          to: { name: "weekdayList", query: { week: Weekday.mon } },
          week: Weekday.mon,
          text: "월요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: Weekday.tue } },
          week: Weekday.tue,
          text: "화요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: Weekday.wed } },
          week: Weekday.wed,
          text: "수요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: Weekday.thu } },
          week: Weekday.thu,
          text: "목요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: Weekday.fri } },
          week: Weekday.fri,
          text: "금요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: Weekday.sat } },
          week: Weekday.sat,
          text: "토요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: Weekday.sun } },
          week: Weekday.sun,
          text: "일요웹툰",
        },
      ],
    };
  },
});
</script>

<style></style>
