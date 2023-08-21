import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TaskLine = ({ item, handleCheck, handleDelete }) => {
  return (
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
  );
};

export default TaskLine;
