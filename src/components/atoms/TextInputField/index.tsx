// eslint-disable-next-line import/named
import { Input, InputProps } from 'antd';

import './index.scss';

type Props = InputProps;

export default function TextInputField({ ...inputProps }: Props) {
  return (
    <Input
      className="text-input-field py-5 px-10 pr-32 h-[60px] rounded-[100px] tracking-wider text-base xs:h-[48px] xs:text-sm xs:tracking-normal"
      {...inputProps}
    />
  );
}
