/**
 * ShoppingList est un composant qui contient la liste des courses
 */

import styles from  '../styles/ShoppingList.module.css'


const plantList = [
    {
        name: 'monstera',
        categorie: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: 'non'
    },
    {
        name: 'fiscus lyrata',
        categorie: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: 'oui'
    },
    {
        name: 'pothos argenté',
        categorie: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: 'oui'
    },
    {
        name: 'yucco',
        categorie: 'classique',
        id: '4',
        isBestSale: false,
        isSpecialOffer: 'oui'
    },
    {
        name: 'palmier',
        categorie: 'classique',
        id: '5',
        isBestSale: false,
        isSpecialOffer: 'oui'
    },
    {
        name: 'mawa fulera',
        categorie: 'classique',
        id: '6',
        isBestSale: true,
        isSpecialOffer: 'non'
    },

];

const ShoppingList = () => {
    return (
        <ul className={styles.Imgplantlist}>
            {
                plantList.map((plant, index) => (
                    <li key={plant.id} className={styles.Imgplantitems}>
                        {plant.isBestSale ? <span>+++❤️</span> : <span>---😣</span>}
                        {plant.name} <br></br>
                        {plant.isSpecialOffer}
                    </li>
                )
            )
            }
        </ul>
    )
}

export default ShoppingList