import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { deleteUser, userAction } from "../redux/actions/userAction";
const UserPage = () => {
  const [search, setSearch] = useState(""); 
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const users = useSelector((state) => state.userReducer.users);
   const columns = [
        {
            name: "ID",
            selector: row => row.id,
        },
        {
            name: "Full Name",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector:row=>row.email
        },
        {
            name: "Actions",
            selector: row => (
                <div className="flex gap-2 pt-2">
                    <button
                        type="submit"
                        onClick={() => navigate("/editsignup", { state: row })}
                        className="sm focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDelete(row.id)}
                        className="sm focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Delete
                    </button>
                </div>
            )
        }
    ];

    useEffect(() => {
      dispatch(userAction());
    }, [dispatch]);

    // Re-fetch if coming from add-user page
   useEffect(() => {
  if (location.state?.refresh) {
    dispatch(userAction());
    setSuccessMessage("User added successfully!");

    // Clear the state to avoid infinite loop
    navigate(location.pathname, { replace: true, state: {} });
  }
    }, [location, dispatch, navigate]);


  

    // Filter users by search input (name, email, or id)
    const filteredUsers = users?.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.id.toString().includes(search)
    );

    //delete user
    const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (confirmDelete) {
        try {
        await dispatch(deleteUser(id)); // This should be a thunk
        setSuccessMessage("User deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
        console.error("Failed to delete user:", error);
        }
    }
    };


  return (
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="w-[95%] m-auto">
                    {successMessage && (
                        <div className="fixed top-15 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-xl shadow-lg z-50 transition-all duration-300">
                            {successMessage}
                        </div>
                    )}

                    <div className="text-center text-2xl font-bold text-purple-800 mt-5 mb-3">
                        User Admin
                    </div>
                    <div>
                    <input
                        type="text"
                        id="default-search"
                        placeholder="search here ..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control border-2 border-purple-800 p-2 rounded-xl me-auto w-[50%]"
                    />
                    </div>
                {/* <h2 className="text-2xl font-bold mb-4 text-purple-800 mt-3">All Products</h2> */}
                    <Link to={"/signupuser"} >
                        <button className="sm focus:outline-none mt-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">+ Add Users</button>
                    </Link>
                    <DataTable
                        columns={columns}
                        data={filteredUsers}
                        pagination
                    
                    />
                </div>
        </div>
    </div>

  );
}

export default UserPage;



