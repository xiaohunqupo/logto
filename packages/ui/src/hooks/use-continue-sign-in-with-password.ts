import type { SignInIdentifier } from '@logto/schemas';
import { useNavigate } from 'react-router-dom';

import { UserFlow } from '@/types';

const useContinueSignInWithPassword = <T extends SignInIdentifier.Email | SignInIdentifier.Sms>(
  method: T
) => {
  const navigate = useNavigate();

  type Payload = T extends SignInIdentifier.Email ? { email: string } : { phone: string };

  return (payload: Payload) => {
    navigate(
      {
        pathname: `/${UserFlow.signIn}/${method}/password`,
        search: location.search,
      },
      { state: payload }
    );
  };
};

export default useContinueSignInWithPassword;
