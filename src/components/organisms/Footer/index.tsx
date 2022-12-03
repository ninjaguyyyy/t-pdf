import Copyright from 'components/molecules/Copyright';

import './index.scss';

export default function Footer() {
  return (
    <div className="py-14 footer flex flex-col justify-center items-center xs:py-8 xs:px-6">
      <p className="text-center text-4xl font-bold mb-8 xs:text-2xl xs:w-1/2">Footer</p>
      <div className="w-1/3 xs:w-full">
        <Copyright />
      </div>
    </div>
  );
}
