import { useEffect, useState } from 'react';

import { usePostLoginQuery } from '../../api/authApi';
import { IRegistrationData } from '../../types/common';

export const useLogin = (): any => {
  const [loginData, setLoginData] = useState<IRegistrationData>({
    email: '',
    password: '',
  });
  console.log(loginData);
  const isSendLoginRequest = Object.values(loginData).every(value => value !== '');

  const { data, isSuccess } = usePostLoginQuery(loginData, { skip: !isSendLoginRequest });

  console.log(data);
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('token', data.accessToken);
    }
  }, [isSuccess]);

  const isSuccessLogin = isSuccess;

  return { setLoginData, isSuccessLogin };
};
