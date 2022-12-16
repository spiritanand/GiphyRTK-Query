import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import GifDetail from "./pages/GifDetail.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/"
		 element = {<RootLayout></RootLayout>}
  >
	<Route index
		   element = {<Home></Home>}
	></Route>
	<Route path = "/gif/:id"
		   element = {<GifDetail></GifDetail>}
	></Route>
  </Route>
));

function App(props) {
  return (
	<RouterProvider router = {router}/>
  );
}

export default App;