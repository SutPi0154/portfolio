import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import { Link } from "react-scroll";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<ThemeToggleProps> = ({ isDarkMode, setDarkMode }) => {
  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
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
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  offset={0}
                  duration={500}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      ":hover": { color: "primary.main" },
                    }}
                  >
                    Jl Sut Pi
                  </Typography>
                </Link>
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
                    activeClass="active-link"
                    to="home"
                    spy={true}
                    smooth={true}
                    style={{ cursor: "pointer", userSelect: "none" }}
                    offset={0}
                    duration={500}
                  >
                    <Typography
                      className="custom-link"
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
                    activeClass="active-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    style={{ cursor: "pointer", userSelect: "none" }}
                    offset={0}
                    duration={500}
                  >
                    <Typography
                      className="custom-link"
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
                    activeClass="active-link"
                    to="skills"
                    spy={true}
                    smooth={true}
                    style={{ cursor: "pointer", userSelect: "none" }}
                    offset={0}
                    duration={500}
                  >
                    <Typography
                      className="custom-link"
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
                    activeClass="active-link"
                    to="po-page"
                    spy={true}
                    smooth={true}
                    style={{ cursor: "pointer", userSelect: "none" }}
                    offset={50}
                    duration={500}
                  >
                    <Typography
                      className="custom-link"
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
                    activeClass="active-link"
                    to="contact-me-page"
                    spy={true}
                    smooth={true}
                    style={{ cursor: "pointer", userSelect: "none" }}
                    offset={0}
                    duration={500}
                  >
                    <Typography
                      className="custom-link"
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
                    <LightModeIcon
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
    </>
  );
};

export default Navbar;
