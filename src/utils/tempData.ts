import { TabPreviewData, TabData } from '@/types/tab';

export const tempTabNoteData = '노트입니다. 컨텐츠들이랑 메모들 엔터 처리를 [태그, \\n, 공백... ] 이중 어떻게 하실지 몰라서 그냥 일단 놔뒀어요 나중에 알려주시면 수정할게요';

export const tempTabLinkData = 'https://www.google.com/domain만 보여주기로 했었던 것 같은데...';

export const tempTabSearchData = {
  question: 'AI 검색 질문입니다.',
  answer: {
    text: `요즘 인기 있는 스마트폰 애플리케이션으로는 &apos;분초사회&apos;에 맞는 15~20분짜리 영상을 줄글로 빠르게 요약해주는 애플리케이션이 있습니다.<span className="text-primary-400">[1]</span> 또한, 가상의 펫을 키울 수 있는 &apos;펫키우기 헬로펫&apos;과 비디오 편집과 관련된 &apos;키네마스터&apos; 등이 있습니다. 또한, 부동산 관련 애플리케이션인 &apos;피터팬의 좋은방 구하기&apos;와 MZ벨소리 설정을 도와주는 &apos;꿀팁 요즘 유행하는 MZ벨소리 빵빵&apos;도 인기가 있습니다.<span className="text-teal-500">[2]</span> <span className="text-blue-500">[3]</span>`,
    origins: [
      {
        number: 1,
        text: '“유튜브 2배속도 이젠 지루해” 유튜브 영상들 AI로 줄글로 압축하고 있습니다. 신기하죠? 신기하죠? 신기하죠? 신기하죠? 신기하죠? 신기하죠?',
      },
      {
        number: 2,
        text: '원문 링크 제목입니다.',
      },
      {
        number: 3,
        text: '원문 링크 제목입니다.',
      },
    ],
  },
};

export const tempTabImageData = [
  '/images/temp/temp1.jpg',
  '/images/temp/temp2.jpg',
  '/images/temp/temp3.png',
  '/images/temp/temp1.jpg',
  '/images/temp/temp2.jpg',
  '/images/temp/temp3.png',
];

export const tempTabInfoFileData = '파일명_파일명_파일명_파일명_파일명_파일명_파일명_파일명_파일명_파일명.pdf';

export const tempTabReportData = '리포트는 이번에 안하나봐요...';

export const tempTabData: TabData = {
  id: 1,
  title: '타이틀이 한줄이면 이렇게.',
  subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
  nickname: 'Nickname',
  joinAmount: 36,
  date: '2024-01-01',
  likeAmount: '1.1k',
  commentAmount: '1.1k',
  viewAmount: '1.1k',
  like: true,
  bookmark: true,
  infos: [
    {
      category: 'note',
      thumbnail: '/images/temp/temp1.jpg',
      nickname: '이탭은내꺼',
      date: '2024-01-01',
      contents: {
        note: tempTabNoteData,
      },
      memo: '메모입니다. 컨텐츠들이랑 메모들 엔터 처리를 [태그, \\n, 공백... ] 이중 어떻게 하실지 몰라서 그냥 일단 놔뒀어요 나중에 알려주시면 수정할게요',
      keywords: ['키워드1', '키워드2'],
      like: true,
      likeAmount: '1.1k',
      commentAmount: '1.1k',
      viewAmount: '1.1k',
    },
    {
      category: 'link',
      thumbnail: '',
      nickname: 'xman',
      date: '2024-01-01',
      contents: {
        link: tempTabLinkData,
      },
      memo: '메모입니다. 링크도 여러개를 달 수 있나요?',
      keywords: ['키워드1', '키워드2'],
      like: false,
      likeAmount: '1.1k',
      commentAmount: '1.1k',
      viewAmount: '1.1k',
    },
    {
      category: 'search',
      thumbnail: '/images/temp/temp2.jpg',
      nickname: 'vaiv_worker',
      date: '2024-01-01',
      contents: {
        search: tempTabSearchData,
      },
      memo: '메모입니다. 컨텐츠들이랑 메모들 엔터 처리를 [태그, \\n, 공백... ] 이중 어떻게 하실지 몰라서 그냥 일단 놔뒀어요 나중에 알려주시면 수정할게요',
      keywords: ['키워드1', '키워드2'],
      like: true,
      likeAmount: '1.1k',
      commentAmount: '1.1k',
      viewAmount: '1.1k',
    },
    {
      category: 'image',
      thumbnail: '/images/temp/temp3.png',
      nickname: '웨스턴차이나',
      date: '2024-01-01',
      contents: {
        images: tempTabImageData,
      },
      memo: '메모입니다. 이미지입니다.',
      keywords: ['키워드1', '키워드2'],
      like: false,
      likeAmount: '1.1k',
      commentAmount: '1.1k',
      viewAmount: '1.1k',
    },
    {
      category: 'file',
      thumbnail: '/images/temp/temp1.jpg',
      nickname: '라도집',
      date: '2024-01-01',
      contents: {
        file: tempTabInfoFileData,
      },
      memo: '메모입니다. 파일입니다.',
      keywords: ['키워드1', '키워드2'],
      like: false,
      likeAmount: '1.1k',
      commentAmount: '1.1k',
      viewAmount: '1.1k',
    },
  ],
  mine: true,
  privacy: false,
  join: true,
  keywords: ['키워드1', '키워드2', '키워드3', '키워드4'],
  thumbnail: '/images/temp/temp1.jpg',
};

export const tempTabPreviewData: TabPreviewData[] = [
  {
    id: 7,
    title: '타이틀이 한줄이면 이렇게.',
    subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
    nickname: 'Nickname',
    joinAmount: 36,
    date: '2024-01-01',
    likeAmount: '1.1k',
    commentAmount: '1.1k',
    viewAmount: '1.1k',
    like: true,
    bookmark: true,
    infos: [
      {
        category: 'image',
        image: '/images/temp/temp4.jpg',
      },
      {
        category: 'note',
        note: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      },
      {
        category: 'file',
        file: '파일명이 1234.pdf',
      },
      {
        category: 'search',
        search: {
          question: '질문이 뭔가요?',
          answer: '답변은 이런거고 저런거고 요런거다.',
        }
      },
      {
        category: 'report',
        report: '리포트 명이 1234',
      },
      {
        category: 'link',
        link: 'https://www.vaiv.kr',
      },
    ],
    infosRestAmount: 40,
  },
  {
    id: 6,
    title: '타이틀이 한줄이면 이렇게.',
    subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
    nickname: 'Nickname',
    joinAmount: 36,
    date: '2024-01-01',
    likeAmount: '1.1k',
    commentAmount: '1.1k',
    viewAmount: '1.1k',
    like: false,
    bookmark: false,
    infos: [
      {
        category: 'image',
        image: '/images/temp/temp2.jpg',
      },
      {
        category: 'note',
        note: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      },
      {
        category: 'file',
        file: '파일명이 1234.pdf',
      },
      {
        category: 'search',
        search: {
          question: '질문이 뭔가요?',
          answer: '답변은 이런거고 저런거고 이런거고 저런거고 이런거고 저런거고 이런거고 저런거고 이런거고 저런거고 이런거고 저런거고 이런거고 저런거고 이런거고 저런거고 요런거다.',
        },
      },
      {
        category: 'report',
        report: '리포트 명이 1234',
      },
      {
        category: 'link',
        link: 'https://www.vaiv.kr',
      },
    ],
  },
  {
    id: 5,
    title: '타이틀이 한줄이면 이렇게.',
    subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
    nickname: 'Nickname',
    joinAmount: 36,
    date: '2024-01-01',
    likeAmount: '1.1k',
    commentAmount: '1.1k',
    viewAmount: '1.1k',
    like: false,
    bookmark: false,
    infos: [
      {
        category: 'link',
        link: 'https://www.vaiv.kr',
      },
      {
        category: 'image',
        image: '/images/temp/temp4.jpg',
      },
      {
        category: 'note',
        note: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      },
      {
        category: 'file',
        file: '파일명이 1234.pdf',
      },
      {
        category: 'search',
        search: {
          question: '질문이 뭔가요?',
          answer: '답변은 이런거고 저런거고 요런거다.',
        },
      },
    ],
  },
  {
    id: 4,
    title: '타이틀이 한줄이면 이렇게.',
    subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
    nickname: 'Nickname',
    joinAmount: 36,
    date: '2024-01-01',
    likeAmount: '1.1k',
    commentAmount: '1.1k',
    viewAmount: '1.1k',
    like: false,
    bookmark: false,
    infos: [
      {
        category: 'link',
        link: 'https://www.vaiv.kr',
      },
      {
        category: 'image',
        image: '/images/temp/temp2.jpg',
      },
      {
        category: 'note',
        note: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      },
      {
        category: 'file',
        file: '파일명이 1234.pdf',
      },
    ],
  },
  {
    id: 3,
    title: '타이틀이 한줄이면 이렇게.',
    subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
    nickname: 'Nickname',
    joinAmount: 36,
    date: '2024-01-01',
    likeAmount: '1.1k',
    commentAmount: '1.1k',
    viewAmount: '1.1k',
    like: false,
    bookmark: false,
    infos: [
      {
        category: 'image',
        image: '/images/temp/temp4.jpg',
      },
      {
        category: 'note',
        note: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      },
      {
        category: 'file',
        file: '파일명이 1234.pdf',
      },
    ],
  },
  {
    id: 2,
    title: '타이틀이 한줄이면 이렇게.',
    subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
    nickname: 'Nickname',
    joinAmount: 36,
    date: '2024-01-01',
    likeAmount: '1.1k',
    commentAmount: '1.1k',
    viewAmount: '1.1k',
    like: false,
    bookmark: false,
    infos: [
      {
        category: 'image',
        image: '/images/temp/temp2.jpg',
      },
      {
        category: 'note',
        note: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      },
    ],
  },
  {
    id: 1,
    title: '타이틀이 한줄이면 이렇게.',
    subText: '서브텍스트가 있다면 이렇게 나오겠지요.',
    nickname: 'Nickname',
    joinAmount: 36,
    date: '2024-01-01',
    likeAmount: '1.1k',
    commentAmount: '1.1k',
    viewAmount: '1.1k',
    like: false,
    bookmark: false,
    infos: [
      {
        category: 'image',
        image: '/images/temp/temp4.jpg',
      },
    ],
  },
];

export const tempNotificationData = [
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    image: '/images/temp/temp1.jpg',
    nickname: '닉네임',
    ttabName: '탭이름',
    date: '2024.03.01',
    requestJoin: true,
    unchecked: true,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    image: '/images/temp/temp1.jpg',
    nickname: 'vaiv',
    ttabName: '탭이름2',
    date: '2024.02.01',
    like: true,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    image: '/images/temp/temp1.jpg',
    nickname: 'ABCDEFG',
    ttabName: '탭이름',
    date: '2024.01.01',
    comment: true,
    unchecked: true,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    image: '/images/temp/temp1.jpg',
    nickname: '닉네임',
    ttabName: '탭이름',
    date: '2024.01.01',
    report: true,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    image: '/images/temp/temp1.jpg',
    nickname: '닉네임',
    ttabName: '탭이름',
    date: '2024.01.01',
    requestJoin: true,
  },
];

export const tempRecentSearchData = [
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/search/마케팅`,
    keyword: '마케팅',
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/search/키워드`,
    keyword: '긴 검색어 긴 검색어 긴 검색어 긴 검색어 긴 검색어 긴 검색어 긴 검색어 긴 검색어',
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/search/기획`,
    keyword: '기획',
  },
];

export const tempMyCommentData = [
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    comment: '탭에 대한 댓글을 이렇게 저렇게 요렇게 쓰고 이건 요건 저건 좋아요',
    date: '2024-03-01',
    time: '18:00',
    tabName: '탭 이름만 써도 괜찮치 않을까 탭이름 영역',
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    comment: '탭에 대한 댓글을 이렇게 저렇게 요렇게 쓰고 이건 요건 저건 좋아요 탭에 대한 댓글을 이렇게 저렇게 요렇게 쓰고 이건 요건 저건 좋아요 탭에 대한 댓글을 이렇게 저렇게 요렇게 쓰고 이건 요건 저건 좋아요',
    date: '2024-02-01',
    time: '18:00',
    tabName: '탭 이름만 써도 괜찮치 않을까 탭이름 영역 탭 이름만 써도 괜찮치 않을까 탭이름 영역 탭 이름만 써도 괜찮치 않을까 탭이름 영역 탭 이름만 써도 괜찮치 않을까 탭이름 영역',
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    comment: '탭에 대한 댓글을 이렇게 저렇게 요렇게 쓰고 이건 요건 저건 좋아요',
    date: '2024-01-01',
    time: '18:00',
    tabName: '탭 이름만 써도 괜찮치 않을까 탭이름 영역',
  },
];

export const tempMyJoinTabData = [
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    title: '탭 제목에 대한 영역입니다.',
    subText: '탭에 대한 서브텍스트 영역입니다.',
    join: true,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/2`,
    title: '탭 제목에 대한 영역입니다. 탭 제목에 대한 영역입니다. 탭 제목에 대한 영역입니다. 탭 제목에 대한 영역입니다.',
    subText: '탭에 대한 서브텍스트 영역입니다. 탭에 대한 서브텍스트 영역입니다. 탭에 대한 서브텍스트 영역입니다. 탭에 대한 서브텍스트 영역입니다. 탭에 대한 서브텍스트 영역입니다.',
    join: false,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/tab/1`,
    title: '탭 제목에 대한 영역입니다.',
    subText: '탭에 대한 서브텍스트 영역입니다.',
    join: true,
  },
];

export const tempSupportNoticeData = [
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/support/notice/3`,
    title: '티탭 서비스 고도화로 인한 서비스 중단 안내',
    date: '2024-03-01',
    new: true,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/support/notice/2`,
    title: '티탭 서비스 고도화로 인한 서비스 중단 안내 티탭 서비스 고도화로 인한 서비스 중단 안내 티탭 서비스 고도화로 인한 서비스 중단 안내',
    date: '2024-02-01',
    new: true,
  },
  {
    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/support/notice/1`,
    title: '티탭 서비스 고도화로 인한 서비스 중단 안내',
    date: '2024-01-01',
  },
];

export const tempSupportNoticeDetailData = {
  title: '티탭 서비스 고도화로 인한 서비스 중단 안내',
  date: '2024-01-01',
  text: `안녕하세요 Ttab 팀입니다.\n\n일단 엔터를 \\n로 넣어봤습니다.\n어떻게 나누실지 모르겠네요.\n\nTtab 서비스 고도화 업데이트 작업으로 인해 2024.01.01 18시 부터 2024.01.02 7시까지 서비스가 중단될 예정입니다.\n\n좀 더 편리한 Ttab 서비스로 돌아오겠습니다.\n\nTtab팀 드림.`,
  new: true,
};