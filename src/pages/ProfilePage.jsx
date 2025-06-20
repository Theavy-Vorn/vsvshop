import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../redux/actions/authAction";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { auth, loading, error } = useSelector((state) => state.authReducer);

  // Load profile on first render
  useEffect(() => {
    if (!auth?.user) {
      dispatch(profileUser());
    }
  }, [dispatch, auth?.user]);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-purple-700">Loading profile...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  // Main Profile View
  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-4">
      {auth?.user ? (
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center space-y-6 border border-purple-200">
          {/* Avatar */}
          <img
            src="https://i.pinimg.com/736x/48/c4/cd/48c4cd0d71851a6c33dee9b486830c36.jpg"
            alt="User Avatar"
            className="w-24 h-24 mx-auto rounded-full border-4 border-purple-300 shadow-md"
          />

          {/* Name & Email */}
          <div>
            <h2 className="text-2xl font-bold text-purple-800">
              {auth.user.name}
            </h2>
            <p className="text-gray-600">{auth.user.email}</p>
          </div>

          {/* Info list */}
          <div className="text-left space-y-2 mt-4">
            <p className="text-sm text-gray-500 border-t pt-4">
              More info coming soon...
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-xl">No profile data available.</p>
      )}
    </div>
  );
};

export default ProfilePage;
