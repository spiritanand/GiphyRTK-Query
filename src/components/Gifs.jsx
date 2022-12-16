import React from "react";
import {useGetGifsBySearchQuery} from "../store/services/gifhy.js";
import GifItem from "./GifItem.jsx";

function Gifs({searchTerm}) {
  const {
		  data,
		  isLoading
		} = useGetGifsBySearchQuery(searchTerm);
  
  return (
	<>
	  {data?.data.length
	   ? (
		 <>
		   {data.data.map(gif => (
			 <GifItem key = {gif.id}
					  gif = {gif}
			 >
			 </GifItem>
		   ))}
		 </>
	   )
	   : (
		 <div>
		   No gifs to show
		 </div>
	   )}
	</>
  );
}

export default Gifs;