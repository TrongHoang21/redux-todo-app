import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

//dispatch thi push,work onto redux, select grab the data
import {useSelector} from 'react-redux';
import {selectTodoList} from './features/todoSlice';



function App() {
  const myToDoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <h1>Miss U, Uno?</h1>

      <div className="app__container">
        <div className="app__todoContainer">
          {
            myToDoList.map(item => (
                <TodoItem 
                  key = {item.id}
                  name={item.item}
                  done={item.done}
                  id={item.id}
                />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
