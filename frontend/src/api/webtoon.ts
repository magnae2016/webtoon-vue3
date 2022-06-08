import {
  CreationItem,
  Order,
  RealTimeRankChoiceResponse,
  Weekday,
} from "@/types/webtoon";
import { AxiosPromise } from "axios";
import { webtoon } from "./instance";

const api = {
  realTimeRankChoice: "/realTimeRankChoice",
  monthNewWebtoon: "/monthNewWebtoon",
  weekdayRecommendWebtoon: "/weekdayRecommendWebtoon",
  allWebtoons: "/allWebtoons",
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

export function fetchWeekdayRecommendWebtoon(params: {
  m?: string;
  week: Weekday;
}): AxiosPromise<{ list: CreationItem[] }> {
  return webtoon.get(api.weekdayRecommendWebtoon, { params });
}

export function fetchAllWebtoons(params: {
  m?: string;
}): AxiosPromise<{ list: { [key in Weekday]: CreationItem[] } }> {
  return webtoon.get(api.allWebtoons, { params });
}
