'use client'
import Link from 'next/link';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import ProfileThumbnail from '@/components/domain/ProfileThumbnail';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

export default function My() {
  return (
    <AppLayout
      navBar={{
        title: '마이페이지',
      }}
    >
      <div className="py-8 bg-slate-100">
        <section className="mb-6">
          <Inner>
            <div className="flex justify-center mb-4">
              <ProfileThumbnail src="/images/temp/profile.png" width="100px" />
            </div>
            <div className="mb-2 text-center">
              <h1 className="text-slate-700 text-2xl font-bold">
                한남동바이브닉네임영역
              </h1>
            </div>
            <div className="flex justify-center mb-5">
              <a href="/my/info">내 정보 수정</a>
              {/* <Button>내 정보 수정</Button> */}
            </div>
            <div className="flex justify-between items-center px-10 py-3 rounded-2xl bg-primary-500">
              {[
                { amount: 13, text: '탭 개수' },
                { amount: 153, text: '팔로워' },
                { amount: 153, text: '팔로잉' },
              ].map((v, i) => (
                <>
                  <div key={i} className="text-center">
                    <p className="text-white text-2xl font-bold">
                      {v.amount}
                    </p>
                    <p className="text-primary-100 text-sm font-medium">
                      {v.text}
                    </p>
                  </div>
                  {i < 2 && (
                    <div key={`${i}-divider`} className="w-px h-8 bg-primary-300"></div>
                  )}
                </>
              ))}
            </div>
          </Inner>
        </section>
        <section className="mb-4">
          <Inner>
            {[
              {
                title: '활동내역',
                list: [
                  { 
                    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/my/comment`,
                    text: '내 댓글',
                  },
                  { 
                    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/my/join-tab`,
                    text: '탭 참여 신청',
                  },
                ],
              },
              {
                title: '고객지원',
                list: [
                  { 
                    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/my/notice`,
                    text: '공지사항',
                  },
                  { 
                    link: `${process.env.NEXT_PUBLIC_FRONT_URL}/my/faq`,
                    text: '자주 묻는 질문',
                  },
                ],
              },
            ].map((v, i) => (
              <div key={i} className="mb-4 last:mb-0 p-5 rounded-xl bg-white shadow-sm">
                <div className="mb-4">
                  <p className="text-slate-400 text-sm font-medium">
                    {v.title}
                  </p>
                </div>
                <ul>
                  {v.list.map((v2, i2) => (
                    <li key={i2} className="mb-2 last:mb-0">
                      <Link href={v2.link}>
                        <div className="group flex justify-between items-center">
                          <p className="text-slate-600 text-base-read font-bold group-hover:underline">
                            {v2.text}
                          </p>
                          <Icon name="mgc_right_line" color="text-slate-600" size="text-xl-size" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="px-5 py-3 rounded-xl bg-white shadow-sm">
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => {
                  const res = confirm('로그아웃하시겠습니까?');
                  if (res) {
                    alert('DEV: 로그아웃');
                  }
                }}
              >
                <p className="block text-slate-500 text-sm font-bold group-hover:underline">
                  로그아웃
                </p>
              </button>
            </div>
          </Inner>
        </section>
      </div>
    </AppLayout>
  );
}