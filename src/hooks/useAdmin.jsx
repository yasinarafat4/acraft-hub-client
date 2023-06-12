import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/users/admin/${user?.email}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   console.log("Is admin response", response);
    //   return response.json();
    // },
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin response", response);
      return response.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
