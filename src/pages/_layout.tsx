import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
