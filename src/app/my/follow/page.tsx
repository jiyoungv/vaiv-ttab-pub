'use client'
import { useState, useCallback } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Tab from '@/components/common/Tab';
import Inner from '@/components/common/Inner';
import Input from '@/components/common/Input';
import TabUser from '@/components/domain/tab/TabUser';
import Button from '@/components/common/Button';
import Skeleton from '@/components/common/Skeleton';
import NoData from '@/components/common/NoData';

export default function MyFollowPage() {
  const [nickname, setNickname] = useState('');

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert('DEV: 검색하기');
  }, []);

  return (
    <AppLayout
      navBar={{
        title: '팔로우 관리',
      }}
    >
      <Tab 
        list={[
          { value: 'following', label: '팔로잉' },
          { value: 'follower', label: '팔로워' },
        ]}
      />
      <section className="py-5">
        <Inner variant="narrow">
          <div className="mb-5">
            <form onSubmit={onSubmit}>
              <Input 
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임을 입력해주세요"
                variant="dark"
                leftIcon="mgc_search_line"
                full
                required
              />
            </form>
          </div>
          <ul>
            {[
              {
                thumbnail: '/images/temp/temp4.jpg',
                nickname: '닉네임닉네임',
                link: `${process.env.NEXT_PUBLIC_FRONT_URL}/profile/닉네임닉네임`,
              },
              {
                thumbnail: '',
                nickname: '닉네임닉네임',
                link: `${process.env.NEXT_PUBLIC_FRONT_URL}/profile/닉네임닉네임`,
              },
              {
                thumbnail: '/images/temp/temp4.jpg',
                nickname: '닉네임닉네임',
                link: `${process.env.NEXT_PUBLIC_FRONT_URL}/profile/닉네임닉네임`,
              },
              {
                thumbnail: '/images/temp/temp4.jpg',
                nickname: '닉네임닉네임',
                link: `${process.env.NEXT_PUBLIC_FRONT_URL}/profile/닉네임닉네임`,
              },
              {
                thumbnail: '/images/temp/temp4.jpg',
                nickname: '닉네임닉네임',
                link: `${process.env.NEXT_PUBLIC_FRONT_URL}/profile/닉네임닉네임`,
              },
            ].map((v, i) => (
              <li key={i} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center gap-1">
                  <TabUser data={v} />
                  <Button 
                    color="cancel" 
                    size="xs" 
                    round
                    onClick={() => {
                      const res = confirm('팔로잉을 해제하시겠습니까?');
                      if (res) {
                        alert('DEV: 팔로잉 해제');
                      }
                    }}
                  >
                    팔로잉 해제
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          {'DEV: loading' && (            
            <div className="flex flex-col gap-3">
              {Array(5).fill('').map((v, i) => (
                <Skeleton key={i} />
              ))}
            </div>
          )}
          {'DEV: no data' && (
            <NoData
              text="검색 결과가 없습니다."
            />
          )}
        </Inner>
      </section>
    </AppLayout>
  );
}