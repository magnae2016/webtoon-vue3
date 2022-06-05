import { SET_REALTIME_RANK_CHOICE_FAVORITE } from "./mutation-types";
import { State } from ".";
import { RealTimeRankChoiceItem } from "@/types/webtoon";

export default {
  [SET_REALTIME_RANK_CHOICE_FAVORITE](
    state: State,
    payload: RealTimeRankChoiceItem[]
  ) {
    state.realTimeRankChoiceFavorite = payload;
  },
};
