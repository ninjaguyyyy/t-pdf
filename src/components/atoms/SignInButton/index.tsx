import { Button } from 'antd';

import './index.scss';

type Props = {
  className?: string;
};

export default function SignInButton({ className }: Props) {
  return (
    <Button type="primary" className={`sign-in-button !bg-black ${className}`}>
      Sign In
    </Button>
  );
}
