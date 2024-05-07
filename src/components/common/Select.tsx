import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd';

import Icon from '@/components/common/Icon';

export interface SelectProps extends AntdSelectProps {}

export default function Select({
  ...props
}: SelectProps) {
  return (
    <AntdSelect 
      size="large"
      className="!h-12"
      suffixIcon={<Icon name="mgc_down_line" color="text-slate-500" size="text-xl-size" />}
      {...props}
    />
  );
}