import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ data }) {
  return (
    <div
      className={`rounded-xl text-white shadow-md p-4 flex items-center flex-col gap-2 ${data.color}`}
    >
      <Layers />
      <h4>{data.salePeriod}</h4>
      <h2 className="lg:text-3xl text-2xl">UGX.{data.saleAmount}</h2>
    </div>
  );
}
