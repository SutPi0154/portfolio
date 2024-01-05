import SnackBar from "@/components/Snackbar";
import { store } from "@/store";
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
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setDarkMode] = useLocalStorage(
    "darkMode",
    prefersDarkMode
  );
  const lightModeColors = {
    primary: { main: "#6c5edf" },
    text: { main: "#000" },
    secondary: { main: "#3B4596" },
    textSecondary: { main: "#6D6A7C" },
    success: { main: "#FFE9B1" },
    info: { main: "#FCFDF2" },
    container: { main: "#fcfbff" },
    textField: { main: "#efeffe" },
  };

  const darkModeColors = {
    primary: { main: "#6c5edf" },
    text: { main: "#FCFDF2" },
    secondary: { main: "#3B4596" },
    textSecondary: { main: "#6D6A7C" },
    success: { main: "#4CAF50" },
    info: { main: "#2196F3" },
    container: { main: "#1a1525" },
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component
          {...pageProps}
          setDarkMode={setDarkMode}
          isDarkMode={isDarkMode}
        />
        <SnackBar />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}
