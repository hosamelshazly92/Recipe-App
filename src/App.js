import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const appId = "ee67b852";
  const appKey = "6250b2ebd7cfe37e116e92645f480783";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
      const data = await response.json();
      setRecipes(data.hits);
      // console.log(data.hits);
    }

    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const handleSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="container">
      <form className="search-form" onSubmit={ handleSearch }>
        <input className="search-bar" type="text" value={search} onChange={ updateSearch } />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
        { recipes.map((itm, idx) => (
          <Recipe
            key={ idx }
            title={ itm.recipe.label }
            calories={ itm.recipe.calories }
            img={ itm.recipe.image }
            ingredients={ itm.recipe.ingredients }
          />
        )) }
      </div>
    </div>
  )
}

export default App;
