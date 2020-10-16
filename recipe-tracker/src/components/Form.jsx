import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Form(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("poultry");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      ingredients,
      steps, 
      image,
      type,
    };
    const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Recipes`;
    await axios.post(
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
    setImage("");
    setType("");
    alert("Thank you for submitting your recipe to the site!");
  };
  return (
    <div id="form-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-inputs">Title: </label>
        <input className="form-inputs"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="type" className="form-inputs">Choose a Type: </label>

        <select className="form-inputs"
          name="type"
          formid="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option selected value="poultry">
            Poultry
          </option>
          <option value="beef">Beef</option>
          <option value="fish">Fish</option>
          <option value="pork">Pork</option>
          <option value="dessert">Dessert</option>
        </select>
        <label htmlFor="ingredients" className="form-inputs">Ingredients: </label>
        <textarea className="form-inputs"
          name="ingredients"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label htmlFor="steps" className="form-inputs">Steps: </label>
        <textarea className="form-inputs"
          name="steps"
          type="text"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <label htmlFor="image" className="form-inputs">Image: </label>
        <input className="form-inputs"
          name="image"
          type="url"
          value={image}
          placeholder="Image URL Address"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Save your recipe!</button>
      </form>
    </div>
  );
}

export default Form;
