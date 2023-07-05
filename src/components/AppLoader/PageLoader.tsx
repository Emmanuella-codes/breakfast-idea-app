import { Flex } from "@chakra-ui/react";
import Loader from "./index";

const PageLoader = () => (
  <Flex
    justify={"center"}
    alignItems={"center"}
    pos={"fixed"}
    zIndex={3}
    width={"full"}
    height={"100vh"}
    overflow={"hidden"}
  >
    <Loader />
  </Flex>
);

export default PageLoader;
