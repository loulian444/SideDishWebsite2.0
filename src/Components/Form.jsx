import { useState, useEffect } from "react"
import IngredientInputBoxes from "./IngredientInputBoxes";

const Form = () => {
  const [dishNameInput, setDishNameInput] = useState(``);
  const [imageInput, setImageInput] = useState(``);
  const [linkInput, setLinkInput] = useState(``);
  const [sauceIngredientsInput, setSauceIngredientsInput] = useState([]);

  return (
    <>
      <form>
        <h3>Input New Dish</h3>
        <label>
          Dish Name:{" "}
          <input
            type="text"
            value={dishNameInput}
            onChange={() => console.log(`hello`)}
          />
        </label>
        <br />
        <label>
          Image:{" "}
          <input
            type="text"
            value={imageInput}
            onChange={() => console.log(`hello`)}
          />
        </label>
        <br />
        <label>
          Link:{" "}
          <input
            type="text"
            value={linkInput}
            onChange={() => console.log(`hello`)}
          />
        </label>
        <br />
        <label id="ingredients" className="flex">
          Ingredients:{" "}
          <IngredientInputBoxes />
        </label>
        <br />
        <label>
          Sauce Ingredients:{" "}
          <input
            type="text"
          />
          <button>+</button>
        </label>
      </form>
    </>
  );
};

export default Form;