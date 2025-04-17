import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import News from "./News";

const Layout = ({ children }) => {
  return (
    <div className="font-sans text-textPrimary px-2 md:px-16 md:py-2">
      <NavBar />

      <section className="flex space-x-4">
        {/*   Sidebar   */}
        <SideBar />
        {children} {/* component */}
        {/*   News   */}
        <News />
      </section>
    </div>
  );
};

export default Layout;
