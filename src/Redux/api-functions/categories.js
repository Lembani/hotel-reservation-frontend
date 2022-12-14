import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stark-badlands-38572.herokuapp.com/api/v1' }),
  tagTypes: ['Cats'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories',
      providesTags: ['Cats'],
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ['Cats'],
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: '/categories',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['Cats'],
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: `/categories/${category.id}`,
        method: 'PATCH',
        body: category,
      }),
      invalidatesTags: ['Cats'],
    }),
    deleteCategory: builder.mutation({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Cats'],
    }),
    getCategoryHotels: builder.query({
      query: (id) => `/categories/${id}/hotels`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryHotelsQuery,
} = categoriesApi;
