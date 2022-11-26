import React from "react";
import { HStack, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FcSms } from "react-icons/fc";
import useRemoteUsers from "../../hooks/remote/useRemoteUsers";

const DashboardPosts = ({ post }) => {
  const { data: dataUsers, isSuccess: isSuccessUser } = useRemoteUsers();

  return (
    <HStack w="full">
      <Box w="200px" alignSelf="flex-start">
        <Text fontWeight="bold" fontSize="xl">
          {isSuccessUser &&
            dataUsers.find((u) => u.id === post.userId).username}
        </Text>
      </Box>
      <Flex w="full" direction="column">
        <Text fontWeight="semibold">{post.title}</Text>
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
  );
};

export default DashboardPosts;
