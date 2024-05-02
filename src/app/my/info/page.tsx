'use client'
import AppLayout from '@/components/domain/AppLayout';
import Inner from '@/components/common/Inner';
import ProfileThumbnail from '@/components/domain/ProfileThumbnail';
import Input from '@/components/common/Input';
import Toggle from '@/components/common/Toggle';

export default function MyInfo() {
  return (
    <AppLayout
      navBar={{
        title: '내 정보 수정',
      }}
    >
      <div className="bg-slate-100">
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
                    <label htmlFor="profile">
                      TODO: 파일 업로드
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-1.5 text-slate-500 text-sm font-medium">
                  닉네임
                </label>
                <div className="flex gap-2">
                  <Input />
                  <button>변경</button>
                </div>
              </div>
              <div className="mt-7">
                <label className="mb-1.5 text-slate-500 text-sm font-medium">
                  소개글
                </label>
                <textarea>dd</textarea>
              </div>
              <div className="mt-2">
                <button type="submit">저장</button>
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
              <Toggle />
            </form>
          </Inner>
        </section>
      </div>
    </AppLayout>
  );
}