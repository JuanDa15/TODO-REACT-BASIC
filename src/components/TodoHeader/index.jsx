import { useContext } from "react"
import { TodoContext } from "../../Context"

const styles = {
  fontSize: '2rem',
  textAlign: 'left'
}

const lineStyles = {
  margin: '1.5rem 0'
}

export function TodoHeader() {
  const { completedTodos, totalTodos } = useContext(TodoContext)
  return (
    <>
      {
        totalTodos === completedTodos && totalTodos > 0
          ? <p>Felicitaciones!! completaste todas tus tareas</p>
          : <h1 style={ styles }> Completaste
              <p>{completedTodos} de</p> 
              <p>{totalTodos} TODO's</p>
            </h1>
      }
      <hr style={ lineStyles }/>
    </>
  )
}