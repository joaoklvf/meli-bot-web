import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import { LoadingProvider } from "../contexts/loadingContext";

export const Root = () => {
  return (
    <LoadingProvider>
      <Navbar />
      <main className="container p-4 my-0 mx-auto">
        <Outlet />
      </main>
    </LoadingProvider>
  );
}