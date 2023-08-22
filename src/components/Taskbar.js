import TaskLine from "./TaskLine";

const Taskbar = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <TaskLine
            key={item.id}
            item={item}
            handleCheck={handleCheck} 
            handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default Taskbar;
