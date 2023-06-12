import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const {
    isLoading,
    refetch,
    data: selectedClass = [],
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/selectedClasses?email=${user?.email}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },
    queryFn: async () => {
      const response = await axiosSecure(
        `/selectedClasses?email=${user?.email}`
      );
      return response.data;
    },
  });
  return [selectedClass, refetch, isLoading];
};

export default useSelectedClasses;
