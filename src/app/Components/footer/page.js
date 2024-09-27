import React from "react";

const Ending = () => {
  return (
    <footer className="bg-gray-900 text-white py-1">
      <div className="container mx-auto px-6">
        <div className="text-center mt-5">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Mickaelio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Ending;
