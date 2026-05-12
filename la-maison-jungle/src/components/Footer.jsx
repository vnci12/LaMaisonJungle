import style from '../styles/Footer.module.css';

import { useState } from 'react';

const Footer = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleBlur = () => {
        if(!inputValue.includes('@')) {
            alert('Veuillez entrer une adresse mail valide');
        }
    }

    return (
        <footer className={style.lmjFooter}>
            <div className={style.lmjFooterElem}>
                Pour les passionnés de plantes 🌸🏵️🌹🌺🌻🌼🌷💐
            </div>

            <input placeholder="Entrer votre adresse mail" value={inputValue} onChange={handleInput} onBlur={handleBlur} />
        </footer>
    )
}


export default Footer