import { Box } from "@chakra-ui/react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import UserProfileCmp from "components/UserProfileCmp";

const UserProfileLayout = () => {
  return (
    <Box display={"flex"} flexDir={"column"}>
      <Navbar />
      <UserProfileCmp />
      <Box pos={"fixed"} bottom="0" alignSelf="center" mb="3">
        <Footer />
      </Box>
    </Box>
  );
};

export default UserProfileLayout;
