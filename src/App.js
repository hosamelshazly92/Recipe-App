import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const appId = "ee67b852";
  const appKey = "6250b2ebd7cfe37e116e92645f480783";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`);
      const data = await response.json();
      setRecipes(data.hits);
      // console.log(data.hits);
    }

    getRecipes();
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      { recipes.map((itm, idx) => (
        <Recipe 
          title={ itm.recipe.label }
          calories={ itm.recipe.calories }
          img={ itm.recipe.image }
          key={ idx }
        />
      )) }
    </div>
  )
}

export default App;
