import { Box, Flex, Button } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import File from "./AudioFile";
import WaveSurfer from "wavesurfer.js";
import WaveformPlayer from "./WaveformPlayer";

function Upload(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const waveformRef = useRef(null);

  useEffect(() => {
    // Initialize WaveSurfer when the component mounts
    if (!waveformRef.current) {
      waveformRef.current = WaveSurfer.create({
        container: "#waveform",
        waveColor: "violet",
        progressColor: "purple",
        responsive: true,
      });
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      // Load audio file into the waveform
      waveformRef.current.load(objectUrl);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }
  };

  const isAudio = selectedFile && selectedFile.type.startsWith("audio/");
  const isVideo = selectedFile && selectedFile.type.startsWith("video/");

  return (
    <Box bgColor={"#8D438E"} mt={50}>
      <Box
        w={"80%"}
        m={"auto"}
        backgroundColor={"black"}
        p={"0px 50px 100px 50px"}
      >
        <File />
        <Box border={"1px solid white"} w={500} p={20} m={"auto"} mt={10}>
          <Flex>
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
        <Box m={10}>
          {selectedFile ? (
            <div style={{ margin: "auto" }}>
              <p>Playing: {selectedFile.name}</p>
              {isAudio && (
                <audio
                  style={{ margin: "20px auto" }}
                  controls
                  src={URL.createObjectURL(selectedFile)}
                ></audio>
              )}
              {isVideo && (
                <video
                  controls
                  width="400"
                  style={{ margin: "20px auto" }}
                  src={URL.createObjectURL(selectedFile)}
                ></video>
              )}
            </div>
          ) : (
            <></>
          )}
        </Box>
        <div id="waveform"></div>
      </Box>
    </Box>
  );
}

export default Upload;
