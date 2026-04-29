/**
 * Le composant Cart vas représenter le panier de courses
 */

import styles from '../styles/Cart.module.css'

const Cart = () => {
    const montsera = 8
    const lierra = 12
    const bouquet = 15

    return (
        <div className={styles.cart}>
            <h2>Panier</h2>
            <ul>
                <li>Montsera: {montsera}€</li>
                <li>Lierre: {lierra}€</li>
                <li>Bouquet de Rose: {bouquet}€</li>
            </ul>
            <p>Total: {montsera + lierra + bouquet}€ </p>
        </div>
    )
};

export default Cart