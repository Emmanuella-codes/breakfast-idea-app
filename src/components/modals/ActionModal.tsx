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

const ActionModal: React.FC<{
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
  //   const [isLowerthan316] = useMediaQuery("(max-width:316px)");
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
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
          </Stack>
          <Flex
            alignItems={"center"}
            justifyContent={"space-around"}
            gap="20px"
            pt="2rem"
          >
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
        </Box>
      </ModalCmp>
    </>
  );
};

export default ActionModal;
