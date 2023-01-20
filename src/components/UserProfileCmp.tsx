import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  Button,
} from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserProfileCmp = () => {
  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });
  const [userName, setUserName] = useState(null);
  const auth = getAuth();
  const router = useRouter();
  /* const { query } = useRouter();
  const userID = query.userID as string; */
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast({
          status: "success",
          description: "Logged out successfully",
        });
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast({
          status: "error",
          description: errorMessage,
        });
      });
  };

  useEffect(() => {
    const userData = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUserName(user.displayName);
      } else {
        setUserName(null);
      }
    });
    return () => userData();
  }, [auth]);

  return (
    <>
      <Container maxW="5xl" mb="10">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 18, md: 25 }}
          py={{ base: 18, md: 25 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color="#000"
          >
            Breakfast Ideas
          </Heading>
        </Stack>
        <Box mb="7" color="#000">
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={500}>
            Hello {`${userName}`},
          </Text>
        </Box>
        <Box alignItems={"center"} color="#000">
          <form>
            <FormControl id="search">
              <Input
                id="search"
                type="text"
                name="search"
                placeholder="search e.g eggs"
                _placeholder={{ color: "gray.500" }}
                color="#000"
                border="1px solid black"
                w="50%"
              />
            </FormControl>
          </form>
        </Box>
        {/* favorites section: user saved recipes will be displayed here */}
        <Box color="#000">
          <Box mt="7">
            <Text as={"h3"} fontSize="2xl">
              Favorites
            </Text>
          </Box>
          <Flex></Flex>
        </Box>
        <Box mt={7}>
          <Box
            as={Button}
            bgColor="blue.400"
            onClick={handleSignOut}
            _hover={{ bg: "blue.900" }}
          >
            LOGOUT
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default UserProfileCmp;
