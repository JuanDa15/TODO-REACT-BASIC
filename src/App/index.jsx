import { TodoProvider } from "../Context/TodoContext";
import { IndexUI } from "./indexUI";

export default function App() {
 
 return (
  <TodoProvider>
    <IndexUI />
  </TodoProvider>
 )
}