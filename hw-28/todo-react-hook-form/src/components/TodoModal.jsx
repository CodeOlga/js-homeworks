/* eslint-disable react/prop-types */
import Button from "./Button";

const TodoModal = ({ todo, onClose }) => {
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
            <h5 className="modal-title text-primary">Your ToDo</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-info">
            <p>{todo.name}</p>
          </div>
          <div className="modal-footer">
            <Button
              className="btn btn-outline-danger"
              title="Close"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
