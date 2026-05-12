/**
 * ShoppingList est un composant qui contient la liste des courses
 */

import styles from  '../styles/ShoppingList.module.css'

import CareScale from './CareScale'

import monstera from '../assets/monstera-unsplash.jpg'

import PlantItem from './PlantItem'

import QuestionForm from './QuestionForm'



const plantList = [
    {
        name: 'monstera',
        categorie: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: 'non',
        water: 2,
        light: 3,
        cover: monstera
    },
    {
        name: 'fiscus lyrata',
        categorie: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 4,
        light: 2,
        cover: monstera
    },
    {
        name: 'pothos argenté',
        categorie: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 1,
        light: 2,
        cover: monstera
    },
    {
        name: 'yucco',
        categorie: 'classique',
        id: '4',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 5,
        light: 3,
        cover: monstera
    },
    {
        name: 'palmier',
        categorie: 'classique',
        id: '5',
        isBestSale: false,
        isSpecialOffer: 'oui',
        water: 4,
        light: 5,
        cover: monstera
    },
    {
        name: 'mawa fulera',
        categorie: 'classique',
        id: '6',
        isBestSale: true,
        isSpecialOffer: 'non',
        water: 3,
        light: 2,
        cover: monstera
    },

];

const ShoppingList = () => {

    return (
        <ul className={styles.lmjPlantlist}>
            {
                plantList.map(({id, name, cover, water, light}) => (
                    <PlantItem
                        key= {id}
                        id= {id}
                        name= {name}
                        cover= {cover}
                        water= {water}
                        light= {light}
                    />
                )
            )
            }
        </ul>
    )
}

export default ShoppingList