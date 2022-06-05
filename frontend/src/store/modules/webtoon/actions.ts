import { Commit } from "vuex";
import { fetchRealTimeRankChoice } from "@/api/webtoon";
import { Order } from "@/types/webtoon";
import { SET_REALTIME_RANK_CHOICE_FAVORITE } from "./mutation-types";

export const getRealTimeRankChoiceFavorite = async ({
  commit,
}: {
  commit: Commit;
}) => {
  const { data } = await fetchRealTimeRankChoice({ order: Order.User });
  commit(SET_REALTIME_RANK_CHOICE_FAVORITE, data.list);
};
