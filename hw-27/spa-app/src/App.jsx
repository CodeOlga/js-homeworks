import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContext, themes } from "./themeContext";

import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  // Відновлюємо тему з localStorage або використовуємо тему по замовчуванню
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : themes.light; // по замовчуванню — themes.light
  });

  // Зберігаєм поточну тему в localStorage при її зміні
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Router>
        <ErrorBoundary>
          <div
            className="content"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            <Header />
            <main>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
