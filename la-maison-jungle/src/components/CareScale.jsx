const CareScale = ({scaleValue, careType}) => {
    const range = [1, 2, 3];
    const scaletype = careType === 'light' ? '🌞' : '💧';

    return(
        <div>
            {
                range.map((rangeElement) =>
                    scaleValue >= rangeElement ? (<span key={rangeElement.toString()}>{scaletype}</span>) : null
                    
                )
            }
        </div>
    )
}

export default CareScale;