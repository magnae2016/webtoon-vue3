import { SET_REALTIME_RANK_CHOICE } from "./mutation-types";
import { State } from ".";
import { IRealTimeRankChoice } from "@/types/webtoon";

export default {
  [SET_REALTIME_RANK_CHOICE](state: State, payload: IRealTimeRankChoice) {
    state.realTimeRankChoice = payload;
  },
};
