import React from "react";

export default function ToggleInput({
  register,
  status,
  statusName,
  title,
  className = "flex flex-col gap-2 p-2",
}) {
  return (
    <div className={`${className}`}>
      <div className="w-full">
        {title && (
          <h2 className="text-slate-900 dark:text-slate-50">{title}</h2>
        )}
      </div>
      <div className="w-full">
        <label className="relative inline-flex i tems-center cursor-pointer">
          <input
            {...register(statusName)}
            type="checkbox"
            className="sr-only peer"
          />
          <div
            className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full 
          dark:bg-gray-700 peer-checked:after:translate-x-full
          peer-checked:after:border-white after:content-['']
          after:absolute after:top-[2px] after:left-[2px]
          after:bg-white after:border-gray-300 after:border
          after:rounded-full after:h-5 after:w-5 after:transition-all
          dark:border-gray-600 peer-checked:bg-orange-600"
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-50">
            {status ? "Active" : "Draft"}
          </span>
        </label>
      </div>
    </div>
  );
}
