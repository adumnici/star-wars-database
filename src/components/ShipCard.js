import React from 'react';

const ShipCard = ({ships}) => {
    return(
        ships.map((data) =>{
            return(
                <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
                    <h3>{data.name}</h3>
                    <p>Model: {data.model}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                </div>
            )
        })
    )
}

export default ShipCard;