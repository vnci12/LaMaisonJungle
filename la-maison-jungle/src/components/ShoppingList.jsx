/**
 * ShoppingList est un composant qui contient la liste des courses
 */

import styles from  '../styles/ShoppingList.module.css'


import CareScale from './CareScale'


const plantList = [
    {
        name: 'monstera',
        categorie: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: 'non',
        water: 2,
        light: 3
    },
    {
        name: 'fiscus lyrata',
        categorie: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 4,
        light: 2
    },
    {
        name: 'pothos argenté',
        categorie: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 1,
        light: 2
    },
    {
        name: 'yucco',
        categorie: 'classique',
        id: '4',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 5,
        light: 3
    },
    {
        name: 'palmier',
        categorie: 'classique',
        id: '5',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 4,
        light: 5
    },
    {
        name: 'mawa fulera',
        categorie: 'classique',
        id: '6',
        isBestSale: true,
        isSpecialOffer: 'non',
        water: true,
        light: true
    },

];

const ShoppingList = () => {
    return (
        <ul className={styles.lmjPlantlist}>
            {
                plantList.map((plant, index) => (
                    <li key={plant.id} className={styles.lmjPlantitems}>
                        {plant.isBestSale ? <span>+++❤️</span> : <span>---😣</span>}
                        {plant.name} <br></br>
                        {plant.isSpecialOffer ? <span className= {styles.lmjSales}>Solde</span> : <span></span>}

                        <CareScale careType="light" scaleValue = {plant.light}></CareScale>
                        <CareScale careType="water" scaleValue={plant.water}></CareScale>
                    </li>
                )
            )
            }
        </ul>
    )
}

export default ShoppingList