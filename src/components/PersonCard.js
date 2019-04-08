import React from 'react';

const PersonCard = ({people}) => {
        return(
            people.map((data) =>{
                return(
                    <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
                        <h3>{data.name}</h3>
                        <p>Gender: {data.gender}</p>
                        <p>Height: {data.height}</p>
                    </div>
                )
            })
        ) 

}

export default PersonCard;
