import { Flex } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex
      justifyContent={"center"}
      pos={"relative"}
      alignItems={"center"}
      p={"20px 0"}
      className="loader"
    ></Flex>
  );
};

export default Loader;
