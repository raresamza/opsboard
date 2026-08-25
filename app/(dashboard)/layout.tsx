import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import React from "react";
// import {Navbar} from "@/components/layout/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-background">
      {/* <nav>navbar </nav> */}
      <Navbar></Navbar>
      <div className="flex min-h-0 flex-1">
        <Sidebar></Sidebar>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      {/* <aside>sidebar</aside> */}
    </div>
  );
}
