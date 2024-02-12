"use client";

import React, { useState } from "react";
import SideNav from "../../components/backend/SideNav";
import Navbar from "../../components/backend/Navbar";
export default function Layout({ children }) {
  const [showSideNav, setShowSideNav] = useState(true);

  return (
    <div className="flex">
      {showSideNav == true && <SideNav showSideNav={showSideNav} />}
      <div className="lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen">
        <Navbar showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        <main
          className="p-8 dark:bg-slate-900 bg-slate-50 text-slate-50 
        mt-16 min-h-screen"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
