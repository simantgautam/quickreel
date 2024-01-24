import { Flex, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";

function File(props) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("audioFile", selectedFile);

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully!");
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Box w={"80%"} m={"auto"} backgroundColor={"black"}>
      <Flex justifyContent={"space-between"} p={10}>
        <Box w={300}>
          <Button w={"100%"}>Select</Button>
        </Box>
        <Box w={300}>
          <Button w={"100%"}>Cut</Button>
        </Box>
        <Box w={300}>
          <Button w={"100%"}>Save</Button>
        </Box>
      </Flex>
      <Flex p={100}>
        <input
          type="file"
          id="mediaFile"
          accept="audio/*,video/*"
          style={{ padding: "10px" }}
          onChange={handleFileChange}
        />
        <Box>
          <Button onClick={handleUpload}>Submit</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default File;
