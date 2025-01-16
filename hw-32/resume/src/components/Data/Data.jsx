import { useSelector } from "react-redux";
import { swapiItems, apiEndpoint } from "../../redux/slice/selectors";
import { Paper, Typography, Box } from "@mui/material";

const Data = () => {
  const data = useSelector(swapiItems);
  const endpoint = useSelector(apiEndpoint);

  const endpointParts = endpoint.split("/");
  const endpointInfo =
    endpointParts.length > 1 ? `${endpointParts[0]} ${endpointParts[1]}` : "";

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2, mb: 2 }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          backgroundColor: "background.default",
          width: "100%",
        }}
      >
        {endpointInfo && (
          <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
            {endpointInfo}
          </Typography>
        )}
        <Paper
          elevation={2}
          sx={{
            padding: 2,
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {data && typeof data === "object" ? (
            <Typography
              component="pre"
              sx={{
                color: "text.secondary",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {JSON.stringify(data, null, 2)}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", textAlign: "center" }}
            >
              No data
            </Typography>
          )}
        </Paper>
      </Paper>
    </Box>
  );
};

export default Data;
