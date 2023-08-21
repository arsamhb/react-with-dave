import React from "react";

const Footer = ({ tasksLength }) => {
  const today = new Date();
  return (
    <footer>
      <h5>
      {tasksLength ? `${tasksLength} ${tasksLength === 1 ? "task" : "tasks"} in the list.` : "NO TASK IN YOUR TODO LIST"}
      </h5>
      <h5>All rights reserved for R. &copy; {today.getFullYear()}</h5>
    </footer>
  );
};

export default Footer;
