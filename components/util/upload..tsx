import React from 'react';

const upload = () => {
  return (
    <div className="border border-dashed border-gray-400 px-4 p-2 rounded-md m-2 w-36 h-36">
    <div className="bg-gray-200 rounded-md m-2 w-28 h-28">
     <p className="text-gray-400 text-sm">Drag your file(s) here or <span className="text-blue-800 text-sm">Browse</span> <br/> Max 2mb file size</p>
     </div>
    </div>
  );
};

export default upload;
