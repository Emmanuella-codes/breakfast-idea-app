import Link from "next/link";
import React from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="#D5C2C9"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={""}>
          {/* <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
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
          {/* <Flex alignItems={"center"}>
            <Menu>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="/">
                <Image src="/Logo.png" alt="logo" />
              </Link>
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
};

export default Navbar;
