import { LoaderIcon, Plus } from "lucide-react";
import React from "react";

export default function SubmitButton({
  isLoading = false,
  loadingButtonTitle,
  buttonTitle,
}) {
  return (
    <div className="sm:col-span-1 mt-8">
      {isLoading ? (
        <button
          disabled
          type="button"
          className="mt-4 text-white bg-orange-700 gap-2
     hover:bg-orange-800 focus:ring-4 focus:outline-none
     focus:ring-orange-300 font-medium rounded-xl text-sm px-5 py-2.5 
     text-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800
     inline-flex items-center"
        >
          <LoaderIcon />
          <span>{loadingButtonTitle}</span>
        </button>
      ) : (
        <button
          type="submit"
          className="mt-4 text-white bg-orange-700 gap-2
     hover:bg-orange-800 focus:ring-4 focus:outline-none
     focus:ring-orange-300 font-medium rounded-xl text-sm px-5 py-2.5 
     text-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800
     inline-flex items-center"
        >
          <Plus />
          {buttonTitle}
        </button>
      )}
    </div>
  );
}
