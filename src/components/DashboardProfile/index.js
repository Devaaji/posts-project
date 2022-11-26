import React, { useContext } from "react";
import { Stack, HStack, Text } from "@chakra-ui/react";
import useRemoteProfileUser from "../../hooks/remote/useRemoteProfileUser";
import { AuthUserContext } from "../../context/AuthUserProvider";

const DashboardProfile = () => {
  const { id } = useContext(AuthUserContext);

  const { data: dataProfileUser, isSuccess } = useRemoteProfileUser({
    idUser: id,
  });
  const dataAddress = isSuccess && dataProfileUser.address;
  const addressUser =
    isSuccess &&
    `${dataAddress.city}, ${dataAddress.street}. ${dataAddress.suite}`;

  return (
    <Stack spacing={6}>
      {isSuccess && (
        <>
          <HStack>
            <Text w="170px">Username</Text>
            <Text>:</Text>
            <Text fontWeight="semibold">{dataProfileUser.username}</Text>
          </HStack>
          <HStack>
            <Text w="170px">Email</Text>
            <Text>:</Text>
            <Text fontWeight="semibold">{dataProfileUser.email}</Text>
          </HStack>
          <HStack>
            <Text w="170px">Address</Text>
            <Text>:</Text>
            <Text fontWeight="semibold">{addressUser}</Text>
          </HStack>
          <HStack>
            <Text w="170px">Phone</Text>
            <Text>:</Text>
            <Text fontWeight="semibold">{dataProfileUser.phone}</Text>
          </HStack>
        </>
      )}
    </Stack>
  );
};

export default DashboardProfile;
