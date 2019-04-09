import React from 'react';
import './Buttons.css'

const Buttons = ({onClickPeople, onClickShips, onClickFilms, onClickSpecies}) => {
    return(
        <div className="container">
            <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black btn yellow" src="#" alt="" value='people' onClick={onClickPeople}>People</button>
            <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black btn yellow" src="#" alt="" value='films'onClick={onClickFilms}>Films</button>
            <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black btn yellow" src="#" alt="" value='starhips' onClick={onClickShips}>Starships</button>
            <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black btn yellow" src="#" alt="" value='starhips' onClick={onClickSpecies}>Species</button>
        </div>
        
    )
}
export default Buttons;