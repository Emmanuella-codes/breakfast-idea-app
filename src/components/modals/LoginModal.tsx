import {
  Box,
  Text,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import ModalCmp from "./ModalCmp";
import * as yup from "yup";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LOGINVALIDATOR } from "validator/LoginValidator";

const LoginModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  maxWidth: string;
  showCloseIcon?: boolean;
  actionTitle: string;
  actionDesc: string;
  yesText: string;
  noText: string;
}> = ({
  isOpen,
  onRequestClose,
  maxWidth,
  showCloseIcon,
  actionTitle,
  actionDesc,
  yesText,
  noText,
}) => {
  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const validationSchema = yup.object().shape(LOGINVALIDATOR);
  const auth = getAuth();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            if (auth.currentUser) {
              setLoggedIn(true);
              toast({
                status: "success",
                description: "Logged in successfully",
              });
              router.push({
                pathname: "/user/[userID]",
                query: { userID: user.uid },
              });
            }
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast({
              status: "error",
              description: errorMessage,
            });
          })
          .finally(() => {
            formik.setSubmitting(false);
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    const userData = onAuthStateChanged(auth, (user) => {
      setUserDetails(user);
    });
    return userData;
  }, [auth]);

  return (
    <>
      <ModalCmp
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentStyles={{ maxWidth: maxWidth || "350px" }}
        shouldFocusAfterRender={false}
        contentLabel="Terms"
        id="terms"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        showCloseIcon={showCloseIcon}
      >
        <Box
          flexDir={"column"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          p="2rem 1.5rem"
        >
          <Text
            fontWeight={"700"}
            fontFamily="Helvetica"
            color="#fff"
            fontSize={"25px"}
            textAlign="center"
          >
            {actionTitle}
          </Text>
          <Text
            pt="1rem"
            fontWeight={"400"}
            width="300px"
            textAlign="center"
            color="#fff"
            fontSize={"15px"}
          >
            {actionDesc}
          </Text>
          <Box mt={4}>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel htmlFor="email" color="#fff">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    color="#FFF"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel htmlFor="password" color="#fff">
                    Password
                  </FormLabel>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    color="#FFF"
                  />
                </FormControl>
              </Stack>
              <Flex
                alignItems={"center"}
                justifyContent={"space-around"}
                gap="20px"
                pt="2rem"
              >
                <Box
                  as={Button}
                  cursor={"pointer"}
                  bgColor={"#4E9060"}
                  borderRadius="15px"
                  p="0.8rem 1rem"
                  type="submit"
                  isLoading={formik.isSubmitting}
                  isDisabled={formik.isValid ? false : true}
                  onClick={() => formik.handleSubmit}
                  _hover={{
                    bgColor: "green.500",
                  }}
                >
                  {yesText}
                </Box>

                <Box
                  as={Button}
                  cursor={"pointer"}
                  bgColor={"red.600"}
                  borderRadius="15px"
                  p="0.8rem 1rem"
                  onClick={onRequestClose}
                  _hover={{
                    bgColor: "red.800",
                  }}
                >
                  {noText}
                </Box>
              </Flex>
            </form>
          </Box>
        </Box>
      </ModalCmp>
    </>
  );
};

export default LoginModal;
