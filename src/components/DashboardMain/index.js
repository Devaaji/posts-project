import React, { useRef, useState } from "react";
import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import useRemotePosts from "../../hooks/remote/useRemotePosts";
import DashboardPagination from "../DahboardPagination";
import DashboardPosts from "../DashboardPosts";

const DashboardMain = () => {
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
    <Box mt="2">
      <Box>
        <InputGroup>
          <Input placeholder="Search.." />
          <InputRightElement children={<FcSearch color="green.500" />} />
        </InputGroup>
      </Box>
      <VStack mt="5" h="64vh" overflow="auto" px="4">
        <Box as="span" ref={scrollUpWindow}></Box>
        {isSuccess &&
          dataSlice?.map((post, i) => <DashboardPosts post={post} key={i} />)}
      </VStack>
      <Box>
        <DashboardPagination
          total={totalpage}
          current={pageIndex}
          onPageClick={handlePageClick}
        />
      </Box>
    </Box>
  );
};

export default DashboardMain;
