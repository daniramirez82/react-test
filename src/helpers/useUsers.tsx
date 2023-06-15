import { getUsers } from "../services/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { User } from "../types";

export const useUsers = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<{ nextCursor: number | undefined; users: User[] }>({
    queryKey: ["usersData"],
    queryFn: getUsers,
    getNextPageParam: (lastPage) => lastPage?.nextCursor,
  });
  return {
    isLoading,
    error,
    users: data?.pages.flatMap((page) => page?.users) ?? [],
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};
