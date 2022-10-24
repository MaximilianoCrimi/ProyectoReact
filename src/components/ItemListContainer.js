import React from 'react'
import ItemList from './ItemList';
 function ItemListContainer(greeting) {
  return (
    <div>
      <span>
        <br/><br/><br/><br/><br/><br/>
        <h1 style={{ color:"violet", paddingLeft:"30%", fontFamily:"arial"}}>{greeting.msg}</h1>
   
        <ItemList/>
      </span>
      
      </div>
    
  )
}

export default ItemListContainer;