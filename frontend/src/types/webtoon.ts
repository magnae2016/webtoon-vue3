export enum Weekday {
  mon = "mon",
  tue = "tue",
  wed = "wed",
  thu = "thu",
  fri = "fri",
  sat = "sat",
  sun = "sun",
}

export enum Order {
  User = "User",
  Update = "Update",
}

export enum ArrowType {
  arrow_no = "변동없음",
  arrow_up = "순위상승",
  arrow_down = "순위하락",
}

export enum WebtoonViewerType {
  DEFAULT = 1,
  CUTTOON = 2,
  SHORTANI = 3,
}

export enum Genres {
  episode = "에피소드",
  omnibus = "옴니버스",
  story = "스토리",
  daily = "일상",
  comic = "개그",
  fantasy = "판타지",
  action = "액션",
  drama = "드라마",
  pure = "순정",
  sensibility = "감성",
  thrill = "스릴러",
  historical = "무협/사극",
  sports = "스포츠",
}

export type G = keyof typeof Genres;

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

export type CreationItem = {
  id: number;
  randId: number;
  titleId: number;
  titleName: string;
  writer: string;
  genre1: number;
  genre2: number;
  thumbnailFilename: string;
  weekdayYN: string;
  ageRate: number;
  webtoonViewerType: number;
  starscoreToPercent: number;
  starscoreViewFormat: string;
  copy: string;
  newYN: string;
  restYN: string;
  finished: string;
};

export interface IRealTimeRankChoice {
  user: RealTimeRankChoiceItem[];
  update: RealTimeRankChoiceItem[];
}

export type RealTimeRankChoiceItem = Pick<
  WebtoonItem,
  "beforeRank" | "painter" | "rank" | "subtitle" | "titleId" | "titleName"
>;

export interface RealTimeRankChoiceResponse {
  list: RealTimeRankChoiceItem[];
}
