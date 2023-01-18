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
import React, { useEffect, useState } from "react";

interface IUSERPROFILE {
  userID: string;
}

const UserProfileCmp: React.FC<IUSERPROFILE> = ({ userID }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
    // const userToken = user.getToken();
  }
  /* useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]); */

  return (
    <>
      {/* {user && ( */}
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
        <Box mb="7">
          <Text>Hello User</Text>
        </Box>
        <Box alignItems={"center"}>
          <form>
            <FormControl id="email">
              <Input
                id="search"
                type="text"
                name="search"
                placeholder="search e.g eggs"
                /*  onChange={}
                  value={} */
              />
            </FormControl>
          </form>
        </Box>
        <Box mt="7">
          <Text>Favorites</Text>
        </Box>
        <Flex></Flex>
      </Container>
      {/* )} */}
    </>
  );
};

export default UserProfileCmp;
