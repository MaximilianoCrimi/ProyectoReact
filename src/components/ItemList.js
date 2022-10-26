import {useState, useEffect} from 'react';
import Item from './Items';
import "./styles/Manga.css";
import { Fragment } from 'react';
import Loading from './loading';
import Manga from './Manga';

const ItemList=(prop)=>{
    const[mangas, setMangas] = useState(<Loading/>);
    const [loading, isLoading] = useState(false);
   


    const listado = ()=>{
        let items = Manga;
      
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
            {!loading? mangas
            : mangas
            .filter((manga)=> manga.saga === prop.saga).map((el)=>(
                <Item
                    key={el.id}
                    id={el.id}
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