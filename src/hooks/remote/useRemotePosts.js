import { useQuery } from "@tanstack/react-query";
import { getFetcher } from "../../libs/axios";

const useRemotePosts = (page) => {
  const uri = "/posts";

  const { data, ...others } = useQuery(
    ["posts", page],
    async () => await getFetcher(uri)
  );

  return { data, ...others };
};

export default useRemotePosts;
