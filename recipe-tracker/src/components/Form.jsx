import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      ingredients,
      steps,
    };
    const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Recipes`;
    const response = await axios.post(
      foodURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setTitle("");
    setIngredients("");
    setSteps("");
  };
  return <div></div>;
}

export default Form;
