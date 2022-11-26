import { useQuery } from "@tanstack/react-query";
import { getFetcher } from "../../libs/axios";

const useRemoteUsers = () => {
  const uri = "/users";

  const { data, ...others } = useQuery(
    ["users"],
    async () => await getFetcher(uri)
  );

  return { data, ...others };
};

export default useRemoteUsers;
