import Button from '@/components/common/Button';

const list = [
  'Loading(Skeleton)과 NoData는 일단 컴포넌트 밖으로 뺐는데, 필요하면 컴포넌트 안에 넣고 사용',
  '주석 -  DEV: 개발 참고사항, TODO: 퍼블리셔 작업 예정',
];

export interface DevModalProps {
  onClose: () => void;
}

export default function DevModal({ onClose }: DevModalProps) {
  return (
    <aside className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-[320px] p-4 rounded-lg bg-white shadow-lg">
        <p className="mb-4 text-slate-700 text-2xl font-bold text-center">
          📌개발 전달 사항📌
        </p>
        <ul className="list-disc pl-5">
          {list.map((v, i) => (
            <li key={i} className="mb-2 last:mb-0 text-slate-600 text-sm font-medium">
              {v}
            </li>
          ))}
        </ul>
        <a 
          href="https://docs.google.com/spreadsheets/d/1ZFEXE3fgtGAik-9rEEcFYYmSq-OJZpuEXteh4o5TMkQ/edit?usp=sharing"
          className="inline-block mt-4 text-blue-500 text-sm font-medium underline"
          target="_blank"
        >
          퍼블 진행 현황 →
        </a>
        <div className="mt-6">
          <Button size="sm" color="secondary" full onClick={onClose}>
            닫기
          </Button>
        </div>
      </div>
    </aside>
  )
}