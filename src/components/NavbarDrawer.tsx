import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-scroll";
interface Props {
  setOpenDrawer: (arg: boolean) => void;
}
const NavbarDrawer = ({ setOpenDrawer }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: "container.main",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        px: 2,
        pt: 4,
        pb: 6,
        position: "relative",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <Link
          activeClass="active-link"
          to="home"
          spy={true}
          smooth={true}
          style={{ cursor: "pointer", userSelect: "none" }}
          offset={0}
          duration={500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
              color: "text.main",
              gap: 1,
            }}
          >
            <HomeRoundedIcon
              className="custom-link"
              sx={{ fontSize: { xs: 30, sm: 34 } }}
            />
            <Typography
              className="custom-link"
              sx={{ fontSize: { xs: 16, sm: 18 } }}
            >
              Home
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Link
          activeClass="active-link"
          to="about"
          spy={true}
          smooth={true}
          style={{ cursor: "pointer", userSelect: "none" }}
          offset={0}
          duration={500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
              color: "text.main",
              gap: 1,
            }}
          >
            <PersonRoundedIcon
              className="custom-link"
              sx={{ fontSize: { xs: 30, sm: 34 } }}
            />
            <Typography
              className="custom-link"
              sx={{ fontSize: { xs: 16, sm: 18 } }}
            >
              About
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Link
          activeClass="active-link"
          to="skills"
          spy={true}
          smooth={true}
          style={{ cursor: "pointer", userSelect: "none" }}
          offset={0}
          duration={500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
              color: "text.main",
              gap: 1,
            }}
          >
            <DescriptionRoundedIcon
              className="custom-link"
              sx={{ fontSize: { xs: 30, sm: 34 } }}
            />
            <Typography
              className="custom-link"
              sx={{ fontSize: { xs: 16, sm: 18 } }}
            >
              Skills
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Link
          activeClass="active-link"
          to="services"
          spy={true}
          smooth={true}
          style={{ cursor: "pointer", userSelect: "none" }}
          offset={0}
          duration={500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
              color: "text.main",
              gap: 1,
            }}
          >
            <BusinessCenterRoundedIcon
              className="custom-link"
              sx={{ fontSize: { xs: 30, sm: 34 } }}
            />
            <Typography
              className="custom-link"
              sx={{ fontSize: { xs: 16, sm: 18 } }}
            >
              Services
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Link
          activeClass="active-link"
          to="projects"
          spy={true}
          smooth={true}
          style={{ cursor: "pointer", userSelect: "none" }}
          offset={0}
          duration={500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
              color: "text.main",
              gap: 1,
            }}
          >
            <BusinessCenterRoundedIcon
              className="custom-link"
              sx={{ fontSize: { xs: 30, sm: 34 } }}
            />
            <Typography
              className="custom-link"
              sx={{ fontSize: { xs: 16, sm: 18 } }}
            >
              Portfolio
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Link
          activeClass="active-link"
          to="contact-me"
          spy={true}
          smooth={true}
          style={{ cursor: "pointer", userSelect: "none" }}
          offset={0}
          duration={500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { color: "primary.main" },
              color: "text.main",
              gap: 1,
            }}
          >
            <SendRoundedIcon
              className="custom-link"
              sx={{ fontSize: { xs: 30, sm: 34 } }}
            />
            <Typography
              className="custom-link"
              sx={{ fontSize: { xs: 16, sm: 18 } }}
            >
              Contact me
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ position: "absolute", bottom: 5, right: 10 }}>
        <IconButton
          onClick={() => {
            setOpenDrawer(false);
          }}
        >
          <CloseRoundedIcon sx={{ xs: 22, sm: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavbarDrawer;
