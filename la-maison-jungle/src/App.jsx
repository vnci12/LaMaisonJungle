import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//j'importe le composant Banner.jsx
import Banner from './components/Banner'

//j'importe le composant Cart.jsx
import Cart from './components/Cart'

import ShoppingList from './components/ShoppingList'

import logo from './assets/fleur.jpg'

import styles from './styles/Banner.module.css'

import PlantItem from './components/PlantItem'

import QuestionForm from './components/QuestionForm'
import Footer from './components/Footer'



function App() {
  const title = "Bienvenue à la maison Jungle"

  /**
   * Lorsque j'appelle le composant <Banner>, j'y insère deux enfants <h1>
   */
  return (

    <>
      <Banner>
        <img src={logo} alt="logo de la maison" className={styles.logo}/>

        <h1 className={styles.title}>{title}</h1>
        
      </Banner>

      <Cart />

      <ShoppingList />

      <PlantItem />

      <QuestionForm />

      <Footer />
    </>
  )
}

export default App
