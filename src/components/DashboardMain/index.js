import React, { useContext, useRef, useState } from "react";
import {
  Container,
  Box,
  Image,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import ImageDashboard from "../../assets/images_dashborad.webp";
import { AuthUserContext } from "../../context/AuthUserProvider";
import { FcSearch, FcSms } from "react-icons/fc";
import useRemotePosts from "../../hooks/remote/useRemotePosts";
import DashboardPagination from "../DahboardPagination";

const DashboardMain = () => {
  const { id, username, email } = useContext(AuthUserContext);
  const scrollUpWindow = useRef(null);

  const [pageIndex, setPageIndex] = useState(1);
  const [limitIndex, setLimitIndex] = useState(10);

  const { data: dataPosts, isLoading, isSuccess } = useRemotePosts(pageIndex);

  function paginateData() {
    if (!isLoading) {
      return dataPosts.slice(
        (pageIndex - 1) * limitIndex,
        pageIndex * limitIndex
      );
    }
  }

  const dataSlice = paginateData();

  function totalDataPages() {
    if (!isLoading) {
      return dataPosts.length / dataSlice.length;
    }
  }
  const totalpage = totalDataPages();

  const handlePageClick = (page) => {
    setPageIndex(page);

    if (scrollUpWindow && scrollUpWindow.current) {
      scrollUpWindow.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Container maxW="6xl">
      {id && username && email ? (
        <Container maxW="xl" mt="10">
          <Box>
            <InputGroup>
              <Input placeholder="Search.." />
              <InputRightElement children={<FcSearch color="green.500" />} />
            </InputGroup>
          </Box>
          <VStack mt="5" h="67vh" overflow="auto">
            <Box as="span" ref={scrollUpWindow}></Box>
            {isSuccess &&
              dataSlice?.map((post, i) => (
                <HStack w="full" key={i}>
                  <Box w="200px" alignSelf="flex-start">
                    <Text fontWeight="bold" fontSize="xl">
                      Deva aji
                    </Text>
                  </Box>
                  <Flex w="full" direction="column">
                    <Text>{post.body}</Text>
                    <HStack
                      my="2"
                      p="1"
                      spacing={4}
                      _hover={{
                        bg: "gray.200",
                        cursor: "pointer",
                        rounded: "md",
                      }}
                    >
                      <Icon as={FcSms} fontSize="2xl" />
                      <Text fontWeight="semibold">5</Text>
                      <Text color="blue.600">Detail</Text>
                    </HStack>
                  </Flex>
                </HStack>
              ))}
          </VStack>
          <Box>
            <DashboardPagination
              total={totalpage}
              current={pageIndex}
              onPageClick={handlePageClick}
            />
          </Box>
        </Container>
      ) : (
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
      )}
    </Container>
  );
};

export default DashboardMain;
