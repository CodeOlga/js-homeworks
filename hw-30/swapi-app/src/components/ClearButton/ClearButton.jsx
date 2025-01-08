/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { clearData } from "../../redux/slice/swapiSlice";

const ClearButton = ({ setEndpoint }) => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearData());
    setEndpoint("");
  };

  return (
    <div className="mt-3">
      <button className="btn btn-danger" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
