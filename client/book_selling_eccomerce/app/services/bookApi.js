// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './endpoints';

// Define a service using a base URL and expected endpoints

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books/get`,
      method: 'GET'
    }),
    getBookById: builder.query({
      query: (id) => `/books/get/${id}`,
      method: 'GET'
    }),
    order: builder.mutation({
      query: (credentials) => {
        // console.log("cre",credentials)
        return{
          url: 'order/create/',
          method: 'POST',
          body: credentials
      }},
  }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetBooksQuery,
  useGetBookByIdQuery,
  useOrderMutation
 } = bookApi