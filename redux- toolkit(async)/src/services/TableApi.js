import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CustomerAPi = createApi({
  reducerPath: "tableApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => "customers",
    }),
    deleteOne:builder.mutation({
            query: (id) => ({
            url:`customers/${id}`,
            method:"Delete"
        }),
        
    })
  }),
});

export const { useGetAllDataQuery,useDeleteOneMutation } = CustomerAPi;
