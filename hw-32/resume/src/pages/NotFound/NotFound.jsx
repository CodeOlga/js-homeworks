import { Link } from "react-router-dom";

import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1" component="h1">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" component="p">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link to="/">Go to Main</Link>
    </Container>
  );
};

export default NotFound;
