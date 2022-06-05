export enum Order {
  User = "User",
  Update = "Update",
}

export interface WebtoonItem {
  ageGroupCode: string;
  ageGroupName: string;
  beforeRank: number;
  fileName: string;
  filePath: string;
  levelCode: string;
  maxNo: number;
  no: number;
  notExistRank: string;
  painter: string;
  painterBy15: string;
  rank: number;
  sequence: number;
  subtitle: string;
  titleId: number;
  titleName: string;
  titleNameBy13: string;
}

export type RealTimeRankChoiceItem = Pick<
  WebtoonItem,
  "beforeRank" | "painter" | "rank" | "subtitle" | "titleId" | "titleName"
>;

export interface RealTimeRankChoiceResponse {
  list: RealTimeRankChoiceItem[];
}
