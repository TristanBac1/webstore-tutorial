"use client";
import React, { useState } from "react";
import { Plus, Search, X } from "lucide-react";

export default function ArrayInput({ items = [], setItems, itemTitle }) {
  const [item, setItem] = useState("");
  const [showItemForm, setShowItemform] = useState(false);

  function addItem(item) {
    if (item) {
      setItems([...items, item]);
    }
    setItem("");
  }

  function removeItem(index) {
    setItems(items.filter((_, itemIndex) => itemIndex != index));
  }

  return (
    <div className="sm:grid-cols-2">
      {showItemForm ? (
        <form>
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search />
            </div>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder={`Search ${itemTitle} ...`}
              required
            />
            <button
              onClick={() => addItem(item)}
              type="button"
              className="text-white absolute top-2.5 end-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-800"
            >
              <span>Add</span>
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowItemform(true)}
          type="button"
          className="flex w-fit space-x-3 dark:text-slate-50 text-slate-800 p-2 pe-4"
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}
      <div className="flex flex-wrap pt-2 gap-4">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                removeItem(i);
              }}
              className="flex space-x-2 bg-slate-600 rounded-xl  px-2 py-1 items-center"
            >
              <span>{item}</span>
              <X className="w-4 h-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
