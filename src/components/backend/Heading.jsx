import React from "react";

export default function Heading({ title }) {
  return (
    <div className="text-2xl font-semibold text-slate-800 dark:text-slate-50 ">
      <h2>{title}</h2>
    </div>
  );
}
