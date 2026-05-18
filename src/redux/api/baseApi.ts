import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.trainova.com/' }), // Mock base URL
  endpoints: (builder) => ({
    getTrainers: builder.query({
      query: () => `trainers`,
    }),
    getProducts: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetTrainersQuery, useGetProductsQuery } = baseApi;
