import { PaletteMode } from "@mui/material";
import { lightBlue, grey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: grey,
          divider: grey[200],
          background: {
            default: grey[100],
            paper: "#fff",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: lightBlue,
          divider: lightBlue[700],
          background: {
            default: "#ccc",
            paper: lightBlue[900],
          },
          text: {
            primary: "#ffffff",
            secondary: grey[500],
          },
        }),
  },
});
