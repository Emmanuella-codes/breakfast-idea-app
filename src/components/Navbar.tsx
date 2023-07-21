import Link from "next/link";
import React from "react";

import { Box, Flex, HStack, useDisclosure, Image } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#aec3b0" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={""}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display="flex" /* {{ base: "none", md: "flex" }} */
              fontSize="3xl"
              mt={"2"}
              ml={{ base: "-34px", md: "0" }}
            >
              <Link href="/">
                <Image src="/Logo.png" w="32%" alt="logo" />
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
