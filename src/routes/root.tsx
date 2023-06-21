import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import { LoadingProvider } from "../contexts/loadingContext";
import { QuestionProvider } from "../contexts/questionContext";

export const Root = () => {
  return (
    <LoadingProvider>
      <QuestionProvider>
        <Navbar />
        <main className="container p-4 my-0 mx-auto">
          <Outlet />
        </main>
      </QuestionProvider>
    </LoadingProvider>
  );
}