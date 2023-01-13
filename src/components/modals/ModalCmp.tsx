import React from "react";
import ReactModal from "react-modal";
import { Box } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

// ReactModal.setAppElement("#modals");

ReactModal.defaultStyles.content = {
  backgroundColor: "#16181D",
  width: "100%",
  // margin: "1rem",
  borderRadius: "20px",
  border: "1px solid #000000",
  // boxShadow: "1px 1px 17px rgba(218, 216, 216, 0.33)",
  overflowY: "auto",
};

const ModalCmp: React.FC<{
  isOpen: boolean;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  onRequestClose?: () => void;
  contentLabel?: string;
  id?: string;
  shouldFocusAfterRender?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldReturnFocusAfterClose?: boolean;
  preventScroll?: boolean;
  contentStyles?: any;
  showCloseIcon?: boolean;
  children: React.ReactNode;
  position?: "bottom" | "left" | "right" | "top";
  full?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
}> = ({
  isOpen,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  contentLabel,
  id,
  shouldFocusAfterRender,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  shouldReturnFocusAfterClose,
  preventScroll,
  contentStyles,
  showCloseIcon,
  children,
  position,
  full,
  fullHeight,
  fullWidth,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onAfterClose={onAfterClose}
        onRequestClose={onRequestClose}
        contentLabel={contentLabel}
        id={id}
        shouldFocusAfterRender={shouldFocusAfterRender}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        shouldCloseOnEsc={shouldCloseOnEsc}
        shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
        preventScroll={preventScroll}
        ariaHideApp={false}
        style={{
          content: {
            [position!]: 0,
            minHeight: fullHeight && "100vh",
            height: fullHeight && "100vh",
            /* margin: "auto", */
            borderRadius:
              position === "right" || position === "left" ? 0 : "20px",
            /* marginLeft: position === "right" && "auto",
            marginright: position === "left" && "auto", */
            background: "#1F2228",
            borderColor: "#1F2228",
            ...contentStyles,
          },
        }}
      >
        {showCloseIcon && (
          <Box
            textAlign="right"
            padding="1rem"
            display="flex"
            justifyContent="flex-end"
          >
            <Box
              onClick={onRequestClose}
              borderRadius="50%"
              bgColor="rgba(194, 193, 193, 0.3)"
              width="30px"
              height="30px"
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              cursor={"pointer"}
            >
              <SmallCloseIcon color={"#fff"} w={6} h={6} />
            </Box>
          </Box>
        )}
        {children}
      </ReactModal>
    </>
  );
};

export default ModalCmp;
