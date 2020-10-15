import React from "react";
// import { useParams } from "react-router-dom";
// import Homepage from "./Homepage";

const DetailedPage = (props) => {
  // const params = useParams();
  // const filterRecipes = props.recipes.filter((r) => r.fields.id === params.id);

  return (
    <div className="main-container">
      <div id="recipe-img"></div>
      <div id="ingredients-list"></div>
      <div id="steps"></div>
    </div>
  );
};

export default DetailedPage;
