import React, { useState, useEffect } from 'react';
import TodoThings from '../assets/Delete.jsx';
import '../App.css';  

function Todo() {
  const [toDo, setToDo] = useState([])
  const [newTD, setNewTD] = useState("")
  const [disableAdd, setDisableAdd] = useState(true);
  const [empty, setEmpty] = useState("");

  const addToDo = () => {
    if (newTD.trim() !== ""){
      const newReq = {
          id: Date.now(),
          text: newTD
      }
      setToDo([...toDo, newReq]);
      setNewTD("");
    }
  }

  const deleteToDo = (tdID) => {
    const updatedToDo = toDo.filter((td) => td.id !== tdID);
    setToDo(updatedToDo);
  };

  useEffect(() => {
    setDisableAdd((newTD === "" || !/^[a-zA-z\s]+$/.test(newTD)))
  }, [newTD]);

  const disabled = {disableAdd}; 

  return (
    <div  className = "main2">
      <div className='box2'>
        <div className = "title2">
          <p>Say's To-do list</p>
        </div>
        <div>
          <input 
            type="text"
            placeholder="What to do?"
            value={newTD}
            onChange={(e) => setNewTD(e.target.value)}
            className="search2"
          />
          <button className="button2" onClick={addToDo} disabled={disableAdd}>GO!</button>
          </div>
        {disableAdd && newTD.trim() !== "" ? <p className="tderror">No special characters or numbers!</p> : null} 
        <div className='text2'>
          {toDo.map((td) => (
            <TodoThings 
              key={td.id} 
              td={td} 
              onDelete={deleteToDo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todo