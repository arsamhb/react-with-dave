import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
function AddForm({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      {/* IT CAN BE SOMETHING LIKE THIS {(e) => handleSubmit(e)} */}
      <label htmlFor="add-new-item">Add item</label>
      <input
        type="text"
        ref={inputRef}
        autoFocus
        required
        placeholder="Add Item"
        /* THESE TWO GOLDEN LINE */
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        /* THESE TWO GOLDEN LINE */
      />
      <button 
        type="submit"
        onClick={() => inputRef.current.focus()} 
        aria-label="add-item-button"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddForm;
