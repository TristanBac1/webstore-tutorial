import CatalogueHeader from "@/components/backend/CatalogueHeader";
import TableActions from "@/components/backend/TableActions";
import React from "react";

export default function Staff() {
  return (
    <div>
      <CatalogueHeader
        heading="Staff"
        href="/dashboard/staff/new"
        linkTitle="Add Staff"
      />

      <TableActions />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
