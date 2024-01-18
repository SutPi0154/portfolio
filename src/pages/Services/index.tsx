import ApiCompo from "@/components/ApiCompo";
import BackEndCompo from "@/components/BackEndCompo";
import FrontEndCompo from "@/components/FrontEndCompo";
import { Box, Container, Typography } from "@mui/material";
import { Element } from "react-scroll";
const ServicePage = () => (
  <Element name="services">
    <Box sx={{ bgcolor: "container.main", my: 10, py: 10 }}>
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
            Services
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              color: "textSecondary.main",
              fontSize: { xs: 20 },
            }}
          >
            what i offer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 10,
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          <FrontEndCompo />
          <BackEndCompo />
          <ApiCompo />
        </Box>
      </Container>
    </Box>
  </Element>
);

export default ServicePage;
