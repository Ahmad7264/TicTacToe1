
import React, { useState } from 'react';
import  "./App.css";  
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from '@mui/material';
function App() {
  
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] =useState([]);

  const handleChange = ({ target }) => {
      setTodoText(target.value);
  };

  console.log(todoList);

  const handleSubmit = (event) =>{
    event.preventDefault();
    setTodoList ([...todoList, todoText]);
    setTodoText("");
  };

  const deleteTodo = (index) => {
    todoList.splice(index, 1)
    setTodoList([...todoList, todoText])
  }

  return (
    <div className="App">
      {/* Timer */}
      <header className='App-header'>
        <h1>TO DO</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className='todo-label'>What do you want to do</label>
        <br/>
        <input value={todoText} className='input' type='text' 
        onChange={(event) => handleChange(event) } 
        
        />
        <input className='button' type='submit' value= 'Submit' />

      </form> 
      {
        todoList.map((td, index) => (
          td !== "" && (
            <>
            <div className='todo'>
        <br/>
        <input type='checkbox' />
        <label>{td}</label>
        <IconButton onClick={() => deleteTodo(index)}>
        <DeleteIcon/>
        </IconButton>
      </div>
            </>
          )
        ))
      }
     
    
    </div>
  );
}

export default App;
