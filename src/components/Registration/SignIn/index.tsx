import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import { Props } from '../types';
import { SignInInputs } from './types';

import common from './../../../styles/commonStyles.module.scss';

function SignIn({ onClick }: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  const onSubmit = (data: SignInInputs): any => console.log(data);

  return (
    <Box
      component="form"
      sx={{
        margin: 5,
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Email"
        type="email"
        variant="outlined"
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
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        {...register('password', { required: true })}
      />
      {errors.password != null && (
        <span className={common.errorMessage}>This field is required</span>
      )}
      <Button variant="contained" type="submit">
        Send
      </Button>
      <div>
        <Button variant="text" onClick={onClick}>
          Sign up
        </Button>
        , if you don`t have account
      </div>
    </Box>
  );
}

export default SignIn;
