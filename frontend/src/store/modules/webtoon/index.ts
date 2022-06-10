import { Module } from "vuex";
import getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";
import { State as RootState } from "@/store";
import { CreationItem, G, IRealTimeRankChoice, Weekday } from "@/types/webtoon";

export interface State {
  all: number[];
  realTimeRankChoice: IRealTimeRankChoice;
  monthNewWebtoon: CreationItem[];
  weekdayRecommendWebtoon: CreationItem[];
  allWebtoons: { [key in Weekday]: CreationItem[] };
  webtoonsByGenre: Record<G, CreationItem[]>;
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
    episode: [],
    omnibus: [],
    story: [],
    daily: [],
    comic: [],
    fantasy: [],
    action: [],
    drama: [],
    pure: [],
    sensibility: [],
    thrill: [],
    historical: [],
    sports: [],
  },
};

export const webtoon: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
