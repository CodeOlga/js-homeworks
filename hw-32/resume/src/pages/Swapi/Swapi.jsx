import { Container, Paper, Typography } from "@mui/material";

import SwapiForm from "../../components/SwapiForm/SwapiForm";
import Data from "../../components/Data/Data";
import ClearButton from "../../components/ClearButton/ClearButton";

const Swapi = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" sx={{ marginBottom: "40px" }}>
        Star Wars API
      </Typography>
      <Paper
        sx={{
          padding: "20px 60px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <SwapiForm />
        <Data />
        <ClearButton />
      </Paper>
    </Container>
  );
};

export default Swapi;
