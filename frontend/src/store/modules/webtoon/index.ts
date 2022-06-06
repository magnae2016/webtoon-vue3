import { Module } from "vuex";
import getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";
import { State as RootState } from "@/store";
import { CreationItem, IRealTimeRankChoice } from "@/types/webtoon";

export interface State {
  all: number[];
  realTimeRankChoice: IRealTimeRankChoice;
  monthNewWebtoon: CreationItem[];
  weekdayRecommendWebtoon: CreationItem[];
}

// initial state
const state: State = {
  all: [1, 2, 3],
  realTimeRankChoice: { user: [], update: [] },
  monthNewWebtoon: [],
  weekdayRecommendWebtoon: [],
};

export const webtoon: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
