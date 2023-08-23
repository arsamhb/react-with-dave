import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import apiRequest from "./components/apiRequest";

function App() {
  const API_URL = "http://localhost:1234/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw Error("did not receive expected data");
          const data = await response.json();
          setItems(data);
          setFetchErr(null);
        } catch (err) {
          setFetchErr(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      setTimeout(() => {
        fetchData();
      }, 300);
    },
    /* ONLY WHEN PAGE LOADS */ []
  );

  const handleCheck = async (id) => {
    const tasks = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(tasks);

    const checkedItem = tasks.filter((item) => item.id === id);
    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: checkedItem[0].checked }),
    };
    const api_url = `${API_URL}/${id}`;
    const result = await apiRequest(api_url, updateOption);
    if (result) setFetchErr(result);
  };

  const handleDelete = async (id) => {
    const tasks = items.filter((item) => item.id !== id);
    setItems(tasks);

    const deleteOption = { method: "DELETE" };
    const api_url = `${API_URL}/${id}`;
    const result = await apiRequest(api_url,deleteOption)
    if (result) setFetchErr(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem();
    setNewItem("");
  };

  const addItem = async () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newTask = { id: id, checked: false, item: newItem };
    const tasks = [...items, newTask];
    setItems(tasks);

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      /* THE BODY SHOULD HAS THE JSON.TRINGIFY METHOD */
      body: JSON.stringify(newTask),
    };
    /* DONT FORGET AWAIT */
    const result = await apiRequest(API_URL, postOption);
    if (result) setFetchErr(result);
  };

  return (
    <div className="App">
      <Header />
      <AddForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem searchWord={searchWord} setSearchWord={setSearchWord} />
      <main>
        {isLoading && <p>Items are loading...</p>}
        {fetchErr && <p>{fetchErr}</p>}
        {!fetchErr && !isLoading && (
          <Content
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            items={items.filter((item) =>
              item.item.toLowerCase().includes(searchWord.toLowerCase())
            )}
          />
        )}
      </main>
      <Footer tasksLength={items.length} />
    </div>
  );
}

export default App;
