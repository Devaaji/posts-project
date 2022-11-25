import React from "react";
import { Container, Box, Image, Flex } from "@chakra-ui/react";
import ImageDashboard from "../../assets/images_dashborad.webp";

const DashboardMain = () => {
  return (
    <Container maxW="6xl">
      <Box p="20">
        <Flex justify="center">
          <Image
            boxSize="450px"
            objectFit="cover"
            rounded="md"
            src={ImageDashboard}
            alt="Dan Abramov"
          />
        </Flex>
      </Box>
    </Container>
  );
};

export default DashboardMain;
