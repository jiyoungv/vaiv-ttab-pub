import BadgeImage from '@/components/domain/BadgeImage';
import Inner from '@/components/common/Inner';
import Button from '@/components/common/Button';

export interface BadgeGetModalProps {
  onClose: () => void;
}

export default function BadgeGetModal({ onClose }: BadgeGetModalProps) {
  return (
    <aside className="z-50 fixed top-0 left-0 right-0 bottom-0">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-90 bg-black"></div>
      <article className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex justify-center pb-25">
        <div className="text-center">
          <BadgeImage src="/images/badge_beginner.png" size="200px" />
          <div className="mt-12">
            <h6 className="text-white text-3xl font-bold">
              비기너
            </h6>
            <p className="mt-5 text-slate-100 text-xl">
              회원가입 완료! <br/>
              500T를 보상으로 받았어요.
            </p>
          </div>
        </div>
      </article>
      <div className="absolute bottom-10 left-0 w-full">
        <Inner variant="narrow">
          <Button
            onClick={onClose}
            color="slate"
            full
          >
            닫기
          </Button>
        </Inner>
      </div>
    </aside>
  );
}