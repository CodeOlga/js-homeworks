import { useDispatch } from "react-redux";

import { clearData } from "../../redux/slice/swapiSlice";

const ClearButton = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearData());
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
