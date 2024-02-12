import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSalesChart from "./BestSalesChart";

export default function GraphCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesChart />
      <BestSalesChart />
    </div>
  );
}
