import React, {useState} from "react";
import Gifs from "../components/Gifs.jsx";

function Home(props) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSubmit = (e) => {
	e.preventDefault();
	setSearchTerm(e.target[0].value);
	e.target[0].value = "";
  };
  
  
  return (
	<div>
	  <form onSubmit = {handleSubmit}>
		<input type = "text"
		/>
		<button>Submit</button>
	  </form>
	  
	  <Gifs searchTerm={searchTerm}></Gifs>
	  
	</div>
  );
}

export default Home;