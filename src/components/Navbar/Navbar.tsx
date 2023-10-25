import Brightness6OutlinedIcon from "@mui/icons-material/Brightness6Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
const Navbar: React.FC<ThemeToggleProps> = ({ isDarkMode, setDarkMode }) => {
  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <Box>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ bgcolor: "container.main", py: 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "text.main" }}
                >
                  Sut Pi
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Link
                    href={""}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.main",
                        "&:hover": { color: "primary.main" },
                        fontSize: "17px",
                      }}
                    >
                      Home
                    </Typography>
                  </Link>
                  <Link
                    href={""}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.main",
                        "&:hover": { color: "primary.main" },
                        fontSize: "17px",
                      }}
                    >
                      About
                    </Typography>
                  </Link>
                  <Link
                    href={""}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.main",
                        "&:hover": { color: "primary.main" },
                        fontSize: "17px",
                      }}
                    >
                      Skills
                    </Typography>
                  </Link>
                  <Link
                    href={""}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.main",
                        "&:hover": { color: "primary.main" },
                        fontSize: "17px",
                      }}
                    >
                      Services
                    </Typography>
                  </Link>
                  <Link
                    href={""}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.main",
                        "&:hover": { color: "primary.main" },
                        fontSize: "17px",
                      }}
                    >
                      Portfolio
                    </Typography>
                  </Link>
                  <Link
                    href={""}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.main",
                        "&:hover": { color: "primary.main" },
                        fontSize: "17px",
                      }}
                    >
                      Contact me
                    </Typography>
                  </Link>
                </Box>

                <IconButton onClick={handleThemeToggle}>
                  {isDarkMode ? (
                    <Brightness6OutlinedIcon
                      sx={{ "&:hover": { color: "primary.main" } }}
                    />
                  ) : (
                    <DarkModeOutlinedIcon
                      sx={{ "&:hover": { color: "primary.main" } }}
                    />
                  )}
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
