import { Flex, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function File(props) {
  const navigate = useNavigate();
  return (
    <Flex justifyContent={"space-between"} p={10}>
      <Box w={300} m={"auto"}>
        <Button w={"100%"}>Select Audio/Video File</Button>
      </Box>
    </Flex>
  );
}

export default File;
