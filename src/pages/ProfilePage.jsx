import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../redux/actions/authAction";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { auth, loading, error } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (!auth?.user) {
      dispatch(profileUser());
    }
  }, [dispatch, auth?.user]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Profile Page</h1>
      {auth && auth.user ? (
        <div>
          <p>Name: {auth.user.name}</p>
          <p>Email: {auth.user.email}</p>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
};

export default ProfilePage;
