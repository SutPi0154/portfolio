import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const AnotherAbout = () => {
  return (
    <Box id="about" sx={{ height: "", bgcolor: "container.main" }}>
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
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 300, color: "textSecondary.main" }}
          >
            my introduction
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Box sx={{ width: "35%" }}>
            <Image
              src="/aboutImg.jpg"
              height={400}
              style={{ borderRadius: "10px" }}
              width={400}
              alt="Picture of the author"
            />
          </Box>
          <Box sx={{ width: "30%" }}>
            <Typography
              variant="h6"
              sx={{ color: "textSecondary.main", fontWeight: 200, mb: 4 }}
            >
              web developer, with extensive knowledge and years of experience
              working in web technologies and Frontend / Backend with Next.js,
              delivering quality work .
            </Typography>
            <Box
              sx={{ mb: 4, display: "flex", justifyContent: "space-between" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  +02
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    years
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    experience
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  +02
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    years
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    experience
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  +02
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    years
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 300, color: "textSecondary.main" }}
                  >
                    experience
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  py: 2,
                  width: "fit-content",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                }}
                href="/myCV.pdf"
                download
              >
                <Typography sx={{ mr: 1, fontWeight: 600, fontSize: "18px" }}>
                  {" "}
                  Download CV
                </Typography>{" "}
                <SimCardDownloadIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AnotherAbout;
