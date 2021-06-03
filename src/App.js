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
    <div>
      <div className="top p-4">
        <div className="container">
          <form className="form-inline" onSubmit={ handleSearch }>
            <input className="form-control col-sm-10" type="text" placeholder="Search...." value={search} onChange={ updateSearch } />
            <button className="btn btn-primary col-sm-2" type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="bottom pt-4 mt-4">
        <div className="container">
          <div className="row">
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
      </div>
    </div>
  )
}

export default App;
