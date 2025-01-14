import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="red-color">404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Main</Link>
    </div>
  );
};

export default NotFound;
