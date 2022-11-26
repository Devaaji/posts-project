import { useQuery } from "@tanstack/react-query";
import { getFetcher } from "../../libs/axios";

const useRemoteProfileUser = ({ idUser }) => {
  const id = idUser ? idUser : null;
  const uri = `/users/${id}`;

  const { data, ...others } = useQuery(
    ["profile", id],
    async () => await getFetcher(uri)
  );

  return { data, ...others };
};

export default useRemoteProfileUser;
