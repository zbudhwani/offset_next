import NextImage from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      as="section"
      pb={{
        base: "12",
        md: "24",
      }}
    >
      <Box as="nav" bg="bg-surface" boxShadow="sm" px={8} py={5}>
        <Flex justify="space-between">
          <NextImage src="/images/firn-logo.png" width={60} height={60} />
          <HStack spacing="4">
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="1">
                <Button>HOME</Button>
                <Button aria-current="page">FOR DEVELOPERS</Button>
                <Button>BLOG</Button>
              </ButtonGroup>
            )}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
