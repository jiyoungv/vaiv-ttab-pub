import Sheet from 'react-modal-sheet';

import Inner from '@/components/common/Inner';
import Icon from '@/components/common/Icon';

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LocalBottomSheetProps extends BottomSheetProps {
  title?: string;
  bottom?: React.ReactNode;
  children?: React.ReactNode;
}

export default function BottomSheet({
  isOpen,
  onClose,
  title,
  bottom,
  children,
  ...props
}: LocalBottomSheetProps) {
  return (
    <Sheet 
      isOpen={isOpen} 
      onClose={onClose} 
      {...props}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <section>
            <Inner>
              <div className="relative">
                {title && (
                  <h6 className="text-slate-700 text-lg font-bold">
                    {title}
                  </h6>
                )}
                <button 
                  type="button"
                  className="absolute right-0 top-0"
                  onClick={onClose}
                >
                  <Icon name="mgc_close_line" />
                </button>
              </div>
            </Inner>
          </section>
          <Sheet.Scroller>
            {children}
          </Sheet.Scroller>
          {bottom && (
            <section className="sticky bottom-0 w-full">
              {bottom}
            </section>
          )}
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}