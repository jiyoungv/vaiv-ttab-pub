import { useMemo } from 'react';
import classNames from 'classnames';

import Icon, { IconProps } from '@/components/common/Icon';
import InternalButton, { InternalButtonProps } from '@/components/common/InternalButton';

interface IconButtonProps extends InternalButtonProps {
  icon?: IconProps;
}

// 패딩 없이 쌩 icon만 있을 때 사용
export default function IconButton({ 
  icon, 
  ...props
}: IconButtonProps) {
  const rootClassName = useMemo(() => classNames(
    'inline-flex items-center relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:hidden before:w-[calc(100%+4px)] before:h-[calc(100%+4px)] before:rounded-lg before:bg-slate-100 hover:before:block', 
    {
      [`${props.className}`]: props.className,
    },
  ), [props.className]);

  return (
    <InternalButton 
      className={rootClassName} 
      {...props}
    >
      <Icon {...icon} />
      {props.children}
    </InternalButton>
  );
}