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
            // transformResponse: (response) => {
            //     // console.log('at least one response', response)
            //     // const { token } = response;
            //     // const decoded_token = jwt_decode(token.access);
            //     // // Store the token in local storage
            //     // localStorage.setItem('token', JSON.stringify(token));
            //     // const data = { token: token, user: decoded_token, user_id: decoded_token.user }
        
            //     return response;
            //   }
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