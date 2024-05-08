export type TabCategory = 'note' | 'link' | 'search' | 'image' | 'file' | 'report';

export interface TabContentsData {
  category: TabCategory;
  src?: string;
  text?: string;
  question?: string;
  answer?: string;
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
  contents: TabContentsData[];
  contentsRestAmount?: number;
};
