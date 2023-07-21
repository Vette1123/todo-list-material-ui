import { PaletteMode, createTheme } from "@mui/material";
import { getDesignTokens } from "lib/theme";
import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext({
  mode: "light",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMode: (_value: PaletteMode) => {},
  colorMode: { toggleColorMode: () => {} },
  theme: createTheme(getDesignTokens("light")),
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const value = useMemo(
    () => ({
      mode,
      colorMode,
      setMode,
      theme,
    }),
    [mode, colorMode, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
