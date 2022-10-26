import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacterById } from "./Manga";

const Caracter = () =>{
    const{mangaId} = useParams();

    const[caracter, setCaracter] =useState({});

    useEffect(()=>{
        setCaracter(getCharacterById(mangaId));
    })

    return(
        <div>{caracter}</div>
    )
}


export default Caracter;