import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IChangeRole,
  IChangeStatus,
  IRegistrationData,
  IRegistrationResponse,
  IUserResponse,
  IUsersResponse,
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
  tagTypes: ['Users'],
  endpoints: build => ({
    postRegistration: build.mutation<IRegistrationResponse, IRegistrationData>({
      query: ({ ...registrationData }) => ({
        url: 'registration',
        method: 'POST',
        body: registrationData,
        invalidatesTags: ['Users'],
      }),
    }),
    postLogin: build.mutation<IRegistrationResponse, IRegistrationData>({
      query: ({ ...loginData }) => ({
        url: 'login',
        method: 'POST',
        body: loginData,
      }),
    }),
    deleteUsers: build.mutation<{}, string[]>({
      query: deletedUsers => ({
        url: 'deleteUsers',
        method: 'POST',
        body: { users: [...deletedUsers] },
      }),
      invalidatesTags: ['Users'],
    }),
    changeUsersStatus: build.mutation<{}, IChangeStatus>({
      query: changedData => ({
        url: 'changeUsersStatus',
        method: 'POST',
        body: { ...changedData },
      }),
      invalidatesTags: ['Users'],
    }),
    changeUsersRole: build.mutation<{}, IChangeRole>({
      query: changedData => ({
        url: 'changeUsersRole',
        method: 'POST',
        body: { ...changedData },
      }),
      invalidatesTags: ['Users'],
    }),
    getMe: build.query<IUserResponse, void>({
      query: () => 'me',
    }),
    getUsers: build.query<IUsersResponse[], void>({
      query: () => 'users',
      providesTags: () => ['Users'],
    }),
  }),
});

export const {
  useChangeUsersRoleMutation,
  useChangeUsersStatusMutation,
  useDeleteUsersMutation,
  useGetMeQuery,
  useGetUsersQuery,
  usePostRegistrationMutation,
  usePostLoginMutation,
} = authApi;
