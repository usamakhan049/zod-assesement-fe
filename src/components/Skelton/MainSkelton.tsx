import React from "react";

const MainSkelton: React.FC = () => {
  return (
    <div className="flex flex-row w-full mt-10 lg:ps-4 lg:w-3/4 lg:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full animate-pulse" >
        {[1, 2, 3, 4, 5, 6, 8, 9].map((_, index) => (
          <div
            key={index}
            role="group"
            className="animate-pulse flex flex-col justify-between p-4 border border-border rounded-md shadow min-h-36"
          >
            <div className="flex flex-row justify-between gap-4">
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/12"></div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="h-3 bg-gray-300 rounded w-1/3"></div>
            </div>
            <div className="flex flex-row mt-5">
              <div className="h-3 bg-gray-300 rounded w-full"></div>
            </div>
            <div className="flex flex-row mt-5 items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSkelton;
