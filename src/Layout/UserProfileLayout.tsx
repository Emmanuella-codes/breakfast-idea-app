import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import UserProfileCmp from "components/UserProfileCmp";

const UserProfileLayout = () => {
  return (
    <Box display={"flex"} flexDir={"column"}>
      <Navbar />
      <UserProfileCmp />
      <Box pos={"relative"} bottom="0" m="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default UserProfileLayout;
