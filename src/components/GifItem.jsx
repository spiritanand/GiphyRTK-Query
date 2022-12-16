import React from "react";
import {Link} from "react-router-dom";

function GifItem({gif}) {
  return (
	<div>
	  <Link to = {`/gif/${gif.id}`}>
		<img src = {gif.images.preview_webp.url}
			 alt = ""
		/>
	  </Link>
	</div>
  );
}

export default GifItem;