import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeCmp from "../components/HomeCmp";
import Footer from "components/Footer";

interface IHomeLayout {
  children: any;
}

const HomeLayout = () => {
  return (
    <Box>
      <Navbar />
      <HomeCmp />
      <Box m="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default HomeLayout;
