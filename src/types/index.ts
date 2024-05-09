export interface NotificationData {
  link: string;
  image: string;
  nickname: string;
  ttabName: string;
  date: string;
  requestJoin?: boolean;
  like?: boolean;
  comment?: boolean;
  report?: boolean;
  unchecked?: boolean;
}

export interface RecentSearchData {
  link: string;
  keyword: string;
}