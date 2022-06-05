import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from "vuex";
import { State as WebtoonState, webtoon } from "./modules/webtoon";

// define typings for the store state
export interface State {
  count: number;
  webtoon: WebtoonState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: { webtoon },
  state: {
    count: 0,
  } as State,
  plugins: [createLogger()],
  strict: true,
});

export function useStore() {
  return baseUseStore(key);
}
