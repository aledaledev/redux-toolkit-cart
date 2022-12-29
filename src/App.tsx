import { useState } from 'react'
import styles from './assets/styles/App.module.css'
import List from './components/CartContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar/>
      <List/>
    </main>
  )
}

export default App
