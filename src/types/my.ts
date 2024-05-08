export interface MyCommentData {
  link: string;
  comment: string;
  date: string;
  time: string;
  tabName: string;
};

export interface MyJoinTabData {
  link: string;
  title: string;
  subText: string;
  join: boolean;
};

export interface MyNoticeData {
  link: string;
  title: string;
  date: string;
  new?: boolean;
};

export interface MyFAQData {
  category: string;
  title: string;
  description: string;
};