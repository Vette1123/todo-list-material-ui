import { ThemeContext } from "context/themeContext";
import { useContext } from "react";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { MenuItem } from "@mui/material";

function ThemeToggler() {
  const { mode, colorMode } = useContext(ThemeContext);
  return (
    <MenuItem
      onClick={() => {
        colorMode.toggleColorMode();
      }}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      {mode === "light" ? <ModeNightIcon /> : <WbSunnyIcon />}
    </MenuItem>
  );
}

export default ThemeToggler;
