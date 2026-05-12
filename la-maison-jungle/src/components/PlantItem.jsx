/**
 * Le composant plantitem gère 
 */

import CareScale from "./CareScale";

import style from "../styles/PlantItem.module.css";

const PlantItem = ({ id, cover, name, water, light, isBestSale }) => {
    const handleClick = () => {
        console.log("je clique dans PlantItem")
    }
    return (
        <li key={id} className={style.lmjPlantItems} onClick={handleClick}>
            <img className={style.lmjPlantItemCover} src={cover} alt={`${name} cover`} />
            {name}

            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem