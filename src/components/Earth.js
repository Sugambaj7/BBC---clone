import React from "react";

export const Earth = () => {
  return (
    <div className="bg-red-200 mt-16">
      <div className="ml-10 pt-5">
        <p className="text-black text-xl font-bold">Earth</p>
      </div>
      <div className="grid grid-cols-3 pl-10 pr-10 pb-10 pt-3">
        <div className="bg-red-400 h-80"></div>
        <div className="bg-red-400 h-80 ml-4"></div>
        <div className="bg-red-400 h-80 ml-4"></div>
      </div>
    </div>
  );
};
