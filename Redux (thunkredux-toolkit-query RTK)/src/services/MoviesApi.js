import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MoviesApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => "movies",
    }),
    deleteOne:builder.mutation({
            query: (id) => ({
            url:`movies/${id}`,
            method:"Delete"
        }),
        
    }),
    getOne: builder.query({
      query: (id) => `movies/${id}`,
    }),
    postMovie: builder.mutation({
      query: (payload)=>({
        url: 'movies',
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
  }),
});

export const { useGetAllDataQuery,useDeleteOneMutation,usePostMovieMutation,useGetOneQuery } = MoviesApi;
