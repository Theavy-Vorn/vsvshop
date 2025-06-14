// // src/pages/UserPage.js

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { userAction } from "../redux/actions/userAction";

// const UserPage = () => {
//   const [search, setSearch] = useState("");
//   const [oldUser, setOlduser] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const dispatch = useDispatch();

//   // Fix: access from state.userReducer not state.users
//   const users = useSelector((state) => state.userReducer.users);

//   useEffect(() => {
//     dispatch(userAction());
//   }, [dispatch]);

//    useEffect(() => {
//           userAction().then(res => {
//               users(res);
//               setOlduser(res);
//           });
//       }, []);
  
//       useEffect(() => {
//           const result = oldUser.filter(users =>users.id)  
//           users(res);
//       }, [search, oldUser]);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       {successMessage && (
//             <div className="fixed top-15 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-xl shadow-lg z-50 transition-all duration-300">
//                 {successMessage}
//             </div>
//         )}

//       <div className="text-center text-2xl font-bold text-purple-800 mt-5 mb-3">
//           Dashboard Admin
//       </div>
//        <input
//           type="text"
//           id="default-search"
//           placeholder="search here ..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="form-control border-2 border-purple-800 p-2 rounded-xl me-auto w-[50%]"
//       />
//       <h2 className="text-2xl font-bold mb-4">All Users</h2>
//       <table className="w-full border border-gray-300 text-left">
//         <thead className="bg-purple-100">
//           <tr>
//             <th className="border px-4 py-2">ID</th>
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Email</th>
//             <th className="border px-4 py-2">Role</th>
//             <th className="border px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users && users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="border px-4 py-2">{user.id}</td>
//                 <td className="border px-4 py-2">{user.name}</td>
//                 <td className="border px-4 py-2">{user.email}</td>
//                 <td className="border px-4 py-2">{user.role}</td>
//                 <td className="border px-4 py-2">{
//                   <div>
//                     <button className="sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Edit</button>
//                     <button className="sm ml-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
//                   </div>
//                   }</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td className="border px-4 py-2 text-center" colSpan={4}>No users found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserPage;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const USERS_PER_PAGE = 7;

  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  // Filter users by search input (name, email, or id)
  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toString().includes(search)
  );

  // Pagination logic
  const totalEntries = filteredUsers?.length || 0;
  const totalPages = Math.ceil(totalEntries / USERS_PER_PAGE);

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = Math.min(startIndex + USERS_PER_PAGE, totalEntries);
  const usersToShow = filteredUsers?.slice(startIndex, endIndex);

  // Handle Prev/Next button clicks
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Reset to page 1 if search changes
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="p-6 w-[90%] mx-auto mt-10">
      <div className="text-center text-2xl font-bold text-purple-800 mt-5 mb-3">
        Dashboard Admin
      </div>

      <input
        type="text"
        placeholder="search here ..."
        value={search}
        onChange={onSearchChange}
        className="form-control border-2 border-purple-800 p-2 rounded-xl me-auto w-[50%] mb-4"
      />

      <h2 className="text-2xl font-bold mb-4 text-purple-800">All Users</h2>
      <Link to={"/signup"} >
        <button className="sm focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">+ Add User</button>
      </Link>
      <table className="w-full border border-purple-800 text-left">
        <thead className="bg-purple-100">
          <tr>
            <th className="border border-purple-800 px-4 py-2">ID</th>
            <th className="border border-purple-800 px-4 py-2">Name</th>
            <th className="border border-purple-800 px-4 py-2">Email</th>
            <th className="border border-purple-800 px-4 py-2">Role</th>
            <th className="border border-purple-800 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersToShow && usersToShow.length > 0 ? (
            usersToShow.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border border-purple-800 px-4 py-2">{user.id}</td>
                <td className="border border-purple-800 px-4 py-2">{user.name}</td>
                <td className="border border-purple-800 px-4 py-2">{user.email}</td>
                <td className="border border-purple-800 px-4 py-2">{user.role}</td>
                <td className="border border-purple-800 py-2 px-4">
                  <div>
                    <button className="sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                      Edit
                    </button>
                    <button className="sm ml-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan={5}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination footer */}
      <div className="flex flex-col items-center mt-5">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalEntries === 0 ? 0 : startIndex + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {endIndex}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalEntries}
          </span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages || totalEntries === 0}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;


