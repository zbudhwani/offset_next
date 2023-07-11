import Head from "next/head";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { Navbar } from "@/components/multi/Navbar";
import { Timer } from "@/components/multi/Timer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Firn Investments</title>
        <meta
          name="description"
          content="Invest in the clean energy and assets"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box display="flex" flexDirection="column" m="0, auto" p={10}>
        {/* TOP INTRO BOX */}
        <Box display="flex" flexDirection="column" p={5}>
          <Heading as="h1">Invest in Solar</Heading>
          <Text>
            define Firn: /firn/: A sustainable investment platform for everyone.
          </Text>
          <Button>Join the Waitlist</Button>
          <Text>
            Our low-cost ecoFunds provide access to high-quality, sustainable
            projects that not only help mitigate or adapt to climate change but
            also offer robust returns for decades to come.
          </Text>
          <Text>
            Until now, only large institutional investors had direct access to
            clean energy projects. However, we believe that everyone should have
            the opportunity to invest in the future of our planet. That's why we
            have expertly curated investments in clean technology that focus on
            well-understood, clean technologies like wind and solar. Our team of
            finance and engineering professionals select only those projects
            that offer an attractive balance of risk and reward, ensuring that
            our investors receive robust returns while mitigating climate
            change.
          </Text>
          <Text>
            Join Firn today and invest in a better tomorrow. Sleep at night
            knowing your investments do well and do good.
          </Text>
        </Box>
        {/* MIDDLE ECOFUND BOX */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Heading as="h2">Firn ecoFunds coming early 2023!</Heading>
          <Heading as="h3" textAlign="center">
            Reserve your spot now and get exclusive access to a limited number
            of investors seats.
          </Heading>
          <Timer />
          <Box
            width="550px"
            height="680px"
            backgroundImage="url(images/red-zeppelin.png)"
            px={10}
            py={12}
          >
            <Text>Solar ecoFund</Text>
            <Box>
              <Text>70</Text>
              <Text>REMAINING SPOTS</Text>
            </Box>
            <Box>
              <Text>Spot text placeholder</Text>
            </Box>
          </Box>
          <Button>Reserve your spot</Button>
        </Box>
        {/* BOTTOM BOX WITH BLACK BACKGROUND */}
      </Box>
    </>
  );
}
