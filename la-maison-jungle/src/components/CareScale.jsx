//label de qualité : 1 - 2 - 3
const QuantityLabel = {
    1: 'peu',
    2: 'moyennement',
    3: 'beaucoup'
}



const CareScale = ({scaleValue, careType}) => {
    const range = [1, 2, 3];
    const scaletype = careType === 'light' ? '🌞' : '💧';

    return(
        <div 
            onClick={() => {
                alert(`Cette plante requiert ${QuantityLabel[scaleValue]} ${careType === 'light' ? 'ensoleillement' : 'arrosage'
                }`)
            }}
        >
            {
                range.map((rangeElement) =>
                    scaleValue >= rangeElement ? (<span key={rangeElement.toString()}>{scaletype}</span>) : null
                    
                )
            }
        </div>
    )
}

export default CareScale;