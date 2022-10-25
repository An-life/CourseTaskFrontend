import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IRegistrationData,
  IRegistrationResponse,
  IUserResponse,
} from './../../types/common';
import { baseUrl } from './../constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token') ?? '';
      if (token !== '') {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: build => ({
    postRegistration: build.query<IRegistrationResponse, IRegistrationData>({
      query: ({ ...registrationData }) => ({
        url: 'registration',
        method: 'POST',
        body: registrationData,
      }),
    }),
    postLogin: build.query<IRegistrationResponse, IRegistrationData>({
      query: ({ ...loginData }) => ({
        url: 'login',
        method: 'POST',
        body: loginData,
      }),
    }),
    getMe: build.query<IUserResponse, void>({
      query: () => 'me',
    }),
  }),
});

export const { usePostRegistrationQuery, usePostLoginQuery, useGetMeQuery } = authApi;
