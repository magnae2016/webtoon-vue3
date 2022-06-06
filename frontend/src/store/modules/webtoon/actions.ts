import { Commit } from "vuex";
import { fetchMonthNewWebtoon, fetchRealTimeRankChoice } from "@/api/webtoon";
import { Order } from "@/types/webtoon";
import {
  SET_REALTIME_RANK_CHOICE,
  SET_MONTH_NEW_WEBTOON,
} from "./mutation-types";

export const getRealTimeRankChoice = async ({ commit }: { commit: Commit }) => {
  const m = "list";
  const [user, update] = await Promise.all([
    fetchRealTimeRankChoice({ m, order: Order.User }),
    fetchRealTimeRankChoice({ m, order: Order.Update }),
  ]);
  const data = { user: user.data[m], update: update.data[m] };
  commit(SET_REALTIME_RANK_CHOICE, data);
};

export const getMonthNewWebtoon = async ({ commit }: { commit: Commit }) => {
  const m = "list";
  const monthNewWebtoon = await fetchMonthNewWebtoon({ m });
  commit(SET_MONTH_NEW_WEBTOON, monthNewWebtoon.data[m]);
};
