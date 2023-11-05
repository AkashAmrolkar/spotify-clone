import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '59dca20fe8msh7f03a3b2e8caa57p1ba952jsndfa16d6c45fe',
//       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//     }
//   };

//   fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/charts',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '59dca20fe8msh7f03a3b2e8caa57p1ba952jsndfa16d6c45fe');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetTopCharts: builder.query({ query: () => '/track/' }),
    GetSongDetails: builder.query({ query: (songid) => `https://shazam.p.rapidapi.com/shazam-songs/get-details?track_id=${songid}` }),
  }),

});

export const {
  useGetTopChartsQuery, useGetSongDetailsQuery,
} = shazamCoreApi;
