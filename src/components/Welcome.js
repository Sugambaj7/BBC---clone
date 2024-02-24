import React from "react";

export const Welcome = () => {
  return (
    <div className="bg-green-400 ml-28 mr-28 mt-5 max-h-fit">
      <div className="m-3 text-black font-bold text-2xl">
        Welcome to BBC.com
      </div>
      <div className="grid grid-cols-3 ml-3 mr-3 mt-3 mb-5">
        <div className="bg-red-400 h-80 w-96 mb-2"></div>
        <div className="grid grid-rows-2 mr-2">
          <div className="bg-blue-500 h-36"></div>
          <div className="bg-blue-200 h-36 mt-1"></div>
        </div>
        <div className="grid grid-rows-2 ml-2">
          <div className="bg-orange-500 h-36"></div>
          <div className="bg-pink-200 h-36 mt-1"></div>
        </div>
      </div>
    </div>
  );
};
