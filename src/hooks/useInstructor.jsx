import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `https://acraft-hub-server.vercel.app/users/instructor/${user?.email}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   console.log("Is instructor response", response);
    //   return response.json();
    // },
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/users/instructor/${user?.email}`
      );
      console.log("is instructor response", response);
      return response.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
