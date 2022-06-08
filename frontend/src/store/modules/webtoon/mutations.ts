import {
  SET_ALL_WEBTOONS,
  SET_MONTH_NEW_WEBTOON,
  SET_REALTIME_RANK_CHOICE,
  SET_WEEKDAY_RECOMMEND_WEBTOON,
} from "./mutation-types";
import { State } from ".";
import { CreationItem, IRealTimeRankChoice, Weekday } from "@/types/webtoon";

export default {
  [SET_REALTIME_RANK_CHOICE](state: State, payload: IRealTimeRankChoice) {
    state.realTimeRankChoice = payload;
  },
  [SET_MONTH_NEW_WEBTOON](state: State, payload: CreationItem[]) {
    state.monthNewWebtoon = payload;
  },
  [SET_WEEKDAY_RECOMMEND_WEBTOON](state: State, payload: CreationItem[]) {
    state.weekdayRecommendWebtoon = payload;
  },
  [SET_ALL_WEBTOONS](
    state: State,
    payload: { [key in Weekday]: CreationItem[] }
  ) {
    state.allWebtoons = payload;
  },
};
