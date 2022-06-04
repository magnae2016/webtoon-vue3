import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WeekdayView from "@/views/WeekdayView.vue";
import WeekdayListView from "@/views/WeekdayListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/weekday",
    name: "weekday",
    component: WeekdayView,
  },
  {
    path: "/weekdayList",
    name: "weekdayList",
    component: WeekdayListView,
  },
  {
    path: "/genre",
    name: "genre",
    // route level code-splitting
    component: () => import("@/views/GenreView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;
