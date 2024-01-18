import { skills } from "@/utils/skills";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
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
          mt: 10,
          pt: { xs: 5, md: 10, lg: 10 },
          mb: { xs: 10, md: 10, lg: 0 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              mb: { xs: 5, lg: 10 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: 40, sm: 44, lg: 48 },
              }}
            >
              Skills
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                color: "textSecondary.main",
                fontSize: { xs: 20 },
              }}
            >
              my technical level
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, lg: 4 },
              flexWrap: "wrap",
              alignItems: "start",
            }}
          >
            <Accordion
              elevation={0}
              sx={{
                bgcolor: "container.main",
                width: { xs: "100%", lg: "40%" },
              }}
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
                  <DataObjectIcon
                    sx={{ color: "primary.main", fontSize: 40 }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: { xs: 18, sm: 22, lg: 22 },
                      }}
                    >
                      Frontend Development
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        color: "textSecondary.main",
                        fontSize: { xs: 18, sm: 20, lg: 18 },
                      }}
                    >
                      more than 4 years
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {skills?.slice(0, 8).map((item) => (
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
                width: { xs: "100%", lg: "40%" },
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
                  <MenuIcon sx={{ color: "primary.main", fontSize: 40 }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: { xs: 18, sm: 22, lg: 22 },
                      }}
                    >
                      Other necessary skills
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        color: "textSecondary.main",
                        fontSize: { xs: 18, sm: 20, lg: 18 },
                      }}
                    >
                      more than 4 years
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {skills?.slice(13, 16).map((item) => (
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
                width: { xs: "100%", lg: "40%" },
                border: "none",
                justifySelf: "self-start",
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
                  <TerminalIcon sx={{ color: "primary.main", fontSize: 40 }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: { xs: 18, sm: 22, lg: 22 },
                      }}
                    >
                      Back-end Development
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        color: "textSecondary.main",
                        fontSize: { xs: 18, sm: 20, lg: 18 },
                      }}
                    >
                      more than 4 years
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {skills.slice(8, 13).map((item) => (
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
        <Qualification />
      </Box>
    </Element>
  );
};

export default SkillsPage;
