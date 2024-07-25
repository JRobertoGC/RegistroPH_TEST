import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SearchPage } from "../pages/index";
import { ResultPage } from "../pages/index"
import { EditPage } from "../pages/index";
import PublicRouter from "./PublicRouter";
import { ROUTES } from "./constants";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicRouter />,
    children: [
      { path: ROUTES.SEARCH, element: <SearchPage /> },
      { path: ROUTES.RESULTS, element: <ResultPage /> },
      { path: ROUTES.EDIT, element: <EditPage /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;