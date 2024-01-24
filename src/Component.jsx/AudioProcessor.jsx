import React, { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const AudioProcessor = () => {
  const [fillerWordSensitivity, setFillerWordSensitivity] = useState(0.5);
  const [audioFile, setAudioFile] = useState(null);
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
    if (file) {
      setAudioFile(file);
      const objectUrl = URL.createObjectURL(file);
      // Load audio file into the waveform
      waveformRef.current.load(objectUrl);
    }
  };

  const handleFillerWordSensitivityChange = (event) => {
    const newSensitivity = parseFloat(event.target.value);
    setFillerWordSensitivity(newSensitivity);
    // Perform actions based on the new sensitivity value
    console.log("Filler word sensitivity:", newSensitivity);
  };

  const processAudio = () => {
    // Implement logic to send audio file and sensitivity to the server for processing
    // You may use Fetch API or other AJAX libraries for this
    console.log("Processing audio with sensitivity:", fillerWordSensitivity);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="audio/*" />
      <div id="waveform"></div>
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
      <button onClick={processAudio}>Process Audio</button>
    </div>
  );
};

export default AudioProcessor;
