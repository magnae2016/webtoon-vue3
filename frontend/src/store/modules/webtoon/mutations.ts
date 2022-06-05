import { SET_REALTIME_RANK_CHOICE } from "./mutation-types";
import { State } from ".";
import { RealTimeRankChoiceItem } from "@/types/webtoon";

export default {
  [SET_REALTIME_RANK_CHOICE](
    state: State,
    payload: {
      user: RealTimeRankChoiceItem[];
      update: RealTimeRankChoiceItem[];
    }
  ) {
    state.realTimeRankChoice = payload;
  },
};
