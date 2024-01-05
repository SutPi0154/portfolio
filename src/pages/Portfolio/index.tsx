import CarouselCompo from "@/components/CarouselCompo";
import { Box, Container, Typography } from "@mui/material";
import { Element } from "react-scroll";

const Portfolio = () => {
  return (
    <Element name="po-page">
      <Box sx={{ height: "90vh", bgcolor: "container.main", mt: 10 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              pt: 20,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Portfolio
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 300, color: "textSecondary.main" }}
            >
              most recent work
            </Typography>
            <Box sx={{ mt: 10 }}>
              <CarouselCompo />
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default Portfolio;
