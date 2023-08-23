import React from "react";
import Taskbar from "./Taskbar";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <Taskbar
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h2>you have no task</h2>
      )}
    </>
  );
};

export default Content;
