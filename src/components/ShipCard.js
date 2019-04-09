import React from 'react';
import Collapsible from 'react-collapsible';
import './ShipCard.css'

const ShipCard = ({ships}) => {
    return(
        ships.map((data) =>{
            return(
                <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
                    <h3>{data.name}</h3>
                    <Collapsible trigger='Show More' triggerWhenOpen='Show Less'>
                        <p>Model: {data.model}</p>
                        <p>Manufacturer: {data.manufacturer}</p>
                        <p>Cost in galactic credits: {data.cost_in_credits}</p>
                        <p>Number of crew required: {data.crew}</p>
                        <p>Length of ship: {data.length} m</p>
                        <p>Starship class: {data.starship_class}</p>
                    </Collapsible>
                </div>
            )
        })
    )
}

export default ShipCard;