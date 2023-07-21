import Navbar from "components/Navbar";
import { ThemeContext } from "context/themeContext";
import HomePage from "pages/home";
import WeatherPage from "pages/weather";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          height: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
