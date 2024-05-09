export type TabCategory = 'note' | 'link' | 'search' | 'image' | 'file' | 'report';

export interface TabPreviewInfoData {
  category: TabCategory;
  text?: string;
  src?: string;
  question?: string;
  answer?: string;
}

export interface TabPreviewData {
  id: number;
  title: string;
  subText: string;
  nickname: string;
  joinAmount: number;
  date: string;
  likeAmount: string;
  commentAmount: string;
  viewAmount: string;
  like: boolean;
  bookmark: boolean;
  infos: TabPreviewInfoData[];
  infosRestAmount?: number;
}

export interface TabDetailInfoData {

}

export interface TabDetailData {
  id: number;
  title: string;
  subText: string;
  nickname: string;
  joinAmount: number;
  date: string;
  likeAmount: string;
  commentAmount: string;
  viewAmount: string;
  like: boolean;
  bookmark: boolean;
  infos: TabDetailInfoData[];
  mine: boolean;
  privacy: boolean;
  join: boolean;
  keywords: string[];
  thumbNail: string;
}