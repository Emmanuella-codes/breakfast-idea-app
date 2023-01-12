import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const HomeCmp = () => {
  return (
    <>
      <Container maxW={"5xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
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
        <Stack spacing={9} direction={"row"} justifyContent="center">
          <Button rounded={"full"} px={6} bg="#000" _hover={{ bg: "#615e5e" }}>
            Login
          </Button>
          <Button
            rounded={"full"}
            px={6}
            bg="#2085ba"
            _hover={{ bg: "#175e83" }}
          >
            Signup
          </Button>
        </Stack>
        <Box mt="7">
          <Box bg={"#b5838d"} w={{base: "45%", md: "25%"}} m={"auto"} p="2" borderRadius={"10px"}>
            <Text>search e.g akara</Text>
          </Box>
        </Box>
        <Flex gap="6" mt={"10"} w="80%" mx="auto">
          <Box
            bg="#b5838d"
            px="4"
            py={{ base: "4", md: "10" }}
            borderRadius={"20px"}
          >
            <Heading as="h2" fontSize="3xl">
              Pap and Akara
            </Heading>
            <Flex flexDir="row" gap="4">
              <Box>
                <Text>ingredients:</Text>
                <Image src="" alt="meal-pic" />
                <Text>prepare time: 2hrs</Text>
              </Box>
              <Box>
                <Text>
                  beans, pepper puree, seasoning , vegetable oil, palm oil, pap,
                  milk and sugar (optional)
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            bg="#b5838d"
            px="4"
            py={{ base: "4", md: "10" }}
            borderRadius={"20px"}
          >
            <Heading as="h2" fontSize="3xl">
              Pap and Akara
            </Heading>
            <Flex flexDir="row" gap="4">
              <Box>
                <Text>ingredients:</Text>
                <Image src="" alt="meal-pic" />
                <Text>prepare time: 2hrs</Text>
              </Box>
              <Box>
                <Text>
                  beans, pepper puree, seasoning , vegetable oil, palm oil, pap,
                  milk and sugar (optional)
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default HomeCmp;
