import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main className = "w-full h-full">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
