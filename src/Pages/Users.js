import React, { useState, useEffect } from "react";
// import AddUser from "./AddUser";
// import EditUser from "./EditUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("users", data);
      setUsers(data); // Assuming the API returns an array of users
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // const handleAddUserClick = () => {
  //   console.log("clicked add user");
  //   setIsAddModalOpen(true);
  // };

  // const handleEditUserClick = (userId) => {
  //   console.log("clicked edit user", userId);
  //   setUserId(userId);
  //   setIsEditModalOpen(true); // Open edit modal
  // };

  // const handleCloseModal = () => {
  //   setIsAddModalOpen(false);
  //   setIsEditModalOpen(false);
  // };

  // const handleUserAdded = (newUser) => {
  //   setUsers((prevUsers) => [newUser, ...prevUsers]);
  //   setIsAddModalOpen(false);
  // };

  // const handleUserUpdated = (updatedUser) => {
  //   setUsers((prevUsers) =>
  //     prevUsers.map((user) =>
  //       user.id === updatedUser.id ? updatedUser : user
  //     )
  //   );
  //   setIsEditModalOpen(false);
  // };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="flex-1 flex items-center space-x-2">
              <h5>
                <span className="text-gray-500">All Users:</span>
                <span className="dark:text-white">{users.length}</span>
              </h5>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    placeholder="Search for users"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                // onClick={handleAddUserClick}
                type="button"
                className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  className="h-3.5 w-3.5 mr-1.5 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add User
              </button>
              {/* {isAddModalOpen && (
                <AddUser onClose={handleCloseModal} onUserAdded={handleUserAdded} />
              )} */}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">#</th>
                  <th scope="col" className="p-4">Name</th>
                  <th scope="col" className="p-4">Email</th>
                  <th scope="col" className="p-4">Last Update</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan="5" className="text-center py-3">Loading...</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan="5" className="text-center py-3 text-red-500">{error}</td>
                  </tr>
                )}
                {!loading && !error && users.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center py-3">No users available</td>
                  </tr>
                )}
                {!loading &&
                  !error &&
                  users.map((user, index) => (
                    <tr
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      key={index}
                    >
                      <td className="p-4">{index + 1}</td>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {user.name}
                      </th>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3">{user.lastUpdate}</td>
                      <td className="p-4">
                        <button
                          // onClick={() => handleEditUserClick(user.id)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;

