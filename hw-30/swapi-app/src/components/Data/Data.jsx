import { useSelector } from "react-redux";

import { swapiItems, apiEndpoint } from "../../redux/slice/selectors";

const Data = () => {
  const data = useSelector(swapiItems);
  const endpoint = useSelector(apiEndpoint);

  const endpointParts = endpoint.split("/");
  const endpointInfo =
    endpointParts.length > 1 ? `${endpointParts[0]} ${endpointParts[1]}` : "";

  return (
    <div className="d-flex justify-content-between mb-2 mt-2">
      <div className="border border-secondary rounded p-3 bg-light w-100">
        {endpointInfo && <h4>{endpointInfo}</h4>}
        <div className="border border-secondary rounded p-3 bg-light">
          {data && typeof data === "object" ? (
            <pre className="text-secondary">
              {JSON.stringify(data, null, 2)}
            </pre>
          ) : (
            <p className="text-secondary">No data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
