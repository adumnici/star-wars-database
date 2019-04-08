import React from 'react';

const FilmCard = ({films}) => {
        return(
            films.map((data) =>{
                return(
                    <div className="bg-yellow shadow-5 tc dib pa3 ma2 br3">
                        <h3>{data.title}</h3>
                        <p>{data.opening_crawl}</p>
                        <p>Director: {data.director}</p>
                        <p>Release Date: {data.release_date}</p>
                    </div>
                )
            })
        ) 

}

export default FilmCard;
