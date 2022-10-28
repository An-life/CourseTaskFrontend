import { useEffect } from 'react';

import { usePostRegistrationMutation } from '../../api/authApi';

export const useRegistration = (): any => {
  const [registration, { data, isSuccess, isLoading, error }] =
    usePostRegistrationMutation();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('token', data.accessToken);
    }
  }, [isSuccess]);

  const isSuccessRegistration = isSuccess;
  const isLoadingRegistration = isLoading;
  const registrationError = error;

  return {
    registration,
    isSuccessRegistration,
    isLoadingRegistration,
    registrationError,
  };
};
