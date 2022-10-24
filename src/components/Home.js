import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
import manga from './MangaObj'





const Home = () => {
    const [filter, setFilter] = useState("");
    const [mangas, setMangas] = useState([]);
  

    const getImages = () => {
        let items = require("./MangaObj")
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(items)
            })
        },3000)
    };

    useEffect(() => {
        async function fetched(){
            const items = await getImages();
            setMangas(items)
        }
        fetched();
    }, []);

    return (
        <div className='containerCard'>
            <h2>Mangas</h2>
            <input
                id="filter"
                name="filter"
                type="text"
                value="filter"
                onChange={(event) => setFilter(event.target.value)}
            />
            <div className='card'>
                {
                    mangas ? mangas.filter((saga) => saga.mangas.includes(filter))
                        .map((mangas, i) => (
                            <Card
                                key={i}
                                saga={mangas.saga}
                                imagen={mangas.imagen}
                                tomo={mangas.tomo}
                                precio={mangas.precio}
                            />
                        ))
                        : mangas.filter((saga) => saga.mangas.includes(filter))
                            .map((mangas, i) => (
                                <Card
                                    key={i}
                                    saga={mangas.saga}
                                    imagen={mangas.imagen}
                                    tomo={mangas.tomo}
                                    precio={mangas.precio}
                                />
                ))}
            </div>

        </div>
    )

}


export default Home;