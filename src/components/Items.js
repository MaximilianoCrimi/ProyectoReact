import Button from "./ButtonBuy";
import "./styles/Manga.css"
const Item = (props) => {
    return(
        <div className='containerCard'>
       
                <div className='card'>
                    <h3>{`Saga: ${props.saga}`}</h3>
                    <h4>{`Tomo: ${props.tomo}`}</h4>
                    <img src={props.imagen}/>
                    <p>{`$ ${props.precio}`}</p>
                    <Button/>
                </div>
                  
        </div>
    )
}


export default Item;