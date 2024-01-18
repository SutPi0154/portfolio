import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.dark" }}>
      <Container maxWidth="lg">
        <>
          <Toolbar
            sx={{
              pt: { xs: 2, lg: 10 },
              pb: { xs: 10, sm: 24, md: 14, lg: 14 },
              color: "white",
              display: "flex",
              justifyContent: { sm: "space-between", lg: "center" },
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                width: { xs: "70%", sm: "38%", md: "30%", lg: "30%" },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 0, sm: 4, md: 0, lg: 2 },
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: 600, fontSize: { xs: 30, sm: 34, lg: 50 } }}
                >
                  Jl Sut Pi
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 18, lg: 18 },
                  }}
                >
                  Mid level FullStack Developer
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { xs: "80%", sm: "38%", md: "40%", lg: "40%" },
                gap: { xs: 2, lg: 4 },
                mt: 2,
                flexWrap: "wrap",
                flexDirection: { xs: "column", md: "row", lg: "row" },
                justifyContent: "center",
              }}
            >
              <Link
                to="skills"
                smooth={true}
                style={{ cursor: "pointer", userSelect: "none" }}
                duration={500}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    "&:hover": { color: "primary.main" },
                    fontSize: { xs: 18, sm: 20, lg: 22 },
                  }}
                >
                  skills
                </Typography>
              </Link>
              <Link
                to="about"
                className="hover"
                smooth={true}
                style={{ cursor: "pointer", userSelect: "none" }}
                duration={500}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "white",
                    fontSize: { xs: 18, sm: 20, lg: 22 },
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link
                to="projects"
                smooth={true}
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  backgroundColor: "none",
                }}
                duration={500}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    "&:hover": { color: "primary.main" },
                    fontSize: { xs: 18, sm: 20, lg: 22 },
                  }}
                >
                  portfolio
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                width: { xs: "80%", md: "20%", lg: "20%" },
                display: "flex",
                justifyContent: { xs: "start", md: "center", lg: "center" },
                gap: { xs: 1, lg: 2 },
                mt: { xs: 0, sm: 6, lg: 0 },
                alignItems: "start",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100087893903639"
                target="_blank"
              >
                <IconButton>
                  <FacebookIcon
                    sx={{
                      fontSize: { xs: 24, sm: 28, lg: 30 },
                      color: "white",
                    }}
                  />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/sutpi154_/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <IconButton>
                  <InstagramIcon
                    sx={{
                      fontSize: { xs: 24, sm: 28, lg: 30 },
                      color: "white",
                    }}
                  />
                </IconButton>
              </a>
              <a
                href="https://twitter.com/SutPi4"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <IconButton>
                  <TwitterIcon
                    sx={{
                      fontSize: { xs: 24, sm: 28, lg: 30 },
                      color: "white",
                    }}
                  />
                </IconButton>
              </a>
            </Box>
          </Toolbar>
        </>
      </Container>
    </Box>
  );
};

export default Footer;
