import { Download, Search, Trash } from "lucide-react";
import React from "react";

export default function TableActions() {
  return (
    <div className="flex  items-center py-8 px-8 bg-slate-50 shadow-sm border dark:border-slate-700 dark:bg-slate-700 rounded-xl gap-8">
      <button class="gap-2 relative inline-flex items-center justify-center py-3 px-4 mb-2 me-2 overflow-hidden border border-transparent hover:border-white text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-pink-500 to-orange-400 hover:to-pink-500 hover:from-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <Download />
        <span>Export</span>
      </button>
      <div className="flex-grow">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative w-3/4 mx-auto">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-500" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-3 ps-10  text-sm w-full text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <button className="flex gap-2 bg-red-600 py-2 px-4 rounded-xl">
        <Trash />
        <span>Bulk Delete</span>
      </button>
    </div>
  );
}
