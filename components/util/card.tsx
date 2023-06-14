import React from 'react';

const Card = () => {
  return (
    <div className="width:'default', maxWidth:198 bg-white p-6 rounded-md shadow-md">
      
      <h2 className="text-2xl font-bold mb-4">Add Team Members</h2>
      <p className='text-2xl font-bold' > Enter Roles </p>
      <input
        className="w-44 mb-4 px-3 py-2 border border-black rounded-md"
        type="text"
        placeholder="Enter Role"
      />
      <p className='text-2xl font-bold'> Enter Name </p>
      <input
        className="w-44 mb-4 px-3 py-2 border border-black rounded-md"
        type="text"
        placeholder="Enter Name"
      /><br/>
      <button className="w-44 px-4 py-2 bg-blue-800 text-white rounded-md">
        Add Member
      </button>
    </div>
  );
};

export default Card;
