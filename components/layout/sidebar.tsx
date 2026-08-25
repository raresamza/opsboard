import React from "react";

const Sidebar = () => {
  return (
    <div className="w-60 border border-sidebar-border flex flex-col bg-sidebar text-sidebar-foreground">
      <div className="space-y-2 p-4 mt-4 ">
        <div>Dashboard</div>
        <div>Projects</div>
        <div>Issues</div>
        <div>Board</div>
        <div>Incidents</div>
        <div>My issues</div>
        <div>Notifications</div>
        <div>Settings</div>
      </div>
      <div className="space-y-2 px-4 mt-10">
        <div>Projects</div>
        <div>Poject1</div>
        <div>Poject2</div>
        <div>Poject3</div>
        <div>Poject4</div>
      </div>
      <div className="text-4xl border-t border-sidebar-border  mt-auto">
        profil
      </div>
    </div>
  );
};

export default Sidebar;
