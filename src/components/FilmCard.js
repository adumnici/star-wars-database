import React from 'react';
import Collapsible from 'react-collapsible';
import './FilmCard.css'

const FilmCard = ({films}) => {
        return(
            films.map((data) =>{
                return(
                    <div className="bg-yellow shadow-5 tc dib pa3 ma2 br3">
                        <h3>{data.title}</h3>
                        <Collapsible trigger='Show more' triggerWhenOpen='Show Less'>
                            <p>{data.opening_crawl}</p>
                            <p>Director: {data.director}</p>
                            <p>Release Date: {data.release_date}</p>
                        </Collapsible>
                    </div>
                )
            })
        ) 

}

export default FilmCard;
