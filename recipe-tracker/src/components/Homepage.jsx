import React from "react";

function Homepage(props) {
  return (
    <div>
      <h2>{props.recipe.fields.title}</h2>
      <img src={props.recipe.fields.recipe - image} alt="recipe-pic" />
      <h5>{props.recipe.fields.ingredients}</h5>
      <p>{props.recipe.fields.steps}</p>
    </div>
  );
}

export default Homepage;
