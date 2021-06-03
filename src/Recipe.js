import React from 'react';

const Recipe = ({ title, calories, img, ingredients }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <ul>
                { ingredients.map((itm, idx) => <li key={ idx }>{ itm.text }</li>) }
            </ul>
            <p>{ calories }</p>
            <img src={ img } alt="recipe food" />
        </div>
    )
}

export default Recipe;
