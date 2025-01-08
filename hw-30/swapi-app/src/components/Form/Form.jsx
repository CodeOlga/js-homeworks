import { useDispatch, useSelector } from "react-redux";
import { fetchData, setEndpoint } from "../../redux/slice/swapiSlice";
import { isLoading, apiEndpoint } from "../../redux/slice/selectors";

const Form = () => {
  const endpoint = useSelector(apiEndpoint);
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const onSubmit = async () => {
    if (endpoint) {
      dispatch(fetchData(endpoint));
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        onSubmit();
      }}
    >
      <label htmlFor="basic-url" className="form-label">
        SWAPI
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">https://swapi.py4e.com/api/</span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          placeholder="people/1/"
          value={endpoint} // значення з Redux
          onChange={(event) => dispatch(setEndpoint(event.target.value))} // оновлюємо значення через Redux
        />
        <button className="btn btn-outline-secondary" disabled={loading}>
          Get info
        </button>
      </div>
    </form>
  );
};

export default Form;
