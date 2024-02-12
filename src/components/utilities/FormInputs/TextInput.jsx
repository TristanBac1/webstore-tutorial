"use client";
import React from "react";

export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 dark:text-slate-50 text-gray-900 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className={`${
            errors[`${name}`] && "border-red-600 ring-red-600"
          } block w-full rounded-xl py-3
          text-gray-900 dark:text-slate-50 shadow-sm ring-1 ring-inset
          ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:border focus:border-orange-500 focus:ring-orange-600 
          sm:text-sm bg-transparent`}
          placeholder={`Fill in the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
