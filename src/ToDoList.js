// Компонент для задачи
export const ToDoItem = ({ todo }) => {
  console.log(`Rendering: ${todo.text}`);
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.text}
    </li>
  );
};
