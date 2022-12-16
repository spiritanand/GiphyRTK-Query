import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const gifhyApi = createApi({
  reducerPath: "gifhyApi",
  baseQuery  : fetchBaseQuery({baseUrl: "https://api.giphy.com/v1/gifs"}),
  endpoints  : (builder) => (
	{
	  getGifsBySearch: builder.query({
		query: (search) =>
		  `/search?api_key=T5bH5qVuo5SfLHMo9m7OCpZ1M52RcJan&q=${search}&limit=25&offset=0&rating=r&lang=en`,
	  }),
	  getGifById     : builder.query({
		query: (id) =>
		  `/${id}?api_key=T5bH5qVuo5SfLHMo9m7OCpZ1M52RcJan`,
	  }),
	}
  ),
});

export const {
			   useGetGifsBySearchQuery,
			   useGetGifByIdQuery
			 } = gifhyApi;