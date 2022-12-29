import React from 'react'
import { useDispatch } from 'react-redux'
import styles from '../assets/styles/Modal.module.css'
import { useModal } from '../context/ModalContext'
import { cleanCart, setTotals } from '../features/cart/cartSlice'

const {backsideModal,modal, btnGroup} = styles

const Modal = () => {

    const dispatch = useDispatch()
    const {setModal} = useModal()

    const handleClear = () => {
      dispatch(cleanCart())
      dispatch(setTotals())
      setModal(false)
    }

  return (
    <div className={backsideModal}>
    <div className={modal}>
        <h4>remove all items from your shopping cart?</h4>
        <div className={btnGroup}>
            <button onClick={handleClear}>confirm</button>
            <button onClick={() => setModal(false)}>cancel</button>
        </div>
    </div>
    </div>
  )
}

export default Modal