import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "yoga mohadese website deployment",
      checked: false,
    },
    {
      id: 2,
      item: "finsih you dont know js book",
      checked: false,
    },
    {
      id: 3,
      item: "learning react with dave completely",
      checked: false,
    },
  ]);

  const handleCheck = (id) => {
    const tasks = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(tasks);
    localStorage.setItem("RsList", JSON.stringify(tasks));
  };
  const handleDelete = (id) => {
    const tasks = items.filter((item) => item.id !== id);
    setItems(tasks);
    localStorage.setItem("RsList", JSON.stringify(tasks));
  };

  return (
    <div className="App">
      <Header 
      />
      <Content 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items}/>
      <Footer 
        tasksLength={items.length}
      />
    </div>
  );
}

export default App;
