import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './app/store'
import styles from './assets/styles/App.module.css'
import List from './components/CartContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { useModal } from './context/ModalContext'
import { getCartItems, setTotals } from './features/cart/cartSlice'
import { CartState } from './types'

function App() {

  const {cartItems,isLoading} = useSelector(store => store.cart) as CartState
  const dispatch = useDispatch()
  const {modal} = useModal()

  useEffect(()=>{
    dispatch(setTotals())
  },[cartItems])

  useEffect(()=>{
    dispatch(getCartItems('random'))
  },[]) 

  if(isLoading){
    return <div>
        <h2>Loading...</h2>
    </div>
  }
  

  return (
    <main>
        {modal?<Modal/>:null}
        <Navbar/>
        <List/>
    </main>
  )
}

export default App
