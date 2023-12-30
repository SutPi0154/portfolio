import { skills } from "@/utils/skills";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TerminalIcon from "@mui/icons-material/Terminal";
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
import Qualification from "./Quatification";

const SkillsPage = () => {
  return (
    <Element name="skills">
      <Box
        sx={{
          bgcolor: "container.main",
          py: 20,
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
              flexWrap: "wrap",
              alignItems: "start",
            }}
          >
            <Accordion
              elevation={0}
              sx={{ bgcolor: "container.main", width: "40%" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "primary.main", fontSize: 40, border: "none" }}
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
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {skills?.slice(0, 5).map((item) => (
                  <Box sx={{ mb: 2 }} key={item.id}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography sx={{ fontSize: 18, fontWeight: "600" }}>
                        {item.name}
                      </Typography>
                      <Typography>{item.skillPercentage}%</Typography>
                    </Box>
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      sx={{ height: 7, borderRadius: "20px", color: "red" }}
                      value={item.skillPercentage}
                    />
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                bgcolor: "container.main",
                width: "40%",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "primary.main", fontSize: 40 }}
                  />
                }
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
            <Accordion
              elevation={0}
              sx={{
                bgcolor: "container.main",
                width: "40%",
                border: "none",
                justifySelf: "start",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: "primary.main", fontSize: 40 }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <TerminalIcon
                    sx={{
                      fontSize: "50px",
                      fontWeight: "300",
                      color: "primary.main",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      Back-end Development
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 300, color: "textSecondary.main" }}
                    >
                      more than 4 years
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {skills.slice(5, 10).map((item) => (
                  <Box sx={{ mb: 2 }} key={item.id}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography sx={{ fontSize: 18, fontWeight: "600" }}>
                        {item.name}
                      </Typography>
                      <Typography>{item.skillPercentage}%</Typography>
                    </Box>
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      sx={{ height: 7, borderRadius: "20px", color: "red" }}
                      value={item.skillPercentage}
                    />
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
      <Qualification />
    </Element>
  );
};

export default SkillsPage;
