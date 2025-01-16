import { useDispatch, useSelector } from "react-redux";
import { fetchData, setEndpoint } from "../../redux/slice/swapiSlice";
import { isLoading, apiEndpoint } from "../../redux/slice/selectors";
import { Paper, TextField, Button, Box } from "@mui/material";

const SwapiForm = () => {
  const endpoint = useSelector(apiEndpoint);
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const onSubmit = async () => {
    if (endpoint) {
      dispatch(fetchData(endpoint));
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      component="form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        label="API Endpoint"
        variant="outlined"
        fullWidth
        placeholder="people/1/"
        value={endpoint} // Значення з Redux
        onChange={(event) => dispatch(setEndpoint(event.target.value))} // Обновление значения через Redux
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Info"}
        </Button>
      </Box>
    </Paper>
  );
};

export default SwapiForm;
