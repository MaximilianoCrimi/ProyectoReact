import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./NavBar";
import ItemListContainer from "./ItemListContainer";

const Router = () =>{

    <BrowserRouter>
        <Navegacion/>
        <Routes>
            <Route path ="/" element = {<ItemListContainer/>}></Route>
            <Route path ="/category/:saga" element = {<ItemListContainer/>}></Route>
            <Route path ="/" element = {<ItemListContainer/>}></Route>
            <Route path ="/" element = {<ItemListContainer/>}></Route>
        </Routes>
    </BrowserRouter>

}

export default Router;