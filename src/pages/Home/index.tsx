import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import MouseIcon from "@mui/icons-material/Mouse";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { Element, Link } from "react-scroll";
const HomePage = () => {
  return (
    <Element name="home" className="">
      <Box
        sx={{
          bgcolor: "container.main",
          height: "92vh",
          pt: 10,
          mb: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container sx={{ height: "100%" }} maxWidth="xl">
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                h: "100%",
                display: "flex",
                width: { xs: "40%", sm: "40%", md: "40%", lg: "20%" },
                flexDirection: "column",
                gap: 4,
                justifyContent: "center",
              }}
            >
              <Box>
                <a
                  href="https://github.com/SutPi0154"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <IconButton>
                    <GitHubIcon
                      sx={{
                        color: "primary.main",
                        fontSize: "30px",
                      }}
                    />
                  </IconButton>
                </a>
              </Box>
              <Box>
                <a
                  href="https://www.facebook.com/profile.php?id=100087893903639"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <IconButton>
                    <FacebookOutlinedIcon
                      sx={{
                        color: "primary.main",
                        fontSize: "30px",
                      }}
                    />
                  </IconButton>
                </a>
              </Box>
              <Box>
                <a href="" target="_blank" style={{ textDecoration: "none" }}>
                  <IconButton>
                    <TwitterIcon
                      sx={{
                        color: "primary.main",
                        fontSize: "30px",
                      }}
                    />
                  </IconButton>
                </a>
              </Box>
            </Box>
            <Box
              sx={{
                width: "40%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ mt: 30 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                  Hi, I am Sut Pi
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: 600, color: "textSecondary.main" }}
                >
                  Full-Stack Developer
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mb: 4, fontWeight: 100, color: "textSecondary.main" }}
                >
                  High level exprerience in web developing and development
                  knowledge, producing quality work.
                </Typography>
                <Link
                  activeClass="active-link"
                  to="contact-me-page"
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer", userSelect: "none" }}
                  offset={0}
                  duration={500}
                >
                  <Button variant="contained" sx={{ py: 2, borderRadius: 2 }}>
                    <Typography
                      sx={{ mr: 1, fontWeight: 600, fontSize: "18px" }}
                    >
                      Contact me
                    </Typography>
                    <SendIcon />
                  </Button>
                </Link>
              </Box>
              <Link
                activeClass="active-link"
                to="about"
                spy={true}
                smooth={true}
                style={{ cursor: "pointer", userSelect: "none" }}
                offset={0}
                duration={500}
              >
                <Button
                  disableTouchRipple={true}
                  sx={{
                    display: { sm: "none", lg: "flex" },
                    gap: 1,
                    alignItems: "center",
                    width: "fit-content",
                    position: "relative",
                    transition: "transform 0.5s ease-out", // Adjust duration and easing as needed
                    "&:hover": {
                      bgcolor: "container.main",
                      transform: "translateY(12px)", // Adjust the translateY value as needed
                    },
                  }}
                >
                  <MouseIcon sx={{ color: "primary.main" }} />
                  <Box>
                    <Typography sx={{ color: "text.primary" }}>
                      Scroll down
                    </Typography>
                  </Box>
                  <Box>
                    <ArrowDownwardIcon sx={{ color: "primary.main" }} />
                  </Box>
                </Button>
              </Link>
            </Box>
            <Box sx={{ width: "30%" }}>
              <svg
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    fill="#6c5edf"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
          165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
          129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
          -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    fill="#6c5edf"
                  />
                  <foreignObject x="20" y="30" width="160" height="160">
                    <div>
                      <Image
                        src="/perfil.png"
                        width={0}
                        height={0}
                        alt=""
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",

                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default HomePage;
