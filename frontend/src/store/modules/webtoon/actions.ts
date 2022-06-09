import { Commit } from "vuex";
import {
  fetchAllWebtoons,
  fetchMonthNewWebtoon,
  fetchRealTimeRankChoice,
  fetchWebtoonsByGenre,
  fetchWeekdayRecommendWebtoon,
} from "@/api/webtoon";
import { Order, Weekday } from "@/types/webtoon";
import {
  SET_REALTIME_RANK_CHOICE,
  SET_MONTH_NEW_WEBTOON,
  SET_WEEKDAY_RECOMMEND_WEBTOON,
  SET_ALL_WEBTOONS,
  SET_WEBTOONS_BY_GENRE,
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

export const getWeekdayRecommendWebtoon = async (
  {
    commit,
  }: {
    commit: Commit;
  },
  { week }: { week: Weekday }
) => {
  const m = "list";
  const weekdayRecommendWebtoon = await fetchWeekdayRecommendWebtoon({
    m,
    week,
  });
  commit(SET_WEEKDAY_RECOMMEND_WEBTOON, weekdayRecommendWebtoon.data[m]);
};

export const getAllWebtoons = async ({ commit }: { commit: Commit }) => {
  const m = "list";
  const allWebtoons = await fetchAllWebtoons({
    m,
  });
  commit(SET_ALL_WEBTOONS, allWebtoons.data[m]);
};

export const getWebtoonsByGenre = async ({ commit }: { commit: Commit }) => {
  const m = "list";
  const webtoonsByGenre = await fetchWebtoonsByGenre({
    m,
  });
  commit(SET_WEBTOONS_BY_GENRE, webtoonsByGenre.data[m]);
};
