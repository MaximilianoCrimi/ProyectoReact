import Button from "./ButtonBuy";
import "./styles/Manga.css";
import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <div className='containerCard'>
      
                <div className='card'>
                    <h3>{`Saga: ${props.saga}`}</h3>
                    <h4>{`Tomo: ${props.tomo}`}</h4>
                    <img alt = {`saga ${props.saga} tomo${props.tomo}`} src={props.imagen}/>
                    <p>{`$ ${props.precio}`}</p>
                    <p>{`# ${props.id}`}</p>
                    <Button/>
                </div>
                
        </div>
    )
}


export default Item;