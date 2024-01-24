import { Button, Flex, Box, Heading } from "@chakra-ui/react";
import React from "react";

function Navbar(props) {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} p={5}>
      <Box>
        <Heading size={"lg"} color={"fff"}>
          Quickreel
        </Heading>
      </Box>
      <Flex>
        <Button color={"#fff"} background={"none"} mr={5}>
          Pricing
        </Button>
        <Button color={"#fff"} background={"none"}>
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
