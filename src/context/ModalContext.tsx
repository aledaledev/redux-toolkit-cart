import React, { createContext, ReactNode, useContext, useState } from 'react'

type ModalType = {
    modal:boolean,
    setModal:(value:boolean)=>void,
}

interface ModalProviderProps {
    children:ReactNode
}

const ModalContext = createContext({} as ModalType)

export function useModal(){
    return useContext(ModalContext)
}

const ModalProvider = ({children}: ModalProviderProps) => {

  const [modal, setModal] = useState(false)

  return <ModalContext.Provider value={{modal, setModal}}>
    {children}
  </ModalContext.Provider>
}

export default ModalProvider