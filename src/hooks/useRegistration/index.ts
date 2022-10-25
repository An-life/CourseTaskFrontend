import { useEffect, useState } from 'react';

import { usePostRegistrationQuery } from '../../api/authApi';
import { IRegistrationData } from '../../types/common';

export const useRegistration = (): any => {
  const [registrationData, setRegistrationData] = useState<IRegistrationData>({
    name: '',
    email: '',
    password: '',
  });
  const isSendRegistrationRequest = Object.values(registrationData).every(
    value => value !== '',
  );

  const { data, isSuccess } = usePostRegistrationQuery(registrationData, {
    skip: !isSendRegistrationRequest,
  });

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('token', data.accessToken);
    }
  }, [isSuccess]);

  const isSuccessRegistration = isSuccess;

  return { setRegistrationData, isSuccessRegistration };
};
