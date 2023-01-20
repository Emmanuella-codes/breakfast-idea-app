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
} from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserProfileCmp = () => {
  const [userName, setUserName] = useState(null);
  const auth = getAuth();
  /* const { query } = useRouter();
  const userID = query.userID as string; */
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
          <Text>Hello {`${userName}`}</Text>
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
              />
            </FormControl>
          </form>
        </Box>
        <Box mt="7" color="#000">
          <Text>Favorites</Text>
        </Box>
        <Flex></Flex>
      </Container>
    </>
  );
};

export default UserProfileCmp;
