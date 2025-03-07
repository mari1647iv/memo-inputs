import "./App.css";
import { useState } from "react";
import {ToDoItem} from "./ToDoList";
import { Button } from "./Button";

export const App = () => {
  //Задача 1
  let todos = todosData

  // Задача 2
  let users = usersData
  const [filter, setFilter] = useState('');

  const filteredUsers = () => {
    console.log('Filtering users');
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // Задача 3
  const [step, setStep] = useState(1);
  const [counterValue, setCounterValue] = useState(0);




  return (
    <div className="App">
      <hr/>
      <h3>Задача 1</h3>
      <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul> 


    <hr />
      <h3>Задача 2</h3>
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Фильтр по имени"
        />
        <ul>
          {filteredUsers().map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>


      <hr />
      <h3>Задача 3</h3>
      <div>Counter value {counterValue}</div>
      <span>Step</span>
      <input
        value={step}
        type="range"
        min="1"
        max="10"
      />
      <span>{step}</span>
      <br />
      <Button>Increment</Button>
      <Button>Decrement</Button>
      <hr />
    </div>
  );
};


// данные списка задач
const todosData = [
  { id: 1, text: 'Купить молоко', completed: false },
  { id: 2, text: 'Почитать книгу', completed: true },
  // добавь больше задач
];

// список пользователей
const usersData = [
  { id: 1, name: 'Иван' },
  { id: 2, name: 'Анна' },
  { id: 3, name: 'Олег' },
  { id: 4, name: 'Мария' },
  { id: 5, name: 'Алексей' },
  { id: 6, name: 'Елена' },
  { id: 7, name: 'Дмитрий' },
  { id: 8, name: 'Татьяна' },
  { id: 9, name: 'Сергей' },
  { id: 10, name: 'Юлия' },
  { id: 11, name: 'Николай' },
  { id: 12, name: 'Светлана' },
  { id: 13, name: 'Максим' },
  { id: 14, name: 'Ольга' },
  { id: 15, name: 'Александр' }
];
