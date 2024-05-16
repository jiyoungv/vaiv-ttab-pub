export type TabInfoCategory = 'note' | 'link' | 'search' | 'image' | 'file' | 'report';

export type TabInfoNote = string;

export type TabInfoLink = string;

export type TabInfoSearch = {
  question?: string;
  answer?: {
    text?: string;
    origins?: {
      number?: number;
      text?: string;
    }[];
  };
};

export type TabInfoImage = string[];

export type TabInfoFile = string;

export type TabInfoReport = string;

export interface TabInfoData {
  category: TabInfoCategory;
  thumbnail: string;
  nickname: string;
  date: string;
  contents: {
    note?: TabInfoNote;
    link?: TabInfoLink;
    search?: TabInfoSearch;
    images?: TabInfoImage;
    file?: TabInfoFile;
    report?: TabInfoReport;
  };
  memo: string;
  keywords: string[];
  like: boolean;
  likeAmount: string;
  commentAmount: string;
  viewAmount: string;
}

export interface TabData {
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
  infos: TabInfoData[];
  mine: boolean;
  privacy: boolean;
  join: boolean;
  keywords: string[];
  thumbnail: string;
}

export interface TabPreviewInfoData {
  category: TabInfoCategory;
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