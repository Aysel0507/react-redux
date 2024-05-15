import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (title) => `pokemon/${title}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
