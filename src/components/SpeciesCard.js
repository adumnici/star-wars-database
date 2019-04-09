import React from 'react';
import Collapsible from 'react-collapsible';
import './SpeciesCard.css'

const SpeciesCard = ({species}) => {
        return(
            species.map((data) =>{
                return(
                    <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
                        <h3>{data.name}</h3>
                        <Collapsible trigger='Show More' triggerWhenOpen='Show Less'>
                            <p>Classification: {data.classification}</p>
                            <p>Type of species: {data.designation}</p>
                            <p>Average height: {data.average_height} cm</p>
                            <p>Average lifespan: {data.average_lifespan} years</p>
                            <p>Eye color: {data.eye_colors}</p>
                            <p>Commonly spoken language: {data.language}</p>
                        </Collapsible>
                    </div>
                )
            })
        ) 

}

export default SpeciesCard;
