import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login(): JSX.Element {
  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          margin: 5,
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <Button variant="contained">Send</Button>
        <div>
          <Button variant="text">Sign up</Button>, if you have acount
        </div>
      </Box>
    </div>
  );
}

export default Login;
