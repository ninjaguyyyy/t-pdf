import { ReactNode } from 'react';

import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-24 blue-bg grow xs:px-0">
        <Header />
        <main className="my-16 xs:my-8 xs:px-4">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
