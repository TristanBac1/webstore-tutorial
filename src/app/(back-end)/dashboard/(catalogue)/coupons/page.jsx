import CatalogueHeader from "@/components/backend/CatalogueHeader";
import TableActions from "@/components/backend/TableActions";
import React from "react";

export default function Coupons() {
  return (
    <div>
      <CatalogueHeader
        heading="Coupons"
        linkTitle="Add Coupons"
        href="/dashboard/coupons/new"
      />
      <TableActions />
      <div className="py-6">
        <h2>Table</h2>
      </div>
      {/**Export || Search || Bulk Delete  */}
    </div>
  );
}
