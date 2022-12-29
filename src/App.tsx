import { useEffect, useState } from 'react'
import { store } from './app/store'
import styles from './assets/styles/App.module.css'
import List from './components/CartContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { useModal } from './context/ModalContext'

function App() {

  //tambien sirve para no repetir el dispatch donde sea necesario
  /*const {cartItems} = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setTotals())
  },[cartItems])*/

  const {modal} = useModal()

  return (
    <main>
        {modal?<Modal/>:null}
        <Navbar/>
        <List/>
    </main>
  )
}

export default App
