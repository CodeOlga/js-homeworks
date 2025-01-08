import { useDispatch, useSelector } from "react-redux";

import { clearData } from "../../redux/slice/swapiSlice";
import { isLoading } from "../../redux/slice/selectors";

const ClearButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <div className="mt-3">
      <button
        className="btn btn-danger"
        onClick={handleClear}
        disabled={loading}
      >
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
