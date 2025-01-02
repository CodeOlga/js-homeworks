import { useSelector } from "react-redux";
import { todosItems } from "../redux/slice/selectors";

const Footer = () => {
  const todos = useSelector(todosItems); // Отримуємо список туду з Redux
  const totalCount = todos.length; // Рахуємо кількість туду

  return (
    <footer className="text-center mt-4">
      <p className="text-muted">
        Total ToDo: <strong>{totalCount}</strong>
      </p>
    </footer>
  );
};

export default Footer;
