import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Element } from "react-scroll";

const SkillsPage = () => {
  return (
    <Element name="skills">
      <Box
        sx={{
          // height: "90vh",
          bgcolor: "container.main",
        }}
      >
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
              Skills
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 300, color: "textSecondary.main" }}
            >
              my technical level
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              alignItems: "start",
            }}
          >
            <Accordion
              elevation={0}
              sx={{ bgcolor: "container.main", width: "30%" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "primary.main", fontSize: 40 }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography sx={{ fontSize: "30px", color: "primary.main" }}>
                    {"{ }"}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      Frontend Development
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 300, color: "textSecondary.main" }}
                    >
                      more than 4 years
                    </Typography>
                  </Box>
                  <Box></Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Box>
                    <Box>
                      <Typography>Html</Typography>
                      <Typography>80</Typography>
                    </Box>

                    <LinearProgress variant="determinate" value={80} />
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "container.main", width: "30%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default SkillsPage;
