import React from 'react';

const Recipe = ({ title, calories, img }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ calories }</p>
            <img src={ img } alt="recipe food" />
        </div>
    )
}

export default Recipe;
