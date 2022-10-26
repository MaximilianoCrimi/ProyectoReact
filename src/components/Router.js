import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Router = () =>{

   
return(

    <BrowserRouter>

    <Routes>
        <Route path ="/" element = {<ItemDetailContainer/>}></Route>
        <Route path ="/saga/:saga" element = {<ItemListContainer/>}></Route>
        <Route path ="/" element = {<ItemListContainer/>}></Route>
        <Route path ="/" element = {<ItemListContainer/>}></Route>
    </Routes>
</BrowserRouter>

)
}

export default Router;