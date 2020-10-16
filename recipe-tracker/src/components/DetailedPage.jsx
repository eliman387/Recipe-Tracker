import React from "react";
// import { useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom'
// import axios from 'axios';
import "../App.css";
import logo from '../logo.png';

// import Homepage from "./Homepage";

const DetailedPage = (props) => {
  console.log(props);
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const cookIt = async () => {
  //     const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Recipes`;
  //     const response = await axios.get(foodURL, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //       },
  //     });
  //     console.log(response.data.records);
  //     setRecipes(response.data.records);
  //   };
  //   cookIt();
  // }, []);
  // const params = useParams();
  // const filterRecipes = props.recipes.filter((r) => r.fields.id === params.id);

  return (
    <div className="main-container">

      <div class="main_box">
				<h1>This is a test recipe title{props.recipes.fields}</h1>
        <img src={logo}
          width="300"
          height="300"
          alt="img"
          id="recipe-image"
          title="this is a test image hopefully it will display information eventually..." />
        

				<div className="spacer"></div>
				<div id="ingredient-box">
					<h3>Ingredients</h3>
					<ul id="ingredient-list">
						<li>These are test ingredients, hopefully we will display information eventually</li>
						<li>These are test ingredients, hopefully we will display information eventually</li>
						<li>These are test ingredients, hopefully we will display information eventually</li>
						<li>These are test ingredients, hopefully we will display information eventually</li>
						<li>These are test ingredients, hopefully we will display information eventually</li>
					</ul>
				</div>
				<div id="direction-box">
					<h3>Directions</h3>
					<ul id="direction-list">
						<li>These are test directions, hopefully we will display information eventually</li>
						<li>These are test directions, hopefully we will display information eventually</li>
						<li>These are test directions, hopefully we will display information eventually</li>
						<li>These are test directions, hopefully we will display information eventually</li>
						<li>These are test directions, hopefully we will display information eventually</li>
					</ul>
				</div>
				<div className="spacer"></div>
			
				<div className="spacer"></div>
			</div> 
    </div>
  );
};

export default DetailedPage;
