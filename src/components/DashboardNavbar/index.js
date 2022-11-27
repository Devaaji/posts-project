import React, { useContext } from "react";
import { Container, Box, Flex, Text, Button, HStack } from "@chakra-ui/react";
import { GoSignIn } from "react-icons/go";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthUserProvider";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { username } = useContext(AuthUserContext);

  const handleLogout = async () => {
    Cookies.remove("_i");
    Cookies.remove("_u");
    Cookies.remove("_e");
    navigate(0);
  };

  return (
    <Box borderWidth={1}>
      <Container maxW="6xl">
        <Flex justify="space-between" py="5" alignSelf="center">
          <Text fontSize="2xl" fontWeight="bold">
            Cinta Coding
          </Text>
          <Box alignSelf="center">
            {username ? (
              <HStack fontWeight="bold" fontSize="xl" spacing={5}>
                <HStack>
                  <Text>Welcome,</Text>
                  <Text color="blue.500">{username}</Text>
                </HStack>
                <Button
                  colorScheme="red"
                  onClick={handleLogout}
                  leftIcon={<IoLogOut />}
                >
                  Logout
                </Button>
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
