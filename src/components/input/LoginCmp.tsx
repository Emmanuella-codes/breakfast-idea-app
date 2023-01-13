import { Input, InputGroup, Stack } from "@chakra-ui/react";
import React from "react";

const LoginCmp = () => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <Input type="text" placeholder="email" />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="password" />
      </InputGroup>
    </Stack>
  );
};

export default LoginCmp;
