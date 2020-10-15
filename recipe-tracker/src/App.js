import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import DetailedPage from './components/DetailedPage'
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navbar";
import Homepage from "./components/Homepage";
import CategoryPage from "./components/CategoryPage";
import Form from "./components/Form";
import DetailedPage from "./components/DetailedPage";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const cookIt = async () => {
      const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Recipes`;
      const response = await axios.get(foodURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records);
      setRecipes(response.data.records);
    };
    cookIt();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route exact path="/">
        {recipes.map((recipe) => (
          <Homepage recipe={recipe} />
        ))}
      </Route>
      <Route path="/recipes/:type">
        <CategoryPage recipes={recipes} />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/recipes/:id">
        <DetailedPage />
      </Route>
    </div>
  );
}

export default App;
