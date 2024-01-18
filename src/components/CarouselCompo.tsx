import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CarouseItem from "./CarouseItem";

function CarouselCompo() {
  var items = [
    {
      id: 1,
      title: "Mastering UI/UX Harmony",
      image: "/portfolio1.jpg",
      description:
        "UI/UX expertise combines seamless design and user-centricity for optimal digital interactions.",
    },
    {
      id: 2,
      title: "Next.js & React: Responsive Perfection",
      image: "/portfolio3.jpg",
      description:
        "Perfect responsiveness with Next.js and React, ensuring optimal user experiences on any device. ",
    },
    {
      id: 3,
      title: "API Insight: Unraveling the Basics.",
      image: "/portfolio2.jpg",
      description:
        "Gain a foundational grasp of APIs and their functionality to navigate the digital landscape with confidence. ",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "container.main",
      }}
    >
      <Carousel
        autoPlay={false}
        animation={"slide"}
        navButtonsAlwaysVisible
        fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
        indicatorIconButtonProps={{
          style: {
            padding: "1px", // 1
            color: "#adadb0", // 3
          },
        }}
        indicatorContainerProps={{
          style: {
            bottom: 0,
            position: "absolute",
            backgroundColor: "container.main",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#6c5edf", // 2
          },
        }}
        navButtonsProps={{
          style: {
            color: "#6c5edf",
            backgroundColor: "#ffffff00",
          },
        }}
        NextIcon={
          <ArrowForwardIosIcon
            sx={{
              fontSize: { xs: 25, sm: 35, lg: 45 },
              color: "primary.main",
            }}
          />
        }
        PrevIcon={
          <ArrowBackIosNewIcon
            sx={{
              fontSize: { xs: 25, sm: 35, lg: 45 },
              color: "primary.main",
            }}
          />
        }
        sx={{
          width: { xs: 420, sm: 700, md: 900, lg: 1300 },
          height: {
            xs: "52vh",
            sm: "48vh",
            md: "24vh",
            lg: "40vh",
            zIndex: 10,
          },
        }}
      >
        {items.map((item, i) => (
          <CarouseItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselCompo;
