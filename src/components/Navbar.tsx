import { useSelector } from 'react-redux'
import React from 'react'

const Navbar = () => {

    const cartStore = useSelector(store => store.cart)  

    return (
      <nav>
        <div>
            <h3>Redux toolkit</h3>
            <button>
                <ion-icon name="cart-outline"></ion-icon>
                <div>
                    <p>{cartStore.amount}</p>
                </div>
            </button>
        </div>
      </nav>
  )
}

export default Navbar