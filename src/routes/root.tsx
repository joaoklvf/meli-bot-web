import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar"

export const Root = () => {
  return (
    <>
      <Navbar />
      <main className="container p-4 my-0 mx-auto">
        <Outlet />
      </main>
    </>
  );
}