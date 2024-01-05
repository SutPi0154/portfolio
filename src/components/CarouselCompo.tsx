import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CarouseItem from "./CarouseItem";

function CarouselCompo() {
  var items = [
    {
      title: "Random title #1",
      image: "/portfolio1.jpg",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      title: "Random title #2",
      image: "/portfolio2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis nostrum. ",
    },
    {
      title: "Random title #2",
      image: "/portfolio3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis nostrum. ",
    },
    {
      title: "Random title #2",
      image: "/portfolio1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis nostrum. ",
    },
    {
      title: "Random title #2",
      image: "/portfolio2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis nostrum. ",
    },
    {
      title: "Random title #2",
      image: "/portfolio3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis nostrum. ",
    },
    {
      title: "Random title #2",
      image: "/portfolio1.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis nostrum. ",
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
        height={"40vh"}
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
            backgroundColor: "#ffffff00",
          },
        }}
        NextIcon={
          <ArrowForwardIosIcon
            sx={{
              fontSize: 45,
              color: "primary.main",
            }}
          />
        }
        PrevIcon={
          <ArrowBackIosNewIcon
            sx={{
              fontSize: 45,
              color: "primary.main",
              "&:hover": {
                color: "primary.dark",
              },
            }}
          />
        }
        sx={{ width: 1300 }}
      >
        {items.map((item, i) => (
          <CarouseItem key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselCompo;
