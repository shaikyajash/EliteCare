import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-end h-12 w-72">
      <div className="flex space-x-1">
        <div className="w-5 h-2 bg-green-500 rounded animate-loading-wave delay-100" />
        <div className="w-5 h-2 bg-green-500 rounded animate-loading-wave delay-200" />
        <div className="w-5 h-2 bg-green-500 rounded animate-loading-wave delay-300" />
        <div className="w-5 h-2 bg-green-500 rounded animate-loading-wave delay-400" />
      </div>
    </div>
  );
};

export default Loader;