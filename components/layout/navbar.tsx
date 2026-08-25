import React from "react";

const Navbar = () => {
  return (
    <nav className="flex h-16 shrink-0 justify-between items-center px-4">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="flex items-center justify-center *:px-2">
        {/* span si nu ul pt ca astea o sa fie componente */}
        <span>searchbar</span>
        <span>setari</span>
        <span>avatar</span>
      </div>
    </nav>
  );
};

export default Navbar;
