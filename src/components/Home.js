import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
import manga from './MangaObj'



const Home = () => {
    const [mangas, setMangas] = useState([]);
    const [filter, setFilter] = useState("");
    const { cat } = useParams();

    const getImages = () => {
        setTimeout(() => {
            const mangas = manga;
            setMangas(mangas);
        }, 9999999);
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className='principal'>
            <h2>principal</h2>
            <input
                id="filter"
                name="name"
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />

            <div className='secundario'>
                {cat ?
                    mangas.filter((manga) => manga.mangas.includes(filter))
                        .filter((manga) => manga.saga === cat)
                        .map((manga, i) => (
                            <Card
                                id={i}
                                key={i}
                                saga={manga.saga}
                                tomo={manga.tomo}
                                precio={manga.precio}
                                imagen={manga.imagen}
                            />
                        ))
                    : mangas.filter((manga) => manga.mangas.includes(filter))
                        .map((manga, i) => (

                            <Card
                                id={i}
                                key={i}
                                saga={manga.saga}
                                tomo={manga.tomo}
                                precio={manga.precio}
                                imagen={manga.imagen}
                            />
                        ))
                }
            </div>

        </div>
    )
}




export default Home;