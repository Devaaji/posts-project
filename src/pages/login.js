import React, { useContext, useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Center,
  useDisclosure,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Alert,
  AlertIcon,
  useBoolean,
} from "@chakra-ui/react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthUserContext } from "../context/AuthUserProvider";

const LoginPages = () => {
  const navigate = useNavigate();
  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();

  const { setLogin } = useContext(AuthUserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useBoolean();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading.on();
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.data);

      const user = response.find((user) => user.username === username);
      const findPassword = response.find((user) => user.username === password);

      if (user && findPassword) {
        setIsError(false);
        setLogin(user.id, user.username, user.email);
        navigate("/");
        setIsLoading.off();
      } else {
        setIsLoading.off();
        setIsError(true);
      }
    } catch (error) {}
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear-gradient(to left top, #010080, #461174)"
    >
      <Flex w="full" h="full" justify="center" align="center">
        <Stack
          as="form"
          onSubmit={handleLoginSubmit}
          spacing={8}
          bg="white"
          w="96"
          border="1px solid black"
          px="10"
          py="20"
          rounded="md"
        >
          <Center>
            <Box fontSize="xl" fontWeight="bold">
              Login Page
            </Box>
          </Center>
          {isError && (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              Wrong username or password! Please try again
            </Alert>
          )}

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>password</FormLabel>
            <InputGroup>
              <Input
                placeholder="Password"
                type={isPasswordOpen ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  variant="ghost"
                  color="ims-linebox"
                  aria-label={
                    isPasswordOpen ? "Mask password" : "Reveal password"
                  }
                  icon={
                    isPasswordOpen ? <BsFillEyeFill /> : <BsFillEyeSlashFill />
                  }
                  onClick={onPasswordToggle}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            bg="#010080"
            color="white"
            isLoading={isLoading}
            transitionProperty="common"
            transitionDuration="normal"
            _hover={{
              bgGradient: "linear-gradient(to right top, #010080, #461174)",
              transform: "scale(1.01)",
            }}
            fontWeight="bold"
          >
            Masuk
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default LoginPages;
