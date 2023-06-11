import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClasses = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");
  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/selectedClasses?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
    },
  });
  return [selectedClass, refetch];
};

export default useSelectedClasses;
