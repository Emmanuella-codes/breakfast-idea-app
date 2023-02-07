import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import LoginModal from "./modals/LoginModal";
import ActionModal from "./modals/SignupModal";
import { useFormik } from "formik";
import { searchByIngredient } from "utils/getRecipes";
import { recipesType } from "utils/recipeData";
import { useRouter } from "next/router";
// import LoginModal from "./modals/LoginModal";
// import SignupModal from "./modals/SignupModal";

const HomeCmp = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [searchRecipes, setSearchRecipes] = useState([]);

  const router = useRouter();

  const formik = useFormik({
    initialValues: { searchQuery: "" },
    onSubmit: (values) => {
      setSearchRecipes(searchByIngredient(values.searchQuery));
      router.push({
        pathname: "/search/[ingredient]",
        query: { ingredient: values.searchQuery },
      });
    },
  });

  useEffect(() => {
    console.log(searchRecipes);
  }, [searchRecipes]);

  return (
    <>
      <Container maxW={"5xl"} mb="10">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 18, md: 25 }}
        >
          <Heading
            as={"h1"}
            fontWeight={800}
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color="#000"
          >
            Breakfast Ideas
          </Heading>
          <Text color={"gray.500"}>
            Welcome to the ultimate breakfast inspiration app! Our app is here
            to help you get your day off to a great start with delicious and
            creative breakfast ideas. Whether you&apos;re looking for a quick
            and easy breakfast on the go or a relaxing weekend brunch,
            we&apos;ve got you covered.
          </Text>
        </Stack>
        <Stack spacing={9} direction={"row"} justifyContent="center">
          <Button
            rounded={"full"}
            p="0.8rem 1rem"
            bg="#000"
            color="#FFF"
            _hover={{ bg: "#615e5e" }}
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            LOGIN
          </Button>
          <Button
            rounded={"full"}
            p="0.8rem 1rem"
            bg="#2085ba"
            color="#FFF"
            _hover={{ bg: "#175e83" }}
            onClick={() => {
              setOpenSignupModal(true);
            }}
          >
            SIGNUP
          </Button>
        </Stack>
        <Box mt="7">
          <form onSubmit={formik.handleSubmit}>
            <Flex gap={9}>
              <FormControl id="search" w="50%">
                <Input
                  id="search"
                  type="text"
                  name="searchQuery"
                  placeholder="search e.g eggs"
                  _placeholder={{ color: "gray.500" }}
                  color="#000"
                  border="1px solid black"
                  value={formik.values.searchQuery}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <Box
                as={Button}
                cursor={"pointer"}
                bgColor={"#4E9060"}
                borderRadius="15px"
                p="0.8rem 1rem"
                type="submit"
                isLoading={formik.isSubmitting}
                isDisabled={formik.isValid ? false : true}
                onClick={() => {
                  formik.handleSubmit;
                }}
                _hover={{
                  bgColor: "green.500",
                }}
              >
                SUBMIT
              </Box>
            </Flex>
          </form>
        </Box>
        <Box>
          {searchRecipes.map((recipes) => (
            <Box key={recipes.id}>
              <Text>{recipes.name}</Text>
            </Box>
          ))}
        </Box>
        <Flex
          gap="6"
          mt={"10"}
          mx="auto"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box
            bg="#b5838d"
            px="4"
            py={{ base: "4", md: "10" }}
            borderRadius={"20px"}
            w={{ base: "100%", md: "50%" }}
          >
            <Heading as="h2" fontSize="3xl">
              Pap and Moi Moi
            </Heading>
            <Flex flexDir="row" gap="4">
              <Box>
                <Text>ingredients:</Text>
                <Image src="/moi-moi-and-pap.png" alt="meal-pic" />
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
            w={{ base: "100%", md: "50%" }}
          >
            <Heading as="h2" fontSize="3xl">
              Pap and Akara
            </Heading>
            <Flex flexDir="row" gap="4">
              <Box>
                <Text>ingredients:</Text>
                <Image src="/akara-and-pap.png" maxW="3%" alt="meal-pic" />
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
        <AboutUs />
        <Box display={"flex"}>
          <LoginModal
            isOpen={openLoginModal}
            onRequestClose={() => {
              setOpenLoginModal(false);
            }}
            maxWidth={"400px"}
            actionTitle={"LOGIN"}
            actionDesc={"Login to continue enjoying our cool features"}
            yesText={"LOGIN"}
            noText={"CANCEL"}
          />
        </Box>
        <Box>
          <ActionModal
            isOpen={openSignupModal}
            onRequestClose={() => {
              setOpenSignupModal(false);
            }}
            maxWidth={"400px"}
            actionTitle={"SIGNUP"}
            actionDesc={"Sign up to enjoy our cool featues"}
            yesText={"SIGNUP"}
            noText={"CANCEL"}
          />
        </Box>
      </Container>
    </>
  );
};

export default HomeCmp;
