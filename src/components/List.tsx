import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {

  const cartStore = useSelector(store => store.cart)

  return (
    <ul>
        {cartStore.cartItems.map(({amount,id,img,price,title}) => {
            return(
                <li key={id}>
                    <img src={img} alt={title} />
                    <h4>{title}</h4>
                    <span>{price}</span>
                </li>
            )
        })}
    </ul>
  )
}

export default List