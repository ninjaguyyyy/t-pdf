import { Navigate, useLocation } from 'react-router-dom';

import { ROUTE } from 'constants/routes';
import { getToken } from 'utils/storage';

type Props = {
  children: JSX.Element;
};

export default function RequireAuth({ children }: Props) {
  const accessToken = getToken();

  const location = useLocation();

  if (!accessToken) {
    return <Navigate to={ROUTE.SIGN_IN} state={{ from: location }} />;
  }

  return children;
}
