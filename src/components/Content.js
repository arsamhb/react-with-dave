import React from "react";

const Content = () => {

    const handleRandomName = () => {
    const names = ["arsam", "navid", "hesam"];
    const intNum = Math.floor(Math.random() * 3);
    return names[intNum];
  };

  return (
  <main>
    <p>This is {handleRandomName()}'s code.</p>
  </main>
  );
};

export default Content;
