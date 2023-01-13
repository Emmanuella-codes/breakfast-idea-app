import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <VStack
      paddingTop="40px"
      spacing="2"
      alignItems="flex-start"
      color={"gray.500"}
    >
      <Heading as="h2">About us</Heading>
      <Text as="p" fontSize="lg">
        Hola, We are a team of food enthusiasts who are passionate about
        breakfast and the power it has to set the tone for the entire day. We
        believe that breakfast is the most important meal of the day and that it
        should be delicious, nourishing, and satisfying. We created this app to
        provide inspiration and ideas for breakfast lovers everywhere. Our goal
        is to make it easy for people to find new and exciting breakfast ideas,
        whether they&apos;re looking for a quick and easy breakfast on the go or
        a leisurely weekend brunch.
      </Text>
      <Text as="p" fontSize="lg">
        Thank you for choosing our app and we hope you enjoy using it as much as
        we enjoyed creating it.
      </Text>
    </VStack>
  );
};

export default AboutUs;
