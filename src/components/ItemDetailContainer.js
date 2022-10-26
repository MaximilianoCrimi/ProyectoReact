import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import "./styles/Manga.css";
import { Fragment } from 'react';
import Loading from './loading';
import { useParams } from 'react-router-dom';
import Manga from './Manga';


const ItemDetailContainer=()=>{
    const[mangas, setMangas] = useState(<Loading/>);
    const [loading, isLoading] = useState(false);
    const {mangaID} = useParams();

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
            {!loading? mangas: mangas.filter((manga)=>manga.id===mangaID).map((el)=>(
                <ItemDetail
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

export default ItemDetailContainer;