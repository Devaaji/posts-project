import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import useRemotePosts from "../../hooks/remote/useRemotePosts";
import useRemoteUsers from "../../hooks/remote/useRemoteUsers";

const DashboardComment = ({ comment }) => {
  const id = comment.postId ? comment.postId : null;
  const { data: dataPosts, isLoading: isLoadingPosts } = useRemotePosts();
  const { data: dataUsers, isLoading: isLoadingUsers } = useRemoteUsers();

  const findUsersToId =
    !isLoadingPosts && dataPosts?.find((post) => post.id === id).userId;

  if (findUsersToId !== false) {
    const usernameComments =
      !isLoadingUsers &&
      dataUsers?.find((user) => user.id === findUsersToId).username;

    return (
      <HStack w="full">
        <Box w="110px" alignSelf="start">
          <Text fontSize="md" fontWeight="semibold">
            {usernameComments}
          </Text>
        </Box>
        <Box w="80%" wordBreak="break-word">
          <Text fontSize="sm">{comment.name}</Text>
        </Box>
      </HStack>
    );
  }
};

export default DashboardComment;
