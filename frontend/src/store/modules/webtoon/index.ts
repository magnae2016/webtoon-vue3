import { Module } from "vuex";
import getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";
import { State as RootState } from "@/store";
import {
  CreationItem,
  Genres,
  IRealTimeRankChoice,
  Weekday,
} from "@/types/webtoon";

export interface State {
  all: number[];
  realTimeRankChoice: IRealTimeRankChoice;
  monthNewWebtoon: CreationItem[];
  weekdayRecommendWebtoon: CreationItem[];
  allWebtoons: { [key in Weekday]: CreationItem[] };
  webtoonsByGenre: { [key in Genres]: CreationItem[] };
}

// initial state
const state: State = {
  all: [1, 2, 3],
  realTimeRankChoice: { user: [], update: [] },
  monthNewWebtoon: [],
  weekdayRecommendWebtoon: [],
  allWebtoons: {
    [Weekday.mon]: [],
    [Weekday.tue]: [],
    [Weekday.wed]: [],
    [Weekday.thu]: [],
    [Weekday.fri]: [],
    [Weekday.sat]: [],
    [Weekday.sun]: [],
  },
  webtoonsByGenre: {
    [Genres.episode]: [],
    [Genres.omnibus]: [],
    [Genres.story]: [],
    [Genres.daily]: [],
    [Genres.comic]: [],
    [Genres.fantasy]: [],
    [Genres.action]: [],
    [Genres.drama]: [],
    [Genres.pure]: [],
    [Genres.sensibility]: [],
    [Genres.thrill]: [],
    [Genres.historical]: [],
    [Genres.sports]: [],
  },
};

export const webtoon: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
