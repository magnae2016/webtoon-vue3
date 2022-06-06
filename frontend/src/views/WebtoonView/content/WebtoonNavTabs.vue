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
export default defineComponent({
  components: { NavTabs },
  data() {
    return {
      linkActiveClass: "on",
      routes: [
        {
          to: { name: "weekdayList", query: { week: "mon" } },
          week: "mon",
          text: "월요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: "tue" } },
          week: "tue",
          text: "화요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: "wed" } },
          week: "wed",
          text: "수요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: "thu" } },
          week: "thu",
          text: "목요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: "fri" } },
          week: "fri",
          text: "금요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: "sat" } },
          week: "sat",
          text: "토요웹툰",
        },
        {
          to: { name: "weekdayList", query: { week: "sun" } },
          week: "sun",
          text: "일요웹툰",
        },
      ],
    };
  },
});
</script>

<style></style>
