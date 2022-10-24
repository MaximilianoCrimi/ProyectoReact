import manga from "./MangaObj";
import Button from "./ButtonBuy";


//Mostrar el catalogo
const Card = ({saga, tomo, precio, imagen}) => {
    return(
        <div className='containerCard'>
        
                <div className='card'>
                    <h3>{`Saga: ${saga}`}</h3>
                    <h4>{`Tomo: ${tomo}`}</h4>
                    <img src={imagen}/>
                    <p>{`$ ${precio}`}</p>
                    <Button/>
                </div>
          
        </div>
    )
}


export default Card;