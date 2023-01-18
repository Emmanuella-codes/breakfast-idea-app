import {
  Box,
  Text,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import ModalCmp from "./ModalCmp";
import "firebase/auth";
import * as yup from "yup";
import { FORMVALIDATOR } from "validator/FormValidator";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useFormik } from "formik";
import { FormikProvider } from "formik/dist/FormikContext";
import { useRouter } from "next/router";

const LoginModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  maxWidth: string;
  showCloseIcon?: boolean;
  actionTitle: string;
  actionDesc: string;
  yesText: string;
  noText: string;
  yesAction: () => void;
  noAction: () => void;
}> = ({
  isOpen,
  onRequestClose,
  maxWidth,
  showCloseIcon,
  actionTitle,
  actionDesc,
  yesText,
  noText,
  yesAction,
  noAction,
}) => {
  const validationSchema = yup.object().shape(FORMVALIDATOR);
  const auth = getAuth();
  const router = useRouter()
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
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
          .finally(() => {
            formik.setSubmitting(false);
            router.push("user/[userID].tsx")
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

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

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </FormControl>
            </Stack>

            <Flex
              alignItems={"center"}
              justifyContent={"space-around"}
              gap="20px"
              pt="2rem"
            >
              <Box></Box>
              <Text cursor={"pointer"} onClick={yesAction}>
                {yesText}
              </Text>
              <Box
                cursor={"pointer"}
                bgColor={"#4E9060"}
                borderRadius="18px"
                p="0.8rem 1rem"
                onClick={noAction}
              >
                {noText}
              </Box>
            </Flex>
          </form>
        </Box>
      </ModalCmp>
    </>
  );
};

export default LoginModal;
