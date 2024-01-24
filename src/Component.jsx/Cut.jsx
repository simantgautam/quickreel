import { Box, Flex, Button } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import File from "./AudioFile";

function Cut(props) {
  const [fillerWordSensitivity, setFillerWordSensitivity] = useState(0.5);

  const handleFillerWordSensitivityChange = (event) => {
    const newSensitivity = parseFloat(event.target.value);
    setFillerWordSensitivity(newSensitivity);
    // Perform actions based on the new sensitivity value
    console.log("Filler word sensitivity:", newSensitivity);
  };

  return (
    <Box bgColor={"#8D438E"} mt={50}>
      <Box
        w={"80%"}
        m={"auto"}
        backgroundColor={"black"}
        p={"0px 50px 100px 50px"}
      >
        <File />
        <Box>
          <label>
            Filler Word Sensitivity:
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={fillerWordSensitivity}
              onChange={handleFillerWordSensitivityChange}
            />
          </label>
        </Box>
      </Box>
    </Box>
  );
}

export default Cut;
