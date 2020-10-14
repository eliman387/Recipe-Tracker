import React from "react";
import { useParams } from "react-router-dom";
import Homepage from "./Homepage";

const CategoryPage = (props) => {
  const params = useParams();
  const filterRecipes = props.recipes.filter(
    (r) => r.fields.type === params.type
  );
  return (
    <div>
      {filterRecipes.map((r) => (
        <Homepage recipe={r} />
      ))}
    </div>
  );
};

export default CategoryPage;
