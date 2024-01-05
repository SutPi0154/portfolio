import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  item: any;
}
const CarouseItem = ({ item }: Props) => {
  return (
    <Box>
      <Box
        height={"40vh"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <Box>
          <Image
            src={item.image}
            width={0}
            height={0}
            alt=""
            sizes="70vw"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }} // optional
          />
        </Box>
        <Box sx={{ width: 500 }}>
          <Typography sx={{ fontSize: 30, mb: 2 }}>{item.title}</Typography>
          <Typography sx={{ fontSize: 20, mb: 2, color: "textSecondary.main" }}>
            {item.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              py: 2,
              mt: 4,
              width: "fit-content",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ mr: 1, fontWeight: 600, fontSize: "18px", color: "white" }}
            >
              Demo
            </Typography>
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouseItem;
