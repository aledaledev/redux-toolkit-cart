import React from 'react'
import { CartItemProps } from '../types'
import styles from '../assets/styles/CartItem.module.css'
import { useDispatch } from 'react-redux'
import { decreaseItem, increaseItem, removeItem, setTotals } from '../features/cart/cartSlice'

const {cartItem, image, productTitle, productPrice, productAmount,amountContainer,arrow,infoItem} = styles

const CartItem = ({id,img,title,price, amount}:CartItemProps) => {

  const dispatch = useDispatch()

  const addButton = (id:string) => {    
    dispatch(increaseItem(id))
    dispatch(setTotals())
  }

  const removeButton = (id:string) => {
    if(amount===1){
      dispatch(removeItem(id))
    } else {
      dispatch(decreaseItem(id))
    }
    dispatch(setTotals())
  }

  const removeFromCart = (id:string) => {  
    dispatch(removeItem(id))
    dispatch(setTotals())
  }

  return (
    <article className={cartItem} key={id}>
        <img className={image} src={img} alt={title} />
        <div className={infoItem}>
          <h3 className={productTitle}>{title}</h3>
          <button onClick={() => removeFromCart(id)}>remove</button>
        </div>
        <span className={productPrice}>${price}</span>
        <div className={amountContainer}>
            <button onClick={()=>addButton(id)} className={arrow}><ion-icon name="chevron-up-outline"></ion-icon></button>
            <span className={productAmount}>{amount}</span>
            <button onClick={()=>removeButton(id)} className={arrow}><ion-icon name="chevron-down-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CartItem