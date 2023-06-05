import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialLogin } from "../../store/login.slice";


const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialLogin());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.login.isLoading);
  const error = useSelector((state) => state.login.error);
  const data = useSelector((state) => state.login.data);

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}

      {!isLoading && !error && (
        <div>
          {data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
