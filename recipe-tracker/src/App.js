import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import DetailedPage from './components/DetailedPage'
import './App.css';
import Header from './components/Header';

function App() {
  // const { recipes, setRecipes } = useState({});

  useEffect(() => {
    const cookIt = async () => {
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
      <Header/>
    </div>
  );
}

export default App;
