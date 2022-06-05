import { Module } from "vuex";
import { State as RootState } from "@/store";

export interface State {
  all: number[];
}

// initial state
const state: State = {
  all: [1, 2, 3],
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {};

export const webtoon: Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
