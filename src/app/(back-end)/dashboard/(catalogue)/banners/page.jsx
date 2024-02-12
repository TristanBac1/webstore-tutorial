import CatalogueHeader from "@/components/backend/CatalogueHeader";
import TableActions from "@/components/backend/TableActions";
import React from "react";

export default function Banners() {
  return (
    <div>
      <CatalogueHeader
        heading="Banners"
        linkTitle="Add Banner"
        href="/dashboard/banners/new"
      />
      <TableActions />
      <div className="py-6">
        <h2>Table</h2>
      </div>
      {/**Export || Search || Bulk Delete  */}
    </div>
  );
}
