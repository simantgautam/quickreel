import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import styles from "./home.module.css";
import File from "./AudioFile";

function Home(props) {
  return (
    <Box className={styles["home"]}>
      <Box w={"90%"} m={"auto"} pb={50}>
        <Navbar />
        <Box>
          <Heading color={"#fff"} size={"2xl"} m={10} mt={20}>
            The Fastest Way to Cut Your Videos
          </Heading>
          <Text fontSize={"22px"} fontWeight={"500"} w={"50%"} m={"auto"}>
            Automatically Remove Silence in Seconds using AI. Instant Jump
            Cutting for Vloggers, Streamers, Influencers, Podcasters and all
            Content Creators. Fully Browser Based.
          </Text>
        </Box>
      </Box>
      <Box bgColor={"#8D438E"} mt={50}>
        <File />
      </Box>
    </Box>
  );
}

export default Home;
