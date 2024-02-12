import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      salePeriod: "Todays Sales",
      saleAmount: 1100,
      color: "bg-green-600",
    },
    {
      salePeriod: "Yesterdays Sales",
      saleAmount: 1300,
      color: "bg-blue-600",
    },
    {
      salePeriod: "This Month",
      saleAmount: 24300,
      color: "bg-orange-600",
    },
    {
      salePeriod: "Last Month",
      saleAmount: 17800,
      color: "bg-purple-600",
    },

    {
      salePeriod: "All-Time Sales",
      saleAmount: 1100000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((order, i) => (
        <LargeCard className={order.color} key={i} data={order} />
      ))}
    </div>
  );
}
