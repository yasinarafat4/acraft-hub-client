import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectedClasses = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access-token");
  // const [axiosSecure] = useAxiosSecure();
  const {
    isLoading,
    refetch,
    data: selectedClass = [],
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await fetch(
        `https://acraft-hub-server.vercel.app/selectedClasses?email=${user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.json();
    },
    // queryFn: async () => {
    //   const response = await axiosSecure(
    //     `/selectedClasses?email=${user?.email}`
    //   );
    //   return response.data;
    // },
  });
  return [selectedClass, refetch, isLoading];
};

export default useSelectedClasses;
