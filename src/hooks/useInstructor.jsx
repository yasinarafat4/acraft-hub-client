import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/users/instructor/${user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Is instructor response", response);
      return response.json();
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
