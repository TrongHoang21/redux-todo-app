import React, {useState} from 'react'
import './Input.css'
import {useDispatch} from 'react-redux'
import { saveTodo } from '../features/todoSlice';

function Input() {
  //useState to keep track the state this component
  const [input, setInput] = useState('');
  const dispatch = useDispatch();



  const addTodo = () => {
    console.log(`Adding ${input}`)

    dispatch(saveTodo({ //to interact w redux
      item: input,
      done: false,
      id: Date.now()
    }))
  }


  return (
    <div className='input'>
      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={addTodo}>Add!</button>
    </div>
  )
}

export default Input