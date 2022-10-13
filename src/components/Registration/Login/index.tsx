import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Props } from '../types';

function Login({ onClick }: Props): JSX.Element {
  return (
    <Box
      component="form"
      sx={{
        margin: 5,
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Name" variant="outlined" />
      <TextField label="Email" type="email" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained">Send</Button>
      <div>
        <Button variant="text" onClick={onClick}>
          Sign in
        </Button>
        , if you have account
      </div>
    </Box>
  );
}

export default Login;
