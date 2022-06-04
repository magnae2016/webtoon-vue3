import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WebtoonView from "@/views/WebtoonView.vue";
import WeekdayView from "@/views/WeekdayView.vue";
import WeekdayListView from "@/views/WeekdayListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/webtoon",
  },
  {
    path: "/webtoon",
    name: "webtoon",
    component: WebtoonView,
    children: [
      {
        path: "",
        redirect: "/webtoon/weekday",
      },
      {
        path: "weekday",
        name: "weekday",
        component: WeekdayView,
      },
      {
        path: "weekdayList",
        name: "weekdayList",
        component: WeekdayListView,
      },
      {
        path: "genre",
        name: "genre",
        component: () => import("@/views/GenreView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
