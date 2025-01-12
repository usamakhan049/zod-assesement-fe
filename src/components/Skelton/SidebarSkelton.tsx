import React from "react";

const SidebarSkelton: React.FC = () => {
  return (
    <div className="flex flex-row w-full justify-center pe-0 lg:pe-4 lg:w-1/4 lg:justify-start" role="region">
      <div className="animate-pulse flex flex-col space-y-6 w-full items-center">
        <div
          className="rounded-full bg-gray-300 h-48 w-48"
          role="presentation"
        ></div>
        <div
          className="h-6 bg-gray-300 rounded w-full"
          role="presentation"
        ></div>
        <div
          className="h-4 bg-gray-300 rounded w-full"
          role="presentation"
        ></div>
        <div
          className="h-4 bg-gray-300 rounded w-full"
          role="presentation"
        ></div>
        <div
          className="h-4 bg-gray-300 rounded w-full"
          role="presentation"
        ></div>
        <div
          className="h-10 bg-gray-300 rounded w-full mt-4"
          role="presentation"
        ></div>
      </div>
    </div>
  );
};

export default SidebarSkelton;
