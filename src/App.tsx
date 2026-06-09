import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AnimeListing from "./pages/AnimeListing";
import AnimeDetails from "./pages/AnimeDetails";


export default function App(){

return (

<BrowserRouter>

<Routes>

<Route 
path="/"
element={<MainPage/>}
/>


<Route
path="/anime"
element={<AnimeListing/>}
/>


<Route
path="/anime/:id"
element={<AnimeDetails/>}
/>


</Routes>

</BrowserRouter>

)

}