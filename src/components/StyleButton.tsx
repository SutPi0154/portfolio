import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const MyStyledButton = styled(Button)({
  position: "relative",
  transition: "top 0.3s ease-out",
  "&:hover": {
    top: "2px",
  },
});

const MyButton = () => {
  return (
    <MyStyledButton variant="contained" color="primary">
      Hover Me
    </MyStyledButton>
  );
};

export default MyButton;
