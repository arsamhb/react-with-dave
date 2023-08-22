import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("RsList"))
  );
  const [newItem, setNewItem] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const setAndSaveItems = (newListOfItems) => {
    setItems(newListOfItems);
    localStorage.setItem("RsList", JSON.stringify(newListOfItems));
  };

  const handleCheck = (id) => {
    const tasks = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(tasks);
  };

  const handleDelete = (id) => {
    const tasks = items.filter((item) => item.id !== id);
    setAndSaveItems(tasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem();
    setNewItem("");
  };

  const addItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const checked = false;
    const tasks = [...items, { id: id, checked: checked, item: newItem }];
    setAndSaveItems(tasks);
  };

  return (
    <div className="App">
      <Header />
      <AddForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        searchWord={searchWord} 
        setSearchWord={setSearchWord} 
        />
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={
          items.filter(item => ((item.item).toLowerCase()).includes(searchWord.toLowerCase()))
        }
      />
      <Footer tasksLength={items.length} />
    </div>
  );
}

export default App;
