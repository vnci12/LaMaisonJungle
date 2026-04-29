/**
 * Banner est le composant pour présenter la barre de navigation
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison Jungle</h1>
 */

//j'importe le fichier Banner.css appliquer au composant
import styles from '../styles/Banner.module.css'

import logo from '../assets/fleur.jpg'

const Banner = () => {
    const title = "Bienvenue à la maison Jungle"
    return (
        <div className={styles.banner}>
            <img src={logo} alt="logo de la maison" className={styles.logo}/>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
};

/**
 * J'exporte le composant Banner utilisant les mots-clés export default suivi du nom du composant
 */
export default Banner