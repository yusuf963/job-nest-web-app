import React from "react";

import Sidebar from "components/Sidebar/LoggedinSidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Loggedin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* Header */}
          <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
