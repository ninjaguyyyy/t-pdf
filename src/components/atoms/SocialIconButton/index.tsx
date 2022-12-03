// eslint-disable-next-line import/named

import { ReactNode } from 'react';

type Props = {
  socialIcon: ReactNode;
};

export default function SocialIconButton({ socialIcon: SocialIcon }: Props) {
  return <div className="text-base">{SocialIcon}</div>;
}
