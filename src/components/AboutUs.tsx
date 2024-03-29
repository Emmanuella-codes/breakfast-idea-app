import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <VStack
      paddingTop="40px"
      spacing="2"
      alignItems="flex-start"
      color={"gray.600"}
    >
      <Heading as="h2">About</Heading>
      <Text as="p" fontSize="lg">
        Hola, I am a food enthusiast who is passionate about breakfast and the
        power it has to set the tone for the entire day. I believe that
        breakfast should be delicious, nourishing, and satisfying. I created
        this app to provide inspiration and ideas for breakfast lovers
        everywhere. My goal is to make it easy for people to find new and
        exciting breakfast ideas, whether they&apos;re looking for a quick and
        easy breakfast on the go or a leisurely weekend brunch.
      </Text>
      <Text as={"p"} fontSize="lg">
        This app offers a diverse range of breakfast recipes, including cuisines
        from West Africa, South Africa, East Africa, the Caribbean and many
        others. I believe that breakfast can be elevated to an exciting and
        enjoyable experience, and what better way to do so than by bringing the
        exotic scents and flavors of distant countries into your kitchen. With
        the <strong>breakfast idea</strong> app, you can enjoy a delicious and
        culturally diverse breakfast from the comfort of your own home.
      </Text>
    </VStack>
  );
};

export default AboutUs;
