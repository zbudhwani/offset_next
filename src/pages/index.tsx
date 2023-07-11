import Head from "next/head";
import { Stack, Icon, Box, Text, Heading, Button } from "@chakra-ui/react";
import Split from "@/components/multi/Split";
import { Timer } from "@/components/multi/Timer";
import Navbar from "@/components/multi/Navbar";
import Footer from "@/components/multi/Footer";

import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Split />
      <Footer />
      {/* Rest of your component */}
    </>
  );
};

export default Home;
