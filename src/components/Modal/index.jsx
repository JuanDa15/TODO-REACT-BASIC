import './Modal.css'
import { createPortal } from "react-dom";

export function Modal({ children }) {
  return (
    createPortal(
      <div className='modal-wrapper'>
        <div className="modal">
          {children}
        </div>
      </div>,
      document.getElementById('modal')
    )
  )
}