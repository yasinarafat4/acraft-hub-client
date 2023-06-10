import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClasses = () => {
  const { user } = useAuth();
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/selectedClasses?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [selectedClasses, refetch];
};

export default useSelectedClasses;
