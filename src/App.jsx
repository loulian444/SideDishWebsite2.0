import { useEffect, useState } from "react";
import "./App.css";
import sideDishes from "./Components/SideDishes";
import Form from "./Components/Form.jsx"

function App() {
  const dishes = [...sideDishes];

  return (
    <>
      <Form />
    </>
  );
}

export default App;
