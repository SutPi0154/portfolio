import { Box, Container, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <Box
      id="po-page"
      sx={{ height: "", bgcolor: "container.main", mb: 20, py: 20 }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            py: 20,
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
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
