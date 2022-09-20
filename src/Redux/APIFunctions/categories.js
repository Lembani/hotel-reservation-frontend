import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories',
    }),
    getCategoryById: builder.query({
      query: (id) => `categories/${id}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoriesApi;
