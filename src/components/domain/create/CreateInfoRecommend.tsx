import Inner from '@/components/common/Inner';
import Badge from '@/components/common/Badge';

const list = [
  'TO-DO 리스트 정리',
  '삶의 변화가 필요할 때 도움이 되는 명언들',
  'TODO: swipe 기능',
];

export interface CreateInfoRecommendProps {}

export default function CreateInfoRecommend({}: CreateInfoRecommendProps) {
  return (
    <section className="pb-4">
      <Inner>
        <div className="mb-3 pt-4 border-t border-t-slate-200">
          <p className="text-slate-700 text-base-read font-bold">
            🧐 다른 사람들은 이런 메모들을 자주 하고 있어요.
          </p>
        </div>
      </Inner>
      <div className="flex flex-wrap gap-2 pl-4">
        {list.map((v, i) => (
          <Badge 
            key={i} 
            size="lg"
            onClick={() => alert('TODO: 추천 메모 삽입')}
          >
            {v}
          </Badge>
        ))}
      </div>
    </section>
  );
}