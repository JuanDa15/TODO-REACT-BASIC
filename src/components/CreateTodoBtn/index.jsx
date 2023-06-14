import { useContext } from 'react';
import { AddIcon } from '../../Icons';
import './CreateTodoBtn.css';
import {TodoContext} from './../../Context'
export function CreateTodoBtn() {
  const { setOpenModal } = useContext(TodoContext)
  const clickHandler = (event) => {
    setOpenModal(true)
  }
  
  return (
    <button 
      type="button" 
      className="todo-btn"
      onClick={ (event) => clickHandler(event)}
    >
      <AddIcon />
    </button>
  )
}