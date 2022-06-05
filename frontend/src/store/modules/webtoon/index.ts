import { Module } from "vuex";
import getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";
import { State as RootState } from "@/store";
import { RealTimeRankChoiceItem } from "@/types/webtoon";

export interface State {
  all: number[];
  realTimeRankChoiceFavorite: RealTimeRankChoiceItem[];
}

// initial state
const state: State = {
  all: [1, 2, 3],
  realTimeRankChoiceFavorite: [],
};

export const webtoon: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
