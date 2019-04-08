import React from 'react';

const Buttons = ({onClickPeople, onClickShips, onClickFilms}) => {
    return(
        <div>
            <button src="#" alt="" value='people' onClick={onClickPeople}>People</button>
            <button src="#" alt="" value='films'onClick={onClickFilms}>Films</button>
            <button src="#" alt="" value='starhips' onClick={onClickShips}>Starships</button>
        </div>
        
    )
}
export default Buttons;