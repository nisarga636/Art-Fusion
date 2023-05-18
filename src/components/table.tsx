import React from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { FiTrash } from 'react-icons/fi';

const Table = () => {
  const data = [
    { id: 1, avatar: 'https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw' , skill: 'Director', name: 'John Doe', Project_name: 'The Lost city', Date_added: '14-04-2023' },
    { id: 2, avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' , skill: 'Director', name: 'Jane Smith', Project_name: 'The Lost city', Date_added: '14-04-2023' },
    { id: 3, avatar: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg' , skill: 'Director', name: 'Mike Johnson', Project_name: 'The Lost city', Date_added: '14-04-2023' },
    { id: 4, avatar: 'https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg' , skill: 'Director', name: 'Emily Davis', Project_name: 'The Lost city', Date_added: '14-04-2023' },
  ];

  const handleDelete = (id: number) => {
    // Handle delete logic here
    console.log(`Delete user with ID: ${id}`);
  };

  const handleEdit = (id: number) => {
    // Handle edit logic here
    console.log(`Edit user with ID: ${id}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Team Members</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
          <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">ID</th>
          <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">Avatar</th>
            <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">Skill</th>
            <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">Name</th>
            <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">Project Name</th>
            <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">Date Added</th>
            <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">edit</th>
            <th className="py-3 px-6 bg-blue-800 text-white font-bold uppercase border-b border-gray-300">delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b border-gray-300">
                <td className="py-4 px-6 border-b border-gray-300">{user.id}</td>
              <td className="py-4 px-6 border-b border-gray-300">
                <img className="h-10 w-10 rounded-full" src={user.avatar} alt="Avatar" />
              </td>
              <td className="py-4 px-6 border-b border-gray-300">{user.skill}</td>
              <td className="py-4 px-6 border-b border-gray-300">{user.name}</td>
              <td className="py-4 px-6 border-b border-gray-300">{user.Project_name}</td>
              <td className="py-4 px-6 border-b border-gray-300">{user.Date_added}</td>
              <td><button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => handleEdit(user.id)}>
                  <HiOutlinePencil className="h-5 w-5" />
                </button></td>
                <td>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(user.id)}>
                  <FiTrash className="h-5 w-5" />
                </button> </td>       
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
