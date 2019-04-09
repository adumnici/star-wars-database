import React from 'react';
import Collapsible from 'react-collapsible';
import './PersonCard.css'

const PersonCard = ({people}) => {
        return(
            people.map((data) =>{
                return(
                    <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3 justify-center">
                        <h3>{data.name}</h3>
                        <Collapsible trigger='Show More' triggerWhenOpen='Show Less'>
                            <p>Gender: {data.gender}</p>
                            <p>Height: {data.height} cm</p>
                            <p>Weight: {data.mass} kg</p>
                            <p>Year of birth: {data.birth_year}</p>
                            <p>Eye color: {data.eye_color}</p>
                            <p>Hair color: {data.hair_color}</p>
                        </Collapsible>
                    </div>
                )
            })
        ) 

}

export default PersonCard;
