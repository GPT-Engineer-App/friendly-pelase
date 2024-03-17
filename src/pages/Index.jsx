import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Flex, Container, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Welcome to{" "}
          <Text as={"span"} color={"orange.400"}>
            My Website
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          This is a sample website built with React, Chakra UI and React Icons. It showcases how to create a modern, responsive landing page with these technologies.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} colorScheme={"orange"} bg={"orange.400"} _hover={{ bg: "orange.500" }}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"} justifyContent="center" mt={8}>
          <Image src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTA1ODc3MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" height={{ sm: "24rem", lg: "28rem" }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<Icon as={FaGithub} w={10} h={10} />} title={"Open Source"} text={"This website code is open source and available on GitHub. Feel free to use it for your own projects!"} />
          <Feature icon={<Icon as={FaTwitter} w={10} h={10} />} title={"Social Media"} text={"Stay connected with us on social media for the latest updates and announcements."} />
          <Feature icon={<Icon as={FaEnvelope} w={10} h={10} />} title={"Contact Us"} text={"Have any questions or feedback? Reach out to us anytime via email."} />
        </SimpleGrid>
      </Box>

      <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
        <Container as={Stack} maxW={"6xl"} py={4} spacing={4} justify={"center"} align={"center"}>
          <Text>© 2023 My Website. All rights reserved</Text>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
