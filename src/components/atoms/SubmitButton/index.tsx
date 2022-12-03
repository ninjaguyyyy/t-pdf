import { Button } from 'antd';
import { ReactNode } from 'react';

import './index.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SubmitButton({ children, className }: Props) {
  return <Button className={`submit-button ${className}`}>{children}</Button>;
}
