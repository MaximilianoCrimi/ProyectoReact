import React from 'react'

 function ItemListContainer(greeting) {
  return (
      <span>
        <br/><br/><br/><br/><br/><br/>
        <h1 style={{ color:"violet", paddingLeft:"30%", fontFamily:"arial"}}>{greeting.msg}</h1>
      </span>
    
  )
}

export default ItemListContainer;