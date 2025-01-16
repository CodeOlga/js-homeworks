import { Link as RouterLink } from "react-router-dom";

import { Container, Typography, Link } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h1"
        color="error"
        sx={{ marginBottom: "40px" }}
      >
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginBottom: "40px" }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link
        component={RouterLink}
        to="/"
        sx={{
          textDecoration: "none",
        }}
      >
        Go to Main
      </Link>
    </Container>
  );
};

export default NotFound;
