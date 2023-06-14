import { useState } from 'react';

const SwipeableDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex justify-end">
      <button
        className="fixed top-0 right-0 z-50 p-4 bg-blue-700 text-white rounded-l-md focus:outline-none"
        onClick={handleDrawerToggle}
      >
        {isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}
      </button>
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-2 right-2 p-2 text-gray-500 bg-white rounded-full focus:outline-none"
          onClick={handleDrawerToggle}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-9.293a1 1 0 010 1.414L7.414 12l3.293 3.293a1 1 0 01-1.414 1.414L6 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L4.586 12 1.293 8.707a1 1 0 011.414-1.414L6 10.586l3.293-3.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Drawer Content</h1>
        <p className="mt-4">This is the content of the drawer.</p>
      </div>
    </div>
  );
};

export default SwipeableDrawer;
