import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://620d00aab573632593a20fcb.mockapi.io/contacts/',
  }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContacts: builder.mutation({
      query: (contactContent) => ({
        url: '/contacts',
        method: 'POST',
        body: contactContent,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContacts: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useAddContactsMutation,
} = contactsApi;
