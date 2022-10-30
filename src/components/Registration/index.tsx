import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { IRegistrationInputs, IRegistration } from './types';
import { useLogin } from './../../hooks/useLogin';
import { useRegistration } from '../../hooks/useRegistration';

import common from './../../styles/commonStyles.module.scss';
import styles from './styles.module.scss';

function Registration({ closeDrawerMenu, setIsAuth }: IRegistration): JSX.Element {
  const [isRegistered, setIsRegistered] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const {
    registration,
    isSuccessRegistration,
    isLoadingRegistration,
    registrationError,
  } = useRegistration();
  const { login, isSuccessLogin, isLoadingLogin, loginError } = useLogin();

  useEffect(() => {
    if (isSuccessRegistration || isSuccessLogin) {
      closeDrawerMenu();
      setIsAuth();
    }
  }, [isSuccessRegistration, isSuccessLogin]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationInputs>();

  const mouseDownPasswordHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  if (loginError) {
    toast(loginError.data.message);
  }

  if (registrationError) {
    toast(registrationError.data.message);
  }

  const onSubmitHandler = async ({
    name,
    email,
    password,
  }: IRegistrationInputs): Promise<void> => {
    if (!isRegistered) {
      await registration({ name, email, password });
    } else {
      await login({ email, password });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        margin: 5,
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      {!isRegistered && (
        <TextField
          label="Name"
          variant="outlined"
          {...register('name', {
            required: true,
            minLength: {
              value: 3,
              message: 'Name too short',
            },
          })}
        />
      )}
      {errors.name != null && !isRegistered && (
        <span className={common.errorMessage}>
          {errors.name.message?.length !== 0
            ? errors.name.message
            : 'This field is required'}
        </span>
      )}
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        placeholder="Password"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email != null && (
        <span className={common.errorMessage}>
          {errors.email.message?.length !== 0
            ? errors.email.message
            : 'This field is required'}
        </span>
      )}
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          label="Password"
          {...register('password', { required: true })}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={mouseDownPasswordHandler}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password != null && (
          <span className={common.errorMessage}>This field is required</span>
        )}
      </FormControl>
      <div className={styles.buttonContainer}>
        {isLoadingLogin || isLoadingRegistration ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" type="submit" size="large">
            <FormattedMessage id="registration_send" />
          </Button>
        )}
      </div>
      <div>
        <Button variant="text" onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? (
            <FormattedMessage id="registration_signup" />
          ) : (
            <FormattedMessage id="registration_signin" />
          )}
        </Button>
        {isRegistered ? (
          <FormattedMessage id="registration_not_acount" />
        ) : (
          <FormattedMessage id="registration_acount" />
        )}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}

export default Registration;
