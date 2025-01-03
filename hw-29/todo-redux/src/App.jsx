import { useSelector, useDispatch } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";
import Footer from "./components/Footer";

import { selectedTodo } from "./redux/slice/selectors";
import { setSelectedTodo, editItem } from "./redux/slice/todosSlice";

const App = () => {
  const selectedTodoItem = useSelector(selectedTodo); // Обране туду
  const dispatch = useDispatch();

  const handleSave = (id, newName) => {
    dispatch(editItem({ id, newName })); // Оновлюємо туду
  };

  return (
    <div className="container-sm">
      <h1 className="text-primary my-3">ToDoList</h1>
      <TodoForm />
      <TodoList />
      <Footer />
      {selectedTodoItem && (
        <TodoModal
          todo={selectedTodoItem}
          onClose={() => dispatch(setSelectedTodo(null))} // Закриття модального вікна
          onSave={handleSave} // Обробник збереження
        />
      )}
    </div>
  );
};

export default App;
