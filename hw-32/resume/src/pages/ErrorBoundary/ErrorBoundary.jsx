/* eslint-disable react/prop-types */
import { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Container, Typography, Link } from "@mui/material";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container
          sx={{
            padding: "40px 120px",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="error"
            sx={{ marginBottom: "40px" }}
          >
            Something went wrong!
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
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
