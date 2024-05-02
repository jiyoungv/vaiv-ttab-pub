import { useEffect, useState } from 'react';
import classNames from 'classnames';

export interface AccordionProps {
  title: React.ReactNode;
  panel: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onChange?: (open: boolean) => void;
  className?: string;
}

export default function Accordion({
  title,
  panel,
  open = false,
  defaultOpen = false,
  onChange,
  className,
}: AccordionProps) {
  const [mounted, setMounted] = useState(false);

  const [localOpen, setLocalOpen] = useState(open);

  // defaultOpen
  useEffect(() => {
    if (mounted) return;

    if (defaultOpen) setLocalOpen(true);
    setMounted(true);
  }, [mounted, defaultOpen]);

  useEffect(() => {
    if (!onChange) return;

    if (localOpen) onChange(true);
    else onChange(false);
  }, [onChange, localOpen]);

  return (
    <div
      className={classNames(
        {
          [`${className}`]: className,
        },
      )}
    >
      <div 
        className="cursor-pointer"
        onClick={() => setLocalOpen(prev => !prev)}
        aria-expanded={localOpen}
      >
        {title}
      </div>
      <div className={classNames(
        'overflow-hidden transition-all',
        {
          'max-h-0': !localOpen,
          'max-h-[999px]': localOpen,
        },
      )}>
        {panel}
      </div>
    </div>
  );
}