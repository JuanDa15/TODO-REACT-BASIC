import { TodoItem } from "../components/TodoItem";
import { TodoHeader } from "../components/TodoHeader";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoBtn } from "../components/CreateTodoBtn";
import { TodoSkeleton } from "../components/TodoSkeleton";
import { useContext } from "react";
import { TodoContext } from "../Context";
import { Modal } from "../components/Modal";
import { CreateTodo } from "../components/CreateTodo";

export function IndexUI () {

  const { totalTodos, filterTodos, loading, openModal } = useContext(TodoContext)

  return (
    <>
      <TodoHeader />
      <TodoSearch /> 
      {
        loading && 
          <>
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
          </> 
      }

      { 
        !loading && totalTodos === 0 && 
        <p><b>No tienes todos creados actualmente</b></p>
      }
      { 
        (!loading && totalTodos > 0) && <TodoList>
          {
            filterTodos.map((todo) => (
              <TodoItem
                key={'todo' + todo.id}
                todo={todo}
              />
            ))
          }
        </TodoList>
      }
      <CreateTodoBtn />

      { openModal && <Modal>
        <CreateTodo />
      </Modal>}
    </>
  )
}