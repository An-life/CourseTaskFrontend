import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';

import { IRegistrationInputs } from './types';

import common from './../../styles/commonStyles.module.scss';
import styles from './styles.module.scss';

function Registration(): JSX.Element {
  const [isRegistered, setIsRegistered] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationInputs>();

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const onSubmit = (data: IRegistrationInputs): void => console.log(data);

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
                onMouseDown={handleMouseDownPassword}
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
        <Button variant="contained" type="submit" size="large">
          Send
        </Button>
      </div>
      <div>
        <Button variant="text" onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? 'Sign up' : 'Sign in'}
        </Button>
        {isRegistered ? ', if you don`t have account' : ', if you have account'}
      </div>
    </Box>
  );
}

export default Registration;
