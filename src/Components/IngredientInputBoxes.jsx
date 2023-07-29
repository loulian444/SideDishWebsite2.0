import { useState } from "react";

const IngredientInputBoxes = () => {
  // const inputArr = [
  //   {
  //     type: `text`,
  //     id: idCount,
  //     value: ``,
  //   },
  // ];

  // const [newInputArr, setNewInputArr] = useState(inputArr);

  // const addInput = (event) => {
  //   event.preventDefault()
  //   const inputObject = { type: `text`, value: `` };
  //   setNewInputArr([...newInputArr, inputObject]);
  // };

  const [ingredientCounter, setIngredientCounter] = useState(1);

  const handleClick = (event) => {
    event.preventDefault()
    setIngredientCounter(ingredientCounter + 1);
  };
  
  const myArr = Array.from(Array(ingredientCounter)).map(() => {
    return <input type='text' />;
  })
  
  const myNewArr = myArr.map((item) => {
    return <input key={myArr.indexOf(item)} type='text' />;
  })

  return (
    <>
      {myNewArr}
      <br />
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default IngredientInputBoxes;
