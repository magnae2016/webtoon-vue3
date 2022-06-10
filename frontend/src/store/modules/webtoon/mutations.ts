import {
  SET_ALL_WEBTOONS,
  SET_MONTH_NEW_WEBTOON,
  SET_REALTIME_RANK_CHOICE,
  SET_WEBTOONS_BY_GENRE,
  SET_WEEKDAY_RECOMMEND_WEBTOON,
} from "./mutation-types";
import { State } from ".";
import {
  CreationItem,
  Genres,
  IRealTimeRankChoice,
  Weekday,
} from "@/types/webtoon";

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
  [SET_WEBTOONS_BY_GENRE](
    state: State,
    payload: Record<keyof typeof Genres, CreationItem[]>
  ) {
    state.webtoonsByGenre = payload;
  },
};
