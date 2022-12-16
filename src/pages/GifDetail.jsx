import React from "react";
import {useParams} from "react-router-dom";
import Comments from "../components/Comments.jsx";
import GifItem from "../components/GifItem.jsx";
import {useGetGifByIdQuery} from "../store/services/gifhy.js";

function GifDetail({gif}) {
  const {id} = useParams();
  const {
		  data,
		  isLoading
		} = useGetGifByIdQuery(id);
  
  return (
	<div className="gifDetail">
	  {!isLoading
	   ? (
		 <>
		   <GifItem gif = {data?.data}></GifItem>
		   <Comments id={id}></Comments>
		 </>
	   )
	   : (
		 <h1>LOADING YOUR GIF</h1>
	   )}
	</div>
  );
}

export default GifDetail;