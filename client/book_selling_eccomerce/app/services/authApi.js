// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './endpoints';

// Define a service using a base URL and expected endpoints

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login/',
                method: 'POST',
                body: credentials
            }),
        }),
        signup: builder.mutation({

            query: (credentials) => {
                return {
                    url: 'signup/',
                    method: 'POST',
                    body: credentials,
                }
            },
        }),


    })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
    useLoginMutation,
    useLogoutMutation,
    useSignupMutation
} = authApi