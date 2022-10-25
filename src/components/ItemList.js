import {useState, useEffect} from 'react';
import Item from './Items';
import "./styles/Manga.css";
import { Fragment } from 'react';
import Loading from './loading';



const ItemList=()=>{
    const[mangas, setMangas] = useState(<Loading/>)
    const [loading, isLoading] = useState(false);

    const listado = ()=>{
        let items = require("./MangaObj.json")
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve((items))
                isLoading(true)
            }, 3000);
        })
    }


useEffect(()=>{
    async function fetchedItems(){
        const items = await listado();
        setMangas(items)
    }
    fetchedItems();
},[]);

    return(
        <Fragment>
            {!loading? mangas: mangas.map((el)=>(
                <Item
                    key={el.id}
                    tomo={el.tomo}
                    precio ={el.precio}
                    saga = {el.saga}
                    imagen = {el.imagen}
                />
            ))}
        </Fragment>
    )
}

export default ItemList;