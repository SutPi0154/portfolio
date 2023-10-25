import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";

interface Props {
  isDarkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
const Layout = ({ setDarkMode, isDarkMode }: Props) => {
  return (
    <Box>
      <Navbar setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      {/* <Home /> */}
    </Box>
  );
};

export default Layout;
