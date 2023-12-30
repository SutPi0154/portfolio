import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircleIcon from "@mui/icons-material/Circle";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Container, Typography } from "@mui/material";

const Qualification = () => {
  return (
    <Box sx={{ bgcolor: "container.main", height: "" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            mb: 10,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Qualification
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 300, color: "textSecondary.main" }}
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
            mb: 5,
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
            <Typography sx={{ fontSize: 20, letterSpacing: 1 }}>
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
            <Typography sx={{ fontSize: 20, letterSpacing: 1 }}>
              Work
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "40vh",
            gap: 6,
          }}
        >
          <Box>
            <Box>
              <Typography sx={{ fontSize: 20, color: "text.main", mb: 1 }}>
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
          <Box sx={{ width: "0.01%", position: "relative" }}>
            <Box sx={{ width: 1, bgcolor: "primary.dark", height: "40vh" }}>
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
                  top: 160,
                  fontSize: 20,
                  color: "primary.main",
                }}
              />
              <CircleIcon
                sx={{
                  position: "absolute",
                  right: -10,
                  bottom: -10,
                  fontSize: 20,
                  color: "primary.main",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mt: 20 }}>
              <Typography sx={{ fontSize: 20, color: "text.main", mb: 1 }}>
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
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: 20, color: "text.main", mb: 1 }}>
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
