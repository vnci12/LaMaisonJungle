/**
 * Banner est le composant pour présenter la barre de navigation
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison Jungle</h1>
 */

//j'importe le fichier Banner.css appliquer au composant
import styles from '../styles/Banner.module.css'

import logo from '../assets/fleur.jpg'

/**
 * @param {*} param0
 * @returns 
 * Le composant Banner.jsx prend comme propos ses enfants déclarés dans le composant App.jsx
 * j'utilise {children} pour faire appel aux props venant du coposant <Banner></Banner> déclarer dans le composant App.jsx
 * Le composant Banner.jsx retourne un <div>
 */


const Banner = ({children}) => {
    const title = "Bienvenue à la maison Jungle"
    return (
        <div className={styles.banner}>
            {children}


        </div>
    )
};

/**
 * J'exporte le composant Banner utilisant les mots-clés export default suivi du nom du composant
 */
export default Banner