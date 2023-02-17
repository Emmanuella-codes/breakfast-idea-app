import ModalCmp from "./ModalCmp";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const DeleteModal: React.FC<{
  isOpen: boolean;
  onRequestClose: () => void;
  maxWidth: string;
  showCloseIcon?: boolean;
  actionTitle: string;
  actionDesc: string;
  yesText: string;
  noText: string;
  yesAction: () => void;
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
}) => {
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
          <Flex
            alignItems={"center"}
            justifyContent={"space-around"}
            gap="20px"
            pt="2rem"
          >
            <Box
              as={Button}
              cursor={"pointer"}
              bgColor={"red.600"}
              borderRadius="15px"
              p="0.8rem 1rem"
              onClick={yesAction}
              _hover={{
                bgColor: "red.800",
              }}
              rounded="lg"
            >
              {yesText}
            </Box>

            <Box
              as={Button}
              cursor={"pointer"}
              bgColor={"#4E9060"}
              borderRadius="18px"
              p="0.8rem 1rem"
              onClick={onRequestClose}
              rounded={"lg"}
            >
              {noText}
            </Box>
          </Flex>
        </Box>
      </ModalCmp>
    </>
  );
};

export default DeleteModal;
