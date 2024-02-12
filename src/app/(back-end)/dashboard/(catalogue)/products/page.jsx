import CatalogueHeader from "@/components/backend/CatalogueHeader";
import TableActions from "@/components/backend/TableActions";
import React from "react";

export default function Products() {
  return (
    <div>
      <CatalogueHeader
        heading="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
      />
      <TableActions />
      <div className="py-6">
        <h2>Table</h2>
      </div>
      {/**Export || Search || Bulk Delete  */}
    </div>
  );
}
