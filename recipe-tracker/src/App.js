import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DetailedPage from './components/DetailedPage'
import './App.css';

function App() {
  const { recipes, setRecipes } = useState({});

  useEffect(() => {
    async function cookIt() {
      const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Recipes`
      const response = await axios.get(foodURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      console.log(response.data.message); 
    }
    cookIt();
  }, []);

  return (
    <div className="App">
      {/* <h2>{recipes}</h2> */}
      {/* <h3></h3>
      <h3></h3> */}
    </div>
  );
}

export default App;
