"use client";

import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { useMode, ColorModeContext } from "@/theme";
import Topbar from "@/views/global/Topbar";


export default function Home() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="content">
          <Topbar/>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
