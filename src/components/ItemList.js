import {useState, useEffect} from 'react';
import Item from './Items';
import Manga from './MangaObj';


const ItemList=()=>{
    const[mangas, setMangas] = useState([])
    const [loading, isLoading] = useState(false);

    const listado = ()=>{
        let items = require(Manga);
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(items)
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
        <div>
            {!loading? mangas: mangas.map((el)=>(
                <Item
                    key={el.id}
                    tomo={el.tomo}
                    precio ={el.precio}
                    saga = {el.saga}
                    imagen = {el.imagen}
                />
            ))}
        </div>
    )
}

export default ItemList;