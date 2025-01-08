import { useSelector } from "react-redux";

import { swapiItems } from "../../redux/slice/selectors";

const Data = () => {
  const data = useSelector(swapiItems);

  return (
    <div className="d-flex justify-content-between mb-2 mt-2">
      <div className="border border-secondary rounded p-3 bg-light w-100">
        {data && typeof data === "object" ? (
          <pre className="text-secondary">{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p className="text-secondary">No data</p>
        )}
      </div>
    </div>
  );
};

export default Data;
