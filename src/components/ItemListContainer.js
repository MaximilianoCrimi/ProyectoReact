import React from 'react'
import ItemList from './ItemList';
import "./styles/Manga.css"
import { useParams } from 'react-router-dom';

 function ItemListContainer(greeting) {
  const {saga} = useParams();
console.log(saga)
  return (

    <div>
      <span>
        <br/><br/><br/><br/><br/><br/>
        <h1 style={{ color:"violet", paddingLeft:"30%", fontFamily:"arial"}}>{greeting.msg}</h1>
    
        <ItemList
          saga={saga}
        />
      </span>
      
      </div>
    
  )
}

export default ItemListContainer;