import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import { Element } from "react-scroll";
const HomePage = () => {
  return (
   <Element name="home" className="">
     <Box
      sx={{
        bgcolor: "container.main",
        height: "100vh",
      }}
    >
      <Container sx={{ height: "100%" }} maxWidth="xl">
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              h: "100%",
              display: "flex",
              width: "20%",
              flexDirection: "column",
              gap: 4,
              justifyContent: "center",
            }}
          >
            <Box>
              <a
                href="https://github.com/SutPi0154"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <IconButton>
                  <GitHubIcon
                    sx={{
                      color: "primary.main",
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
              </a>
            </Box>
            <Box>
              <a
                href="https://www.facebook.com/profile.php?id=100087893903639"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <IconButton>
                  <FacebookOutlinedIcon
                    sx={{
                      color: "primary.main",
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
              </a>
            </Box>
            <Box>
              <a href="" target="_blank" style={{ textDecoration: "none" }}>
                <IconButton>
                  <TwitterIcon
                    sx={{
                      color: "primary.main",
                      fontSize: "30px",
                    }}
                  />
                </IconButton>
              </a>
            </Box>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Hi, I am Sut Pi
            </Typography>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 300 }}>
              Full-Stack Developer
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 100 }}>
              High level exprerience in web developing and development
              knowledge, producing quality work.
            </Typography>
            <Button variant="contained" sx={{ py: 2, borderRadius: 2 }}>
              <Typography sx={{ mr: 1, fontWeight: 600, fontSize: "18px" }}>
                Conact me
              </Typography>
              <SendIcon />
            </Button>
          </Box>
          <Box sx={{ width: "60%" }}></Box>
        </Box>
      </Container>
    </Box>
   </Element>
  );
};

export default HomePage;
