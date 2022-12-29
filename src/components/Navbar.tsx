import React from 'react'
import { useSelector } from 'react-redux'
import { CartState } from '../types'
import styles from '../assets/styles/Navbar.module.css'

const {navbar, title, cartButton, amountCircle} = styles

const Navbar = () => {

    const {amount} = useSelector(store => store.cart) as CartState
    console.log(styles);
    
    return (
      <nav className={navbar}>
        <div>
            <h3 className={title}>Redux toolkit</h3>
            <button className={cartButton}>
                <ion-icon name="cart-outline"></ion-icon>
                <div className={amountCircle}>
                    <span>{amount}</span>
                </div>
            </button>
        </div>
      </nav>
  )
}

export default Navbar