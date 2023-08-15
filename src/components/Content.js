import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("abdoli");

  const handleRandomName = () => {
    const names = ["arsam", "navid", "hesam"];
    const intNum = Math.floor(Math.random() * 3);
    setName(names[intNum]);
  };

  return (
    <main>
      <button onClick={handleRandomName}>Name changer</button>
      <p>This is {name}'s code.</p>
    </main>
  );
};

export default Content;
