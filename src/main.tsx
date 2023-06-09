import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './main.css'
import { Home } from './pages/Home/index.tsx';
import { Meli } from './pages/Meli/index.tsx';
import { Root } from './routes/root.tsx';
import { MyQuestions } from './pages/MyQuestions/index.tsx';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "meli",
        element: <Meli />,
      },
      {
        path: "questions",
        element: <MyQuestions />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
