import Icon from '@/components/common/Icon';

export interface TabDetailInfoFileProps {
  data?: string;
}

export default function TabDetailInfoFile({ data }: TabDetailInfoFileProps) {
  return (
    <div>
      <a 
        href="/files/temp_file.pdf" 
        className="flex items-center gap-1 px-4 py-3 rounded-xl bg-file-500 hover:bg-file-700"
        target="_blank"
        // download // DEV: 다운로드 시 활성화
      >
        <Icon name="mgc_box_2_line" color="text-white" />
        <p className="text-white text-base-read font-medium">
          {data}
        </p>
      </a>
    </div>
  );
}