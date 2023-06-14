import { createContext } from "react";
import { useState } from "react";
import { useLocalStorage } from "../Hooks";
import { STORAGE_NAME } from "../constants"

export const TodoContext = createContext()

export function TodoProvider(props) {
  const { data:todos, updateStorage: updateTodos, loading} = useLocalStorage({
    storage_key: STORAGE_NAME,
    default_value: []
  })
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const filterTodos = todos.filter(
    todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  )
  
  const completedTodos = filterTodos.filter(todo => todo.completed).length;
  const totalTodos = filterTodos.length;

  const createTodo = (description) => {
    const toReturn = structuredClone(todos);
    const newTodo = {
      id: crypto.randomUUID(),
      text: description,
      completed: false
    }
    toReturn.push(newTodo);
    updateTodos(toReturn)
  }

  const updateTodo = (todo) => {
    const toReturn = structuredClone(todos);
    const index = toReturn.findIndex(item => item.id === todo.id)

    if (index !== -1) {
      toReturn[index].completed = !toReturn[index].completed;
      updateTodos(toReturn);
    }
  }

  const deleteTodo = (todo) => {
    const toReturn = structuredClone(todos);
    const index = toReturn.findIndex(item => item.id === todo.id)
    if (index !== -1) {
      toReturn.splice(index, 1);
      updateTodos(toReturn);
    }
  }
  return(
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      filterTodos,
      updateTodo,
      deleteTodo,
      loading,
      openModal,
      setOpenModal,
      createTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}