import classNames from 'classnames';

export interface CreateInfoBotTooltipProps {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}

export default function CreateInfoBotTooltip({ 
  children,
  position = 'top', 
}: CreateInfoBotTooltipProps) {
  return (
    <div className={classNames(
      'absolute left-1/2 -translate-x-1/2 w-max px-1.5 rounded-5xl bg-primary-500 before:content-empty before:absolute before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-4 before:border-transparent',
      {
        'top-0 -translate-y-full mt-1 before:bottom-0 before:translate-y-full before:border-t-primary-500': position === 'top',
        'bottom-0 translate-y-full mb-1 before:top-0 before:-translate-y-full before:border-b-primary-500': position === 'bottom',
      },
    )}>
      <p className="text-white text-[10px] leading-4 -tracking-[.004em]">
        {children}
      </p>
    </div>
  );
}