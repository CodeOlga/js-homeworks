import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";

import { ThemeProviderWithToggle } from "./themeContext";

import Main from "./pages/Main/Main";
import Todo from "./pages/Todo/Todo";
import Swapi from "./pages/Swapi/Swapi";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

const App = () => (
  <ThemeProviderWithToggle>
    <CssBaseline />
    <Router>
      <ErrorBoundary>
        <Header />
        <Container>
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              padding: "40px 120px",
            }}
          >
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Main />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/swapi" element={<Swapi />} />
            </Routes>
          </Box>
        </Container>
        <Footer />
      </ErrorBoundary>
    </Router>
  </ThemeProviderWithToggle>
);

export default App;
