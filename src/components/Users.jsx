import { useGetUsersQuery } from "../redux/services/userApi";

const Users = () => {
  const { data: usersData } = useGetUsersQuery();

  console.log(usersData);

  return <div>Users data: {usersData}</div>;
};

export default Users;
