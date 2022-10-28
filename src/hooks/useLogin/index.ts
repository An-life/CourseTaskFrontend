import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addUserData } from '../../store/user/userSlice';
import { usePostLoginMutation } from '../../api/authApi';

export const useLogin = (): any => {
  const [login, { data, isSuccess, isLoading, error }] = usePostLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('token', data.accessToken);
      dispatch(
        addUserData({ id: data.user.id, status: data.user.status, role: data.user.role }),
      );
    }
  }, [isSuccess]);

  const isSuccessLogin = isSuccess;
  const isLoadingLogin = isLoading;
  const loginError = error;

  return { login, isSuccessLogin, isLoadingLogin, loginError };
};
