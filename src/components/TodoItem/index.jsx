import { useContext } from 'react'
import { TodoContext } from '../../Context'
import { CheckIcon } from '../../Icons'
import { TrashIcon } from '../../Icons'
import { XmarkIcon } from '../../Icons'
import './TodoItem.css'

export function TodoItem({ todo }) {
  const { updateTodo, deleteTodo } = useContext(TodoContext)
  return (
    <li className="todoItem">
      <button type="button" onClick={ () => updateTodo(todo) }>{todo.completed? <CheckIcon />: <XmarkIcon />}</button>
      <p className={todo.completed ? 'line-through' : ''}>{todo.text}</p>
      <button type="button" onClick={ () => deleteTodo(todo) }>
        <TrashIcon />
      </button>
    </li>
  )
}
