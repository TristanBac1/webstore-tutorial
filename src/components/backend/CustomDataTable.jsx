"use client";

import React, { useState } from "react";
import data from "../../data.json";

export default function CustomDataTable() {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentDisplayedData = data.slice(startIndex, endIndex);
  const numberOfPages = Math.ceil(data.length / PAGE_SIZE);
  const pageEndIndex = Math.min(endIndex, data.length);

  function changeCurrentPage(x) {
    setCurrentPage(x);
    console.log(currentPage + "" + numberOfPages);
  }

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4 text-slate-700 dark:text-slate-50">
        Recent Orders
      </h2>
      <div className="p-8">
        <div className="overflow-x-auto shadow-md sm:rounded-xl">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label forhtml="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {currentDisplayedData.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          forhtml="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.first_name}
                    </th>
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.last_name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.gender}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-slate-700 dark:text-white">
                {startIndex + 1}-{endIndex}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700 dark:text-white">
                {data.length}
              </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  onClick={(x) => changeCurrentPage(currentPage - 1)}
                  disabled={currentPage == 1}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>

              {Array.from({ length: numberOfPages }, (_, i) => {
                return (
                  <li key={i}>
                    <button
                      onClick={() => setCurrentPage(i + 1)}
                      disabled={currentPage == i + 1}
                      className={`${
                        currentPage == i + 1
                          ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-50 bg-slate-700 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 "
                          : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-blue-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-blue-800 dark:border-blue-700 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={(x) => changeCurrentPage(currentPage + 1)}
                  disabled={currentPage == numberOfPages}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
