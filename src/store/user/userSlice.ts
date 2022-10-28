import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserRegistrationData } from '../../types/common';

const initialState: IUserRegistrationData = {
  id: '',
  role: 'user',
  status: 'active',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<IUserRegistrationData>) => {
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.status = action.payload.status;
    },
  },
});

export const { addUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
