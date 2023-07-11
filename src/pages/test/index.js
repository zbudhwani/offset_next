import { Stack, Text, Button, Icon, Image } from "@chakra-ui/react";
import { BiHome } from "react-icons/bi";

export default function TestPage() {
  return (
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="0px"
      height="1113px"
    >
      <Stack
        paddingTop="40px"
        justify="flex-start"
        align="flex-start"
        spacing="10px"
        overflow="hidden"
        borderColor="gray.200"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        height="1113px"
        background="white"
        boxShadow="base"
      >
        <Stack
          paddingX="120px"
          direction="row"
          justify="center"
          align="center"
          spacing="790px"
          width="1664px"
          maxWidth="100%"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.2"
            fontWeight="bold"
            fontSize="30px"
            color="black"
          >
            F I R N
          </Text>
          <Stack
            direction="row"
            justify="flex-end"
            align="baseline"
            spacing="24px"
            width="530px"
            maxWidth="100%"
          >
            <Button leftIcon={<Icon as={BiHome} />} variant="outline">
              Home
            </Button>
            <Button variant="outline">For Developers</Button>
            <Button variant="outline">Our Blog</Button>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
        >
          <Stack
            paddingX="120px"
            paddingY="80px"
            justify="flex-start"
            align="flex-start"
            spacing="10px"
            overflow="hidden"
          >
            <Stack justify="flex-start" align="flex-start" spacing="120px">
              <Stack
                paddingY="24px"
                justify="flex-start"
                align="flex-start"
                spacing="24px"
                width="574px"
                height="245px"
                maxWidth="100%"
              >
                <Text
                  fontFamily="Inter"
                  lineHeight="1.25"
                  fontWeight="bold"
                  fontSize="48px"
                  color="black"
                  width="574px"
                  height="120px"
                  maxWidth="100%"
                >
                  Invest in batteries with the click of a button
                </Text>
                <Text
                  fontFamily="Sora"
                  lineHeight="1.33"
                  fontWeight="medium"
                  fontSize="30px"
                  color="blackAlpha.500"
                  width="574px"
                  maxWidth="100%"
                >
                  define Firn: /firn/ A sustainable investment platform for
                  everyone
                </Text>
                <Button
                  size="lg"
                  colorScheme="blue"
                  width="226px"
                  height="48px"
                >
                  Join the waitlist
                </Button>
              </Stack>
              <Text
                fontFamily="Sora"
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="18px"
                color="blackAlpha.500"
                width="574px"
                maxWidth="100%"
              >
                Our low-cost ecoFunds provide access to high-quality,
                sustainable projects that not only help mitigate or adapt to
                climate change but also offer robust returns for decades to
                come. Until now, only large institutional investors had direct
                access to clean energy projects. However, we believe that
                everyone should have the opportunity to invest in the future of
                our planet. That's why we have expertly curated investments in
                clean technology that focus on well-understood, clean
                technologies like wind and solar. Our team of finance and
                engineering professionals select only those projects that offer
                an attractive balance of risk and reward, ensuring that our
                investors receive robust returns while mitigating climate
                change. Join Firn today and invest in a better tomorrow. Sleep
                at night knowing your investments do well and do good.
              </Text>
            </Stack>
          </Stack>
          <Stack justify="center" align="center" spacing="10px" height="1011px">
            <Image
              alt="image"
              src="image"
              width="100%"
              height="683px"
              maxWidth="100%"
              objectFit="cover"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
