/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

const TodoModal = ({ todo, onClose, onSave }) => {
  const [newName, setNewName] = useState(todo.name); // Стан для зберігання нового імені

  const handleSave = () => {
    onSave(todo.id, newName); // Зберігаємо зміни
    onClose(); // Закриємо модальне вікно
  };

  return (
    <div
      className="modal show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary">Edit Your ToDo</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-info">
            <input
              type="text"
              className="form-control"
              value={newName}
              onChange={(e) => setNewName(e.target.value)} // Оновлюємо стан
            />
          </div>
          <div className="modal-footer">
            <Button
              className="btn btn-outline-danger"
              title="Close"
              onClick={onClose}
            />
            <Button
              className="btn btn-outline-success"
              title="Save"
              onClick={handleSave} // Зберігаємо зміни
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
