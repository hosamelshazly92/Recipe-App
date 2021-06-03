import React from 'react';

const Recipe = ({ title, calories, img, ingredients }) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="card">
                <img src={ img } className="card-img-top" alt="recipe food" />

                <div className="card-body">
                    <h2 className="card-title">{ title }</h2>
                    <p className="card-text">
                        <strong>Calories:</strong> <span>{ calories.toFixed(2) } claorie</span>
                    </p>
                </div>
                
                <ul className="list-group list-group-flush">
                    { ingredients.map((itm, idx) => <li key={ idx } className="list-group-item">{ itm.text }</li>) }
                </ul>
            </div>
        </div>
    )
}

export default Recipe;
