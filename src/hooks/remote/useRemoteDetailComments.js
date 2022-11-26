import { useQuery } from "@tanstack/react-query";
import { getFetcher } from "../../libs/axios";

const useRemoteDetailComments = ({ postId }) => {
  const id = postId ? postId : null;
  const uri = `/posts/${id}/comments`;

  const { data, ...others } = useQuery(
    ["detail-comments", id],
    async () => await getFetcher(uri)
  );

  return { data, ...others };
};

export default useRemoteDetailComments;
