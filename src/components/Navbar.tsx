import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import LightModeIcon from "@mui/icons-material/LightMode";
import React, { useState } from "react";
import { Link } from "react-scroll";

import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import NavbarDrawer from "./NavbarDrawer";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<ThemeToggleProps> = ({ isDarkMode, setDarkMode }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <Container maxWidth="xl">
        <AppBar
          className="navbar"
          elevation={0}
          position="fixed"
          sx={{
            bgcolor: "container.main",
            py: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: { xs: "auto", md: 0, lg: 0 },
            bottom: { xs: 0, md: "auto", lg: "auto" },
            height: { xs: 60, sm: 80 },
            boxShadow: {
              xs: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              lg: 0,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: { xs: 2, md: 4, lg: 10 },
            }}
          >
            <Box>
              <Link
                to="home"
                spy={true}
                smooth={true}
                style={{ cursor: "pointer", userSelect: "none" }}
                duration={500}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    ":hover": { color: "primary.main" },
                    fontSize: { xs: 18, sm: 24, md: 28, lg: 22 },
                  }}
                >
                  Jl Sut Pi
                </Typography>
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
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
                  duration={500}
                >
                  <Typography
                    className="custom-link"
                    sx={{
                      fontWeight: 600,
                      color: "text.main",
                      "&:hover": { color: "primary.main" },
                      fontSize: { md: 20, lg: 18 },
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
                  duration={500}
                >
                  <Typography
                    className="custom-link"
                    sx={{
                      fontWeight: 600,
                      color: "text.main",
                      "&:hover": { color: "primary.main" },
                      fontSize: { md: 20, lg: 18 },
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
                  duration={500}
                >
                  <Typography
                    className="custom-link"
                    sx={{
                      fontWeight: 600,
                      color: "text.main",
                      "&:hover": { color: "primary.main" },
                      fontSize: { md: 20, lg: 18 },
                    }}
                  >
                    Skills
                  </Typography>
                </Link>
                <Link
                  activeClass="active-link"
                  to="services"
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  duration={500}
                >
                  <Typography
                    className="custom-link"
                    sx={{
                      fontWeight: 600,
                      color: "text.main",
                      "&:hover": { color: "primary.main" },
                      fontSize: { md: 20, lg: 18 },
                    }}
                  >
                    Services
                  </Typography>
                </Link>
                <Link
                  activeClass="active-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  duration={500}
                >
                  <Typography
                    className="custom-link"
                    sx={{
                      fontWeight: 600,
                      color: "text.main",
                      "&:hover": { color: "primary.main" },
                      fontSize: { md: 20, lg: 18 },
                    }}
                  >
                    Portfolio
                  </Typography>
                </Link>
                <Link
                  activeClass="active-link"
                  to="contact-me"
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  duration={500}
                >
                  <Typography
                    className="custom-link"
                    sx={{
                      fontWeight: 600,
                      color: "text.main",
                      "&:hover": { color: "primary.main" },
                      fontSize: { md: 20, lg: 18 },
                    }}
                  >
                    Contact me
                  </Typography>
                </Link>
              </Box>

              <IconButton onClick={handleThemeToggle}>
                {isDarkMode ? (
                  <LightModeIcon
                    sx={{
                      "&:hover": { color: "primary.main" },
                      height: { md: 30, lg: 24 },
                      width: { md: 30, lg: 24 },
                    }}
                  />
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{
                      "&:hover": { color: "primary.main" },
                      height: { md: 30, lg: 24 },
                      width: { md: 30, lg: 24 },
                    }}
                  />
                )}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", lg: "none" } }}>
              <IconButton onClick={handleThemeToggle}>
                {isDarkMode ? (
                  <LightModeIcon
                    sx={{
                      "&:hover": { color: "primary.main" },
                      width: { xs: 30 },
                      height: { xs: 30 },
                    }}
                  />
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{
                      "&:hover": { color: "primary.main" },
                      width: { xs: 25, sm: 30 },
                      height: { xs: 25, sm: 30 },
                    }}
                  />
                )}
              </IconButton>
              <IconButton
                onClick={() => {
                  setOpenDrawer(true);
                }}
              >
                <GridViewIcon
                  sx={{
                    width: { xs: 25, sm: 30 },
                    height: { xs: 25, sm: 30 },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Drawer
            anchor="bottom"
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false);
            }}
            sx={{
              display: { xs: "block", sm: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                padding: 0,
              },
            }}
          >
            <NavbarDrawer setOpenDrawer={setOpenDrawer} />
          </Drawer>
        </AppBar>
      </Container>
    </>
  );
};

export default Navbar;
