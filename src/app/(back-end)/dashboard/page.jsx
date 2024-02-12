import React from "react";
import Heading from "@/components/backend/Heading";
import LargeCards from "@/components/backend/LargeCards";
import SmallCards from "@/components/backend/SmallCards";
import GraphCharts from "@/components/backend/GraphCharts";
import CustomDataTable from "@/components/backend/CustomDataTable";

export default function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <GraphCharts />
      <CustomDataTable />
    </div>
  );
}
