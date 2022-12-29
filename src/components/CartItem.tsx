import React from 'react'
import { CartItemProps } from '../types'
import styles from '../assets/styles/CartItem.module.css'

const {cartItem, image, productTitle, productPrice, productAmount,amountContainer,arrow} = styles

const CartItem = ({id,img,title,price, amount}:CartItemProps) => {
  return (
    <article className={cartItem} key={id}>
        <img className={image} src={img} alt={title} />
        <h3 className={productTitle}>{title}</h3>
        <span className={productPrice}>${price}</span>
        <div className={amountContainer}>
            <button className={arrow}><ion-icon name="chevron-up-outline"></ion-icon></button>
            <span className={productAmount}>{amount}</span>
            <button className={arrow}><ion-icon name="chevron-down-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CartItem