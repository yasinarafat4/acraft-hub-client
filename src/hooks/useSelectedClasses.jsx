import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const response = await axiosSecure(
        `/selectedClasses?email=${user?.email}`
      );
      return response.data;
    },
  });
  return [selectedClass, refetch];
};

export default useSelectedClasses;
