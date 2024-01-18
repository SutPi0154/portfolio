import CarouselCompo from "@/components/CarouselCompo";
import { Box, Container, Typography } from "@mui/material";
import { Element } from "react-scroll";

const Portfolio = () => {
  return (
    <Element name="projects">
      <Box sx={{ bgcolor: "container.main" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              pt: { xs: 5, md: 20, lg: 10 },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: 40, sm: 44, lg: 48 },
              }}
            >
              Portfolio
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                color: "textSecondary.main",
                fontSize: { xs: 20 },
              }}
            >
              most recent work
            </Typography>
            <Box sx={{ mt: { xs: 5, md: 5, lg: 10 } }}>
              <CarouselCompo />
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default Portfolio;
