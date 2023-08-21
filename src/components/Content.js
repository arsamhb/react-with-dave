import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
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
    <main>
      {items.length ? (
        items.map((item) => (
          <ul>
            <li className="item" key={item.id}>
              <input
                onClick={() => handleCheck(item.id)}
                type="checkbox"
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          </ul>
        ))
      ) : (
        <h2>you have no task</h2>
      )}
    </main>
  );
};

export default Content;
