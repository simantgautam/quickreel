import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveformPlayer = ({ mediaUrl, key }) => {
  const waveformRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.destroy();
    }

    const newWavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "violet",
      progressColor: "purple",
      responsive: true,
    });

    newWavesurfer.load(mediaUrl);
    setWavesurfer(newWavesurfer);

    return () => {
      newWavesurfer.destroy();
    };
  }, [mediaUrl, key]);

  return <div ref={waveformRef}></div>;
};

export default WaveformPlayer;
