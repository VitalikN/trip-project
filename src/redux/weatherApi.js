import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'T9HF2PGX8X4MYTME4FLMXP7C3';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline',
  }),
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (city) =>
        `/${city}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`,
    }),
    getCustomWeatherData: builder.query({
      query: ({ city, start, end }) =>
        `${city}/${start}/${end}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`,
    }),
  }),
});

export const { useGetWeatherDataQuery, useGetCustomWeatherDataQuery } =
  weatherApi;
