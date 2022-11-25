import React, { useContext, useEffect } from "react";
import { Container, Box, Flex, Text, Button, HStack } from "@chakra-ui/react";
import { GoSignIn } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthUserProvider";

const DashboardNavbar = () => {
  const { username } = useContext(AuthUserContext);

  useEffect(() => {
    console.log("username", username);
  }, [username]);

  return (
    <Box borderWidth={1}>
      <Container maxW="6xl">
        <Flex justify="space-between" py="5" alignSelf="center">
          <Text fontSize="2xl" fontWeight="bold">
            Cinta Coding
          </Text>
          <Box alignSelf="center">
            {username ? (
              <HStack fontWeight="bold" fontSize="xl">
                <Text>Welcome,</Text>
                <Text color="blue.500">{username}</Text>
              </HStack>
            ) : (
              <Link to="/login">
                <Button colorScheme="facebook" leftIcon={<GoSignIn />}>
                  Login
                </Button>
              </Link>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default DashboardNavbar;
