import Button from '@/components/common/Button';

export interface CreateInfoUndoProps {}

export default function CreateInfoUndo({}: CreateInfoUndoProps) {
  return (
    <div className="flex justify-end mt-1">
      <Button
        onClick={() => alert('DEV: 내용 되돌리기')}
        color="cancel"
        icon="mgc_back_line"
        round
      />
    </div>
  );
}