import { useContext, useState } from "react";
import { XmarkIcon } from "../../Icons";
import { TodoContext } from "../../Context";
import './CreateTodo.css';

export function CreateTodo() {
  const { setOpenModal, createTodo } = useContext(TodoContext)
  const [description, setDescription] = useState('')

  const closeModal = () => {
    setOpenModal(false)
  }

  const handleChange = (event) => {
    const val = event.target.value;
    setDescription(val);
  }

  const create = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target))
    createTodo(formData.description)
    closeModal()
  }

  return (
    <>
      <div className="content">
        <button className="closeBtn" onClick={ closeModal }>
          <XmarkIcon />
        </button>
        <h1>Crear TODO</h1>
        <form onSubmit={ (event) => create(event)}>
          <textarea cols="30" rows="10" value={description} onChange={(event) => handleChange(event)} placeholder="Buy food" name="description"></textarea>
          <button type="submit">
            Crear
          </button>
        </form>
      </div>
    </>
  )
}