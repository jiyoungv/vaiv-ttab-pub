'use client'
import { useState } from 'react';

import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import ProfileThumbnail from '@/components/domain/ProfileThumbnail';
import Icon from '@/components/common/Icon';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import TextArea from '@/components/common/TextArea';
import Select from '@/components/common/Select';
import Toggle from '@/components/common/Toggle';

export default function MyInfo() {
  const [nickname, setNickname] = useState('닉네임입니다');

  const [editNickname, setEditNickname] = useState(false);

  const [introduction, setIntroduction] = useState('');

  const [id, setID] = useState('vaiv@vaiv.kr');

  const [job1, setJob1] = useState('job1');

  const [job2, setJob2] = useState('job1');

  const [agreeMKT, setAgreeMKT] = useState(false);

  return (
    <AppLayout
      navBar={{
        title: '내 정보 수정',
      }}
      bg="dark"
    >
      <section className="py-5 bg-white shadow-sm">
        <Inner>
          <div className="mb-7">
            <h2 className="text-slate-900 text-lg font-bold">
              Ttab 프로필 설정
            </h2>
            <p className="text-slate-500 text-sm">
              Ttab 활동 시 노출되는 프로필 정보 입니다.
            </p>
          </div>
          <form>
            <div className="flex justify-center">
              <div className="relative">
                <ProfileThumbnail src="/images/temp/profile.png" width="120px" />
                <div className="absolute right-0 bottom-0">
                  <input type="file" id="profile" className="hidden" />
                  <label 
                    htmlFor="profile" 
                    className="inline-flex justify-center items-center w-9 aspect-square rounded-full bg-slate-700 cursor-pointer hover:bg-slate-900"
                  >
                    <Icon name="mgc_edit_3_line" size="text-xl-size" color="text-white" />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-1.5">
                <label className="text-slate-500 text-sm font-medium">
                  닉네임
                </label>
              </div>
              <div className="flex gap-2">
                <Input 
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  disabled={!editNickname} 
                  placeholder="닉네임을 입력해주세요"
                  full
                />
                {!editNickname ? (
                  <Button 
                    color="secondary" 
                    onClick={() => setEditNickname(true)}
                  >
                    변경
                  </Button>
                ) : (
                  <Button 
                    color="secondary" 
                    onClick={() => {
                      alert('DEV: 중복 확인?');
                      setEditNickname(false);
                    }}
                  >
                    중복 확인
                  </Button>
                )}
              </div>
            </div>
            <div className="mt-7">
              <div className="mb-1.5">
                <label className="text-slate-500 text-sm font-medium">
                  소개글
                </label>
              </div>
              <div>
                <TextArea 
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  autoSize={{ maxRows: 5, minRows: 5 }}
                  placeholder="소개글을 입력해주세요"
                />
              </div>
            </div>
            <div className="mt-2">
              <Button 
                color="secondary" 
                full 
                onClick={() => alert('DEV: 저장')}
              >
                저장
              </Button>
            </div>
          </form>
        </Inner>
      </section>
      <section className="mt-4 py-5 bg-white shadow-sm">
        <Inner>
          <div className="mb-7">
            <h2 className="text-slate-900 text-lg font-bold">
              통합 계정 설정
            </h2>
          </div>
          <form>
            <div>
              <div className="flex justify-between gap-1 mb-1.5">
                <label className="text-slate-500 text-sm font-medium">
                  로그인 계정
                </label>
                <p className="px-1.5 py-0.5 rounded-[50px] bg-slate-100 text-slate-500 text-xs font-medium">
                  가입일 : 2024-01-01
                </p>
              </div>
              <div>
                <Input 
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                  full
                  right={(
                    <p className="text-slate-400 text-sm font-medium">
                      일반회원
                    </p>
                  )}
                  readOnly
                />
              </div>
              <div className="flex justify-end items-center gap-6 mt-2.5">
                <Button 
                  variant="link" 
                  color="secondary" 
                  size="sm"
                  onClick={() => alert('DEV: 소셜 계정으로 전환')}
                >
                  소셜 계정으로 전환
                </Button>
                <Button 
                  variant="link" 
                  color="secondary" 
                  size="sm"
                  onClick={() => alert('DEV: 비밀번호 변경')}
                >
                  비밀번호 변경
                </Button>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex items-end gap-1 mb-1.5">
                <label className="text-slate-500 text-sm font-medium">
                  직무
                </label>
                <small className="text-slate-400 text-xs">
                  더 좋은 추천 정보가 제공됩니다.
                </small>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Select 
                  options={[
                    { value: 'job1', label: '기획/전략' },
                    { value: 'job2', label: '기획/전략' },
                  ]}
                  onChange={(value) => setJob1(value)}
                  placeholder="직무 선택"
                />
                <Select 
                  options={[
                    { value: 'job1', label: '웹 기획' },
                    { value: 'job2', label: '웹 기획' },
                  ]}
                  onChange={(value) => setJob2(value)}
                  placeholder="직무 선택"
                />
              </div>
            </div>
            <div className="mt-7">
              <div className="flex justify-between items-center gap-1">
                <p className="text-slate-700 text-base-read font-bold">
                  마케팅 수신 동의
                </p>
                <Toggle 
                  size="md" 
                  onChange={(checked) => setAgreeMKT(checked)}
                />
              </div>
              <div className="mt-2">
                <p className="text-slate-500 text-sm">
                  최신 소식, 썸레터, 할인 안내 등 다양한 혜택에 대한 안내를 제공합니다.
                </p>
              </div>
            </div>
            <div className="mt-7">
              <Button 
                color="secondary" 
                full 
                onClick={() => alert('DEV: 저장')}
              >
                저장
              </Button>
            </div>
          </form>
        </Inner>
      </section>
      <div className="flex justify-end p-4">
        <Button 
          variant="link" 
          color="cancel" 
          onClick={() => alert('DEV: 회원 탈퇴')}
        >
          회원 탈퇴
        </Button>
      </div>
    </AppLayout>
  );
}