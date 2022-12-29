import { useState } from 'react'
import styles from './assets/styles/App.module.css'
import List from './components/List'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className=''>
      <Navbar/>
      <List/>
    </main>
  )
}

export default App
