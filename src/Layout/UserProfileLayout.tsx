import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import UserProfileCmp from "components/UserProfileCmp";

const UserProfileLayout = () => {
  return (
    <Box>
      <Navbar />
      <UserProfileCmp />
      <Box  bottom="0" textAlign={"center"}>
        <Footer />
      </Box>
    </Box>
  );
};

export default UserProfileLayout;
