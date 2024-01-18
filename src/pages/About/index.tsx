import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { Element } from "react-scroll";

const AboutPage = () => {
  return (
    <Element name="about">
      <Box
        sx={{
          bgcolor: "container.main",
          pt: { xs: 5, md: 10, lg: 10 },
          mb: 10,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: 0,
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: 40, sm: 44, lg: 48 },
              }}
            >
              About Me
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                color: "textSecondary.main",
                fontSize: { xs: 20 },
              }}
            >
              my introduction
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 5, lg: 10 },
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexWrap: "wrap",
              gap: { xs: 2, lg: 10 },
            }}
          >
            <Box sx={{ width: { xs: "70%", sm: "50%", lg: "30%" } }}>
              <Image
                src="/about.jpg"
                width={0}
                height={0}
                alt=""
                sizes="100vw"
                style={{ width: "90%", height: "auto", borderRadius: "10px" }} // optional
              />
            </Box>
            <Box sx={{ width: { xs: "100%", lg: "30%" } }}>
              <Typography
                sx={{
                  color: "textSecondary.main",
                  fontWeight: { xs: 100 },
                  fontSize: { xs: 20, sm: 22, md: 24, lg: 20 },
                  mb: 4,
                  textAlign: { xs: "center", lg: "start" },
                }}
              >
                Web developer, with extensive knowledge and years of experience
                working in web technologies and Frontend / Backend with Next.js,
                delivering quality work .
              </Typography>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  justifyContent: { xs: "center", lg: "space-between" },
                  gap: { xs: 2, sm: 6, lg: 0 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      textAlign: "center",
                      fontSize: { xs: 24, sm: 28, md: 30, lg: 30 },
                    }}
                  >
                    02+
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: 18, md: 20, lg: 16 },

                        color: "textSecondary.main",
                      }}
                    >
                      Years
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: 18, md: 20, lg: 16 },
                        color: "textSecondary.main",
                      }}
                    >
                      experience
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      textAlign: "center",
                      fontSize: { xs: 24, sm: 28, md: 30, lg: 30 },
                    }}
                  >
                    10+
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: 18, md: 20, lg: 16 },
                        color: "textSecondary.main",
                      }}
                    >
                      Completed
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: 18, md: 20, lg: 16 },
                        color: "textSecondary.main",
                      }}
                    >
                      projects
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      textAlign: "center",
                      fontSize: { xs: 24, sm: 28, md: 30, lg: 30 },
                    }}
                  >
                    02+
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: 18, md: 20, lg: 16 },
                        color: "textSecondary.main",
                      }}
                    >
                      Team
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        fontSize: { xs: 18, md: 20, lg: 16 },
                        color: "textSecondary.main",
                      }}
                    >
                      worked
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "start" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    py: 2,
                    width: "fit-content",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                  href="/myCV.pdf"
                  download
                >
                  <Typography
                    sx={{
                      mr: 1,
                      fontWeight: 600,
                      fontSize: { xs: 18, sm: 20, lg: 22 },
                    }}
                  >
                    {" "}
                    Download CV
                  </Typography>{" "}
                  <SimCardDownloadIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default AboutPage;
