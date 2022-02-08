import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {addTodo, deleteTodo, removeTodo} from "../actions/index"
function Todo() {

    const[inputData, setInputData]= useState('');
    const dispatch= useDispatch();
  return <div>
      <div>
      <figure>
        Add your list here
      </figure>

      <div>
        <input type="text" placeholder= "Add your task" 
        value={inputData}
        onChange={(event)=>{
            setInputData(event.target.value)
        }}
        />
        <button onClick={()=>{
            dispatch(addTodo(inputData))
        }}>+</button>
      </div>
    </div>
  </div>;
}

export default Todo;
