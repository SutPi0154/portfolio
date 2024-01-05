import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.dark" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            pt: 10,
            pb: 15,
            height: "",
            color: "white",
            display: "flex",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{}}>
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                Jl Sut Pi
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 18 }}>
                Mid level FullStack Developer
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              gap: 5,
              mt: 2,
              justifyContent: "center",
            }}
          >
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
                  "&:hover": { color: "primary.main" },
                  fontSize: "17px",
                }}
              >
                skills
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
                  "&:hover": { color: "primary.main" },
                  fontSize: "17px",
                }}
              >
                About
              </Typography>
            </Link>
            <Link
              activeClass="active-link"
              to="po-page"
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
                  "&:hover": { color: "primary.main" },
                  fontSize: "17px",
                }}
              >
                portfolio
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              alignItems: "start",
            }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100087893903639"
              target="_blank"
            >
              <IconButton>
                <FacebookIcon sx={{ fontSize: 30, color: "white" }} />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/sutpi154_/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <IconButton>
                <InstagramIcon sx={{ fontSize: 30, color: "white" }} />
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
                    fontSize: 30,
                    color: "white",
                  }}
                />
              </IconButton>
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
