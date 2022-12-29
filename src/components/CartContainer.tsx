import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartState } from '../types'
import CartItem from './CartItem'
import styles from '../assets/styles/CartContainer.module.css'
import { useModal } from '../context/ModalContext'

const {cartSection,cartTitle,advice,itemsContainer,totalPrice} = styles

const CartContainer = () => {

  const {cartItems, amount, total} = useSelector(store => store.cart) as CartState

  const {modal,setModal} = useModal()

  const showModal = () => {
    setModal(!modal)
    console.log('no pasa nada');
    
  }

  return (
    <section className={cartSection}>
      <div className={cartTitle}>
        <h3>Your cart</h3>
      </div>

      {amount===0?
      <div className={advice}>
        <h4>Cart is empty</h4>
        <span><ion-icon name="flash-outline"></ion-icon></span>
      </div>:
      <>
        <div className={itemsContainer}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}/>
          })}
        </div>
        <div className={totalPrice}>
          <h4>total </h4>
          <span>$ {total}</span>
        </div>
        <button onClick={showModal}>clear cart</button>
      </>
      }

    </section>
  )
}

export default CartContainer