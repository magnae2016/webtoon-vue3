import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WebtoonView from "@/views/WebtoonView/index.vue";
import WeekdayView from "@/views/WeekdayView.vue";
import WeekdayListView from "@/views/WeekdayListView.vue";
import { store } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/webtoon",
  },
  {
    path: "/webtoon",
    name: "webtoon",
    component: WebtoonView,
    beforeEnter: () => {
      store.dispatch("webtoon/getAllWebtoons");
      return true;
    },
    children: [
      {
        path: "",
        redirect: "/webtoon/weekday",
      },
      {
        path: "weekday",
        name: "weekday",
        component: WeekdayView,
        beforeEnter: () => {
          store.dispatch("webtoon/getMonthNewWebtoon");
          return true;
        },
      },
      {
        path: "weekdayList",
        name: "weekdayList",
        component: WeekdayListView,
        beforeEnter: (to, from, next) => {
          const { week } = to.query;
          store.dispatch("webtoon/getWeekdayRecommendWebtoon", { week });
          next();
        },
      },
      {
        path: "genre",
        name: "genre",
        component: () => import("@/views/GenreView.vue"),
        beforeEnter: () => {
          store.dispatch("webtoon/getWebtoonsByGenre");
          return true;
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
