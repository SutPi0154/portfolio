import "@/styles/globals.css";
import { useLocalStorage } from "@/utils/localStorage";
import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setDarkMode] = useLocalStorage(
    "darkMode",
    prefersDarkMode
  );
  const lightModeColors = {
    primary: { main: "#3B3486" },
    text: { main: "#000" },
    secondary: { main: "#3B3486" },
    textSecondary: { main: "#6D6A7C" },
    success: { main: "#FFE9B1" },
    info: { main: "#FCFDF2" },
    container: { main: "#fff" },
  };

  const darkModeColors = {
    primary: { main: "#3B3486" },
    text: { main: "#FCFDF2" },
    secondary: { main: "#9C27B0" },
    textSecondary: { main: "#6D6A7C" },
    success: { main: "#4CAF50" },
    info: { main: "#2196F3" },
    container: { main: "#1d1536" },
  };

  // Define your theme options
  const themeOptions: ThemeOptions = {
    palette: {
      mode: isDarkMode ? "dark" : "light",
      ...(!isDarkMode && { ...lightModeColors }),
      ...(isDarkMode && { ...darkModeColors }),
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  };

  const theme = createTheme(themeOptions);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const router = useRouter();

  useEffect(() => {
    // Check if the page was accessed directly by typing the URL
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      // Redirect to the root page or any other page you want
      router.push("/");
    }
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <Component
        {...pageProps}
        setDarkMode={setDarkMode}
        isDarkMode={isDarkMode}
      />
      <CssBaseline />
    </ThemeProvider>
  );
}
