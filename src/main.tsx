import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.css'
import {store} from './app/store'
import { Provider } from 'react-redux'
import ModalProvider from './context/ModalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
      <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
)
