import manga from "./MangaObj";
import Button from "./ButtonBuy";

const Card = () => {
    return(
        <div className='containerCard'>
            {manga.map((manga,i) =>(
                <div className='card' key={i}>
                    <h3>{`Saga: ${manga.saga}`}</h3>
                    <h4>{`Tomo: ${manga.tomo}`}</h4>
                    <img src={manga.imagen}/>
                    <p>{`$ ${manga.precio}`}</p>
                    <Button/>
                </div>
            ))}            
        </div>
    )
}


export default Card;