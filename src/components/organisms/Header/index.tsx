import BrandLogo from 'components/atoms/BrandLogo';
import SignInButton from 'components/atoms/SignInButton';
import SearchArea from 'components/molecules/SearchArea';
import SocialIconButtons from 'components/molecules/SocialIconButtons';

import './index.scss';

const Header = () => (
  <header>
    <div className="header white-bg flex justify-between items-center xs:mt-0">
      <BrandLogo className="grow" />
      <SearchArea className="mr-4 xs:mr-0" />
      <SignInButton className="mr-8 xs:hidden" />
      <SocialIconButtons className="xs:hidden" />
    </div>
  </header>
);

export default Header;
