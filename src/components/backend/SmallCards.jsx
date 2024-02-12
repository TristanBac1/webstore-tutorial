import React from "react";
import SmallCard from "./SmallCard";
import { BaggageClaim, PackageCheck, ShoppingCart, Truck } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Orders",
      sales: 200,
      iconColor: "bg-purple-600",
      icon: ShoppingCart,
    },
    {
      title: "Pending Orders",
      sales: 1300,
      iconColor: "bg-red-600",
      icon: BaggageClaim,
    },
    {
      title: "Processing Orders ",
      sales: 24300,
      iconColor: "bg-orange-600",
      icon: Truck,
    },
    {
      title: "Delivered Orders",
      sales: 17800,
      iconColor: "bg-green-600",
      icon: PackageCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((order, i) => (
        <SmallCard key={i} data={order} />
      ))}
    </div>
  );
}
