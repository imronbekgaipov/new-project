import { RouterProvider, createBrowserRouter } from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
