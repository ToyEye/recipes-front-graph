import React from "react";

const RecipeDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-96 w-full md:w-[720px] lg:w-[660px]"></div>
      </div>
      <div>
        <div className="animate-pulse">
          <div className="flex items-center mb-4">
            <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              Loading...
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Loading...</li>
            <li>Loading...</li>
            <li>Loading...</li>
            <li>Loading...</li>
            <li>Loading...</li>
            <li>Loading...</li>
            <li>Loading...</li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">Instructions:</h2>
          <ol className="list-decimal pl-6 mb-4">
            <li>Loading...</li>
            <li>Loading...</li>
            <li>Loading...</li>
            <li>Loading...</li>
          </ol>
          <div className="flex items-center mb-4">
            <div className="bg-gray-300 h-8 w-8 rounded-full mr-2"></div>
            <div>
              <h3 className="text-lg font-bold">Loading...</h3>
              <p className="text-gray-600">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsSkeleton;
