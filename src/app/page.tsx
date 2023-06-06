import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../store/updateTeamMembers";

function MainPage() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.displayTeamMembers
  );

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Team Members</h1>
      {data.map((users: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
        <div key={users.id}>{users.name}</div>
      ))}
    </div>
  );
}

export default MainPage;
