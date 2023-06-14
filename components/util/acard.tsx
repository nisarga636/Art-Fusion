import React from 'react';

const acard = () => {
  return (
    <div className="max-w-md mx-auto bg-gray shadow-md rounded-md overflow-hidden">
      <div className="flex">
        <img
          className="object-cover h-40 w-40"
          src="https://stylesatlife.com/wp-content/uploads/2020/10/Shraddha-Kapoor.jpg.webp"  // Replace with the actual image source
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">CLARA BE</h2>
          <p className="text-gray-600">age: <span className="text-black">26</span><br/>
experience:<span className="text-black">15yr</span><br/>
Skill:<span className="text-black">digital marketing,writer,animator</span></p>
        </div>
      </div>
    </div>
  );
};

export default acard;
