import {
  CreationItem,
  Order,
  RealTimeRankChoiceResponse,
} from "@/types/webtoon";
import { AxiosPromise } from "axios";
import { webtoon } from "./instance";

const api = {
  realTimeRankChoice: "/realTimeRankChoice",
  monthNewWebtoon: "/monthNewWebtoon",
};

export function fetchRealTimeRankChoice(params: {
  m?: string;
  order: Order;
}): AxiosPromise<RealTimeRankChoiceResponse> {
  return webtoon.get(api.realTimeRankChoice, { params });
}

export function fetchMonthNewWebtoon(params: {
  m?: string;
}): AxiosPromise<{ list: CreationItem[] }> {
  return webtoon.get(api.monthNewWebtoon, { params });
}
