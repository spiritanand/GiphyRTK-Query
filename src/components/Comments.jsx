import React, {useState} from "react";
import {badWordsFilterApi} from "../utils/badWordsFilterApi.js";

function Comments({id}) {
  const comments = JSON.parse(localStorage.getItem(id));
  const [commentText, setCommentText] = useState("");
  
  const handleCommentSubmit = async (e) => {
	e.preventDefault();
	
	const content = await badWordsFilterApi(commentText);
	console.log(content);
	
	if (comments) {
	  const commentsArr = JSON.parse(localStorage.getItem(id));
	  commentsArr.unshift(content);
	  localStorage.setItem(id, JSON.stringify(commentsArr));
	} else
	  localStorage.setItem(id, JSON.stringify([content]));
	
	setCommentText("");
  };
  
  
  return (
	<div>
	  <form onSubmit = {handleCommentSubmit}>
		<input type = "text"
			   value = {commentText}
			   onChange = {e => setCommentText(e.target.value)}
		/>
	  </form>
	  {comments
	   ? (
		 <div className="comment">
		   {comments.map((comment, index) => (
			 <p key = {index} className={`${comment.bad_words_total ? "left" : "right"}`}>
			   {comment.content}
			 </p>
		   ))}
		 </div>
	   )
	   : (
		 <>
		   <p>No Comments</p>
		 </>
	   )}
	</div>
  );
}

export default Comments;