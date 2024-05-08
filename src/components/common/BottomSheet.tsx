import Sheet from 'react-modal-sheet';
import { SheetCompound } from 'react-modal-sheet/dist/types';

import Inner from './Inner';

export type BottomSheetProps = SheetCompound & {
}

export default function BottomSheet({
  ...props
}: BottomSheetProps) {
  return (
    <Sheet isOpen={props.isOpen} onClose={props.onClose} {...props}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <Inner>
            dd
          </Inner>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}