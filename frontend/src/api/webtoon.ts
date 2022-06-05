import { Order, RealTimeRankChoiceResponse } from "@/types/webtoon";
import { AxiosPromise } from "axios";
import { webtoon } from "./instance";

const api = {
  realTimeRankChoice: "/realTimeRankChoice",
};

export function fetchRealTimeRankChoice(params: {
  m?: string;
  order: Order;
}): AxiosPromise<RealTimeRankChoiceResponse> {
  return webtoon.get(api.realTimeRankChoice, { params });
}
