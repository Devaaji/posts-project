import React from "react";
import {
  HStack,
  Box,
  Flex,
  Collapse,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FcSms } from "react-icons/fc";
import useRemoteUsers from "../../hooks/remote/useRemoteUsers";
import useRemoteDetailComments from "../../hooks/remote/useRemoteDetailComments";
import DashboardComment from "../DashboardComment";

const DashboardPosts = ({ post }) => {
  const {
    data: dataUsers,
    isLoading: isLoadingUsers,
    isSuccess: isSuccessUser,
  } = useRemoteUsers();

  const { isOpen: isOpenDetail, onToggle: onToggleDetail } = useDisclosure();
  const { isOpen: isOpenComments, onToggle: onToggleComments } =
    useDisclosure();

  const {
    data: dataComments,
    isLoading: isLoadingDataComments,
    isSuccess: isSuccessComment,
  } = useRemoteDetailComments({
    postId: post.id,
  });

  return (
    <HStack w="full">
      {isLoadingUsers && isLoadingDataComments && <Box>Loading.....</Box>}
      <>
        <Box w="200px" alignSelf="flex-start">
          <Text fontWeight="bold" fontSize="xl">
            {isSuccessUser &&
              dataUsers.find((u) => u.id === post.userId).username}
          </Text>
        </Box>
        <Flex w="full" direction="column">
          <Box
            onClick={() => {
              onToggleComments();
              onToggleDetail();
            }}
          >
            <Text fontWeight="semibold">{post.title}</Text>
          </Box>
          <Collapse in={isOpenDetail} animateOpacity>
            <Text mt="2">{post.body}</Text>
          </Collapse>
          <Collapse in={isOpenComments} animateOpacity>
            <VStack>
              <Box w="full">
                <Text fontWeight="semibold" mt="3">
                  All Comments
                </Text>
              </Box>
              <VStack w="full">
                {isSuccessComment &&
                  dataComments.map((comment, i) => (
                    <DashboardComment comment={comment} key={i} />
                  ))}
              </VStack>
            </VStack>
          </Collapse>

          <HStack my="2" p="1" spacing={4}>
            <HStack
              cursor="pointer"
              px={1}
              rounded="md"
              onClick={onToggleComments}
              _hover={{ bg: "gray.200" }}
            >
              <Icon as={FcSms} fontSize="2xl" />
              <Text fontWeight="semibold">
                {isSuccessComment && dataComments?.length}
              </Text>
            </HStack>
            <Box
              cursor="pointer"
              px={1}
              rounded="md"
              _hover={{ bg: "gray.200" }}
            >
              <Text
                color={isOpenDetail ? "red.500" : "blue.600"}
                onClick={onToggleDetail}
              >
                {isOpenDetail ? "Show Less" : "Detail More"}
              </Text>
            </Box>
          </HStack>
        </Flex>
      </>
    </HStack>
  );
};

export default DashboardPosts;
