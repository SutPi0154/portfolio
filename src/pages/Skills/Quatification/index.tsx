import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircleIcon from "@mui/icons-material/Circle";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Container, Typography } from "@mui/material";

const Qualification = () => {
  return (
    <Box
      sx={{
        bgcolor: "container.main",
        height: { md: "auto", lg: "100vh" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            mt: { xs: 10, lg: 20 },
            mb: { xs: 5, md: 10, lg: 10 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 40, sm: 44, lg: 48 },
            }}
          >
            Qualification
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              color: "textSecondary.main",
              fontSize: { xs: 20 },
            }}
          >
            my person journey
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            color: "primary.light",
            justifyContent: "center",
            gap: 8,
            mb: { xs: 5, lg: 10 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SchoolIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ fontSize: { xs: 20, sm: 22 }, letterSpacing: 1 }}>
              Education
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              alignItems: "center",
            }}
          >
            <BusinessCenterIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ fontSize: { xs: 20, sm: 22 }, letterSpacing: 1 }}>
              Work
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, lg: 6 },
          }}
        >
          <Box>
            <Box sx={{ ml: { xs: 5, lg: 10 } }}>
              <Typography
                sx={{ fontSize: { xs: 20, sm: 22 }, color: "text.main", mb: 1 }}
              >
                High School
              </Typography>
              <Typography sx={{ fontSize: 16, color: "text.secondary", mb: 4 }}>
                Graduated - Classic Private School
              </Typography>
              <Box>
                <CalendarMonthIcon sx={{ color: "text.secondary" }} />
                <Typography
                  sx={{ fontSize: 14, color: "text.secondary", mb: 4 }}
                >
                  2019-2020
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "0.1%", lg: "0.01%" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: 1,
                bgcolor: "primary.dark",
                height: { xs: "86vh", sm: "50vh", md: "40vh", lg: "42vh" },
              }}
            >
              <CircleIcon
                sx={{
                  position: "absolute",
                  right: -10,
                  top: -2,
                  fontSize: 20,
                  color: "primary.main",
                }}
              />
              <CircleIcon
                sx={{
                  position: "absolute",
                  right: -10,
                  top: { xs: 200, lg: 160 },
                  fontSize: 20,
                  color: "primary.main",
                }}
              />
              <CircleIcon
                sx={{
                  position: "absolute",
                  right: -10,
                  bottom: { xs: 240, sm: -110, md: -20, lg: 170 },
                  fontSize: 20,
                  color: "primary.main",
                }}
              />
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                  position: "absolute",
                  height: 300,
                  width: 10,
                  bgcolor: "container.main",
                  bottom: -60,
                  right: -4,
                  zIndex: 10,
                }}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mt: { xs: 25, lg: 20 } }}>
              <Typography
                sx={{ fontSize: { xs: 20, sm: 22 }, color: "text.main", mb: 1 }}
              >
                Web Development
              </Typography>
              <Typography sx={{ fontSize: 16, color: "text.secondary", mb: 4 }}>
                Learn - HTML, Css, Javascript, React, <br /> Node.js, Next.js,
                PostgreSQL
              </Typography>
              <Box>
                <CalendarMonthIcon sx={{ color: "text.secondary" }} />
                <Typography
                  sx={{ fontSize: 14, color: "text.secondary", mb: 4 }}
                >
                  2020-2023
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: { xs: 2, sm: 12, lg: 2 } }}>
              <Typography
                sx={{ fontSize: { xs: 20, sm: 22 }, color: "text.main", mb: 1 }}
              >
                Web Development
              </Typography>
              <Typography sx={{ fontSize: 16, color: "text.secondary", mb: 4 }}>
                Developed - POS, Portfolio, movie streaming, <br /> developed
                with teams and small projects
              </Typography>
              <Box>
                <CalendarMonthIcon sx={{ color: "text.secondary" }} />
                <Typography
                  sx={{ fontSize: 14, color: "text.secondary", mb: 4 }}
                >
                  2021-2023
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Qualification;
