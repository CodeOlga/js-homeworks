import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/swapiSlice";
import { useState } from "react";

import { isLoading } from "../../redux/slice/selectors";

import Data from "../Data/Data";
import ClearButton from "../ClearButton/ClearButton";

const Form = () => {
  const [endpoint, setEndpoint] = useState("");
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
          value={endpoint}
          onChange={(event) => setEndpoint(event.target.value)}
        />
        <button className="btn btn-outline-secondary" disabled={loading}>
          Get info
        </button>
      </div>

      <Data />
      <ClearButton setEndpoint={setEndpoint} />
    </form>
  );
};

export default Form;
