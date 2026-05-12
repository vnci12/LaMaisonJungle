/**
 * QuestionForm component me permet de poser une question à l'utilisateur et de récupérer sa réponse
 * Le composant QuestionForm retourne un formulaire avec une question et un champ de saisie pour la réponse
 */

import { useState } from 'react'


// Déclaration du composant fonctionnel QuestionForm
const QuestionForm = () => {

    // Déclaration d'une variable d'état pour stocker la valeur du champ de saisie
    const [inputValue, setInputValue] = useState('')

    // Fonction appelée lors de la soumission du formulaire
    const handleSubmit = (event) => {
        // Empêche le rechargement de la page lors de la soumission
        event.preventDefault()
        // Affiche la valeur saisie dans le champ "question"
        alert(event.target['question'].value)
    }

    const checkValue = (value) => {
        if (!value.includes('p')) {
            setInputValue(value)
        }
    }

    // Rendu du formulaire avec un champ texte et un bouton
    return (
        <div>

            <textarea value={inputValue} onChange={(event) => checkValue(event.target.value)} />

            <button onClick={() => alert(inputValue)}>Envoyer</button>
        </div>
    )
}

export default QuestionForm