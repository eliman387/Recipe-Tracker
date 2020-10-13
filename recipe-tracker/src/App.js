import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import DetailedPage from './components/DetailedPage'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navbar';

function App() {
  // const { recipes, setRecipes } = useState({});

  useEffect(() => {
    const cookIt = async () => {
      const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Recipes`
      const response = await axios.get(foodURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records);
    };
    cookIt();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
