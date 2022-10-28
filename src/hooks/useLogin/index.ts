import { useEffect } from 'react';

import { usePostLoginMutation } from '../../api/authApi';

export const useLogin = (): any => {
  const [login, { data, isSuccess, isLoading, error }] = usePostLoginMutation();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('token', data.accessToken);
    }
  }, [isSuccess]);

  const isSuccessLogin = isSuccess;
  const isLoadingLogin = isLoading;
  const loginError = error;

  return { login, isSuccessLogin, isLoadingLogin, loginError };
};
