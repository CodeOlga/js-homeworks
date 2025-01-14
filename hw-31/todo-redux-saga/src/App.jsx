import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";
import Footer from "./components/Footer";

import { selectedTodo } from "./redux/slice/selectors";
import { startFetchingTodos, setSelectedTodo } from "./redux/slice/todosSlice";

const App = () => {
  const selectedTodoItem = useSelector(selectedTodo);
  const dispatch = useDispatch();

  // з saga діспатчимо ті actions, які знаходяться в watcher
  useEffect(() => {
    dispatch(startFetchingTodos());
  }, [dispatch]);

  return (
    <div className="container-sm">
      <h1 className="text-primary my-3">ToDoList</h1>
      <TodoForm />
      <TodoList />
      <Footer />
      {selectedTodoItem && (
        <TodoModal
          todo={selectedTodoItem}
          onClose={() => dispatch(setSelectedTodo(null))}
        />
      )}
    </div>
  );
};

export default App;
