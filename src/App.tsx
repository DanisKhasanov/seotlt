import { useEffect, useMemo, useState } from "react";
import {
  Box,
  ThemeProvider,
  CssBaseline,
  PaletteMode,
  useMediaQuery,
} from "@mui/material";
import { getTheme } from "./theme/theme";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Body } from "./components/body/body";
import { SnackbarProvider } from "notistack";

function App() {
  const [mode, setMode] = useState<PaletteMode>(() => {
    return (localStorage.getItem("theme") as PaletteMode) || "light";
  });
  const theme = useMemo(() => getTheme(mode), [mode]);
  const isMobile = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={5}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Header
          mode={mode}
          toggleColorMode={toggleColorMode}
          isMobile={isMobile}
        />
        <Body isMobile={isMobile} />
        <Footer mode={mode} />
      </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
