import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import UserProfileCmp from "components/UserProfileCmp";

const UserProfileLayout = () => {
  return (
    <Box>
      <Navbar />
      <UserProfileCmp />
      <Box pos="relative" top={12} m="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default UserProfileLayout;
