export type TabCategory = 'note' | 'link' | 'search' | 'image' | 'file' | 'report';

export interface TabPreviewInfoData {
  category: TabCategory;
  note?: string;
  link?: string;
  search?: {
    question?: string;
    answer?: string;
  };
  image?: string;
  file?: string;
  report?: string;
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
  category: TabCategory;
  thumbNail: string;
  nickname: string;
  date: string;
  contents: {
    note?: string;
    link?: string;
    search?: {
      question?: string;
      answer?: string;
    };
    images?: string[];
    file?: string;
    report?: string;
  };
  memo: string;
  keywords: string[];
  like: boolean;
  likeAmount: string;
  commentAmount: string;
  viewAmount: string;
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