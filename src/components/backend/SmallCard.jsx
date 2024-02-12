import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  return (
    <div className="rounded-xl  shadow-lg bg-slate-50 dark:bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 rounded-full 
        items-center flex justify-center ${data.iconColor}`}
        >
          <data.icon />
        </div>
        <div className="text-black dark:text-white">
          <p>{data.title}</p>
          <h3 className="text-2xl font-semibold">{data.sales}</h3>
        </div>
      </div>
    </div>
  );
}
