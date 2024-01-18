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
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 2, lg: 6 },
        }}
      >
        <Box sx={{ width: { xs: "70%", sm: "50%", md: "38%", lg: "30%" } }}>
          <Image
            priority={true}
            src={item.image}
            width={0}
            height={0}
            alt=""
            sizes="70vw"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }} // optional
          />
        </Box>
        <Box sx={{ width: { xs: 300, sm: "50%", md: "48%", lg: 500 } }}>
          <Typography sx={{ fontSize: { xs: 24, md: 28, lg: 30 }, mb: 2 }}>
            {item.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 22, lg: 20 },
              mb: 2,
              color: "textSecondary.main",
            }}
          >
            {item.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              py: { xs: 1, md: 2, lg: 2 },
              mt: { xs: 2, md: 4, lg: 4 },
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
