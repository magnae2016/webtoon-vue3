import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from "vuex";

// define typings for the store state
export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [createLogger()],
  strict: true,
});

export function useStore() {
  return baseUseStore(key);
}
