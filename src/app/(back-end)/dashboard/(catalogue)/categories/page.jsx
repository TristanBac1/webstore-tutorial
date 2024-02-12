import CatalogueHeader from "@/components/backend/CatalogueHeader";
import TableActions from "@/components/backend/TableActions";
import React from "react";

export default function Categories() {
  return (
    <div>
      <CatalogueHeader
        heading="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />
      <TableActions />
      <div className="py-6">
        <h2>Table</h2>
      </div>
      {/**Export || Search || Bulk Delete  */}
    </div>
  );
}
